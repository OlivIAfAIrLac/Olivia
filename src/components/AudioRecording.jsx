
import { NotificationContext } from "@/app/NotificationProvider";
import { apiRoutes } from "@/helpers/apiRoutes";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { BsFillRecordFill } from "react-icons/bs";
import { FaFileAudio } from "react-icons/fa6";
import { TbUpload } from "react-icons/tb";
import IconButton from "./IconButton";
import Modal from "./Modal";

const mimeType = "audio/mp4a-latm";
// const mimeType = "audio/x-wav";

const AudioRecorder = ({
    handleOpenModalAudio,
    setRefresh,
    id,
}) => {
    const notificationCtx = useContext(NotificationContext)
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audio, setAudio] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [openRecordedAudioModal, setOpenRecordedAudioModal] = useState(false)

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(mediaStream);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("La grabación de audio no esta soportada en su navegador");
        }
    };

    const startRecording = async () => {
        setRecordingStatus("recording");
        const media = new MediaRecorder(stream, { type: mimeType });

        mediaRecorder.current = media;

        mediaRecorder.current.start();

        let localAudioChunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };

        setAudioChunks(localAudioChunks);
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();

        mediaRecorder.current.onstop = () => {
            // const audioBlob = new Blob(audioChunks, { type: mimeType });
            // const audioUrl = URL.createObjectURL(audioBlob);
            // setAudio(audioUrl);
            setOpenRecordedAudioModal(true)
            // setAudioChunks([]);
            /* Upload Audio File */
        };
    };
    const downLoadFile = () => {
        const anchorElement = document.createElement('a');
        document.body.appendChild(anchorElement);
        anchorElement.style.display = 'none';
        anchorElement.href = audio;
        anchorElement.download = 'audio-record.mp4';
        anchorElement.click();

        window.URL.revokeObjectURL(audio);
    }

    const handleSaveAudio = async () => {
        try {
            const formData = new FormData()
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            formData.append('audios', audioBlob, `audio_${id}.m4a`)
            formData.append("expediente", id)
            const res = await axios.post(apiRoutes.AUDIO, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 200) {
                setOpenRecordedAudioModal(false)
                setAudioChunks([])
                setRefresh(true)
            }
        } catch (error) {
            notificationCtx.setError(error)
            notificationCtx.setShowErrorNotification(true)
            console.error(error);
        }
    }

    useEffect(() => {
        getMicrophonePermission()
    }, [permission])

    const AudioRecordedModal = () => {
        return <Modal
            open={openRecordedAudioModal}
            setOpen={setOpenRecordedAudioModal}
        >
            <div className="flex flex-col justify-center items-center h-60">
                <button className='flex save-bg-btn primary-bg py-6 pr-8 pl-16 rounded-full' onClick={handleSaveAudio}>
                    <FaFileAudio className='flex-initial' size={35} />
                    <span className='ml-2 flex-initial mr-8 mt-2 capitalize'>
                        Guardar
                    </span>
                </button>
            </div>
        </Modal>
    }

    return (
        <div className="p-3 ml-auto mr-5">
            <AudioRecordedModal />
            {!permission ? (
                <button onClick={getMicrophonePermission} type="button">
                    Permisos Microfono
                </button>
            ) : null}
            {permission && recordingStatus === "inactive" ? (
                <IconButton onClick={startRecording} className="mr-2">
                    <BiSolidMicrophone size={40} />
                </IconButton>
            ) : null}
            {recordingStatus === "recording" ? (
                <>
                    Grabando....
                    <IconButton onClick={stopRecording} className="mr-2 animate-pulse">
                        <BsFillRecordFill size={40} />
                    </IconButton>
                </>
            ) : null}
            {/* {audio ? (
                <IconButton onClick={downLoadFile} className="mr-2">
                    <FaDownload size={40} />
                </IconButton>
                // <a download href={audio}>
                //     Descargar Audio
                // </a>

            ) : null} */}
            <IconButton className="" onClick={handleOpenModalAudio}>
                <TbUpload size={40} />
            </IconButton>
        </div>
    );
};

export default AudioRecorder;