'use client'
import { NotificationContext } from "@/app/NotificationProvider";
import AudioPlayer from "@/components/AudioPlayer";
import AudioRecorder from "@/components/AudioRecording";
import ButtonGroupCedulaExpediente from "@/components/ButtonGroupCedulaExpediente";
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import { FileViewer } from "@/components/FileViewer";
import IconButton from "@/components/IconButton";
import IconFile from "@/components/IconFile";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import Modal from "@/components/Modal";
import { apiRoutes } from "@/helpers/apiRoutes";
import { routes } from "@/helpers/routes";
import axios from "axios";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { TbUpload } from "react-icons/tb";



const HomeFolio = ({ params }) => {
    const notificationCtx = useContext(NotificationContext)
    const { id } = params;
    const [expedienteData, setExpedienteData] = useState()
    const [openModalAudio, setOpenModalAudio] = useState(false)
    const [openModalRemoveAudio, setOpenModalRemoveAudio] = useState(false)
    const [openModalDocument, setOpenModalDocument] = useState(false)
    const [openModalPlayer, setOpenModalPlayer] = useState(false)
    const [selectedAudios, setSelectedAudios] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])
    const [playerUrl, setPlayerUrl] = useState()
    const [refresh, setRefresh] = useState(false)
    const [selectedFile2Remove, setSelectedFile2Remove] = useState('')
    const [selectedTypeFile2Remove, setSelectedTypeFile2Remove] = useState('')
    const [error, setError] = useState()
    const [uploadingAudio, setUploadingAudio] = useState(false)
    const [uploadingDocumento, setUploadingDocumento] = useState(false)

    const handleOpenModalAudio = (ev) => {
        setOpenModalAudio(true)
        setSelectedAudios([])
    }
    const handleOpenModalDocument = (v) => {
        setSelectedFiles([])
        setOpenModalDocument(true)
    }
    const handleDocumentOnChange = (ev) => {
        ev.preventDefault()
        setSelectedFiles(ev.target.files)
    }
    const handleAudioOnChange = (ev) => {
        ev.preventDefault()
        setSelectedAudios(ev.target.files)
    }
    const handleSubmitDocumentos = async (ev) => {
        ev.preventDefault()
        let formData = new FormData()
        try {
            setUploadingDocumento(true)
            for (let i = 0; i < selectedFiles.length; i++) {
                formData.append("documentos", selectedFiles[i]);
            }
            formData.append("expediente", id)
            const res = await axios.post(apiRoutes.DOCUMENTO, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 200) {
                setOpenModalDocument(false)
                setUploadingDocumento(false)
                setRefresh(true)
                setSelectedFiles([])
            }
        } catch (error) {

            alert(error)
            console.error(error);
        }
    }
    const handleSubmitAudios = async (ev) => {
        ev.preventDefault()
        let formData = new FormData()
        try {
            setUploadingAudio(true)
            for (let i = 0; i < selectedAudios.length; i++) {
                formData.append("audios", selectedAudios[i]);
            }
            formData.append("expediente", id)
            const res = await axios.post(apiRoutes.AUDIO, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 200) {
                setOpenModalAudio(false)
                setUploadingAudio(false)
                setRefresh(true)
                setSelectedAudios([])
            }
        } catch (error) {

            console.error(error);
        }
    }
    const handleSelected2RemoveFile = async ({ filename, type }) => {
        setSelectedFile2Remove(filename)
        setSelectedTypeFile2Remove(type)
        setOpenModalRemoveAudio(true)
    }
    const handleRemoveFile = async () => {
        try {
            const apiRoute = {
                audio: apiRoutes.AUDIO,
                documento: apiRoutes.DOCUMENTO
            }
            setOpenModalRemoveAudio(false)
            const res = await axios.delete(`${apiRoute[selectedTypeFile2Remove]}/${id}?filename=${selectedFile2Remove}`)
            if (res.status === 200) {
                setRefresh(true)
            }
        } catch (error) {
            notificationCtx.setError(error)
            notificationCtx.setShowErrorNotification(true)
            console.error(error);
        }
    }

    const getData = useCallback(async () => {
        try {
            const res = await axios.get(`${apiRoutes.EXPEDIENTE}/${id}`);
            if (res.status === 200) {
                setExpedienteData({ ...res.data })
                setRefresh(false)
            }
        } catch (error) {
            setError(error)
            notificationCtx.setError(error)
            notificationCtx.setShowErrorNotification(true)
            console.error(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, refresh]);

    const AudioModal = () => <Modal
        open={openModalAudio}
        setOpen={setOpenModalAudio}
    >
        <div className="mt-8 login-bg p-3">
            <span>Arrastra aqui tus audios</span>
            <div className="p-3 grid grid-flow-row grid-cols-4 gap-3 ">
                {
                    Array.from(selectedAudios).map(
                        (file, index) => {
                            const extension = file.name.split('.')[1]
                            return <IconFile
                                extension={extension}
                                size={35}
                                key={`file_${index}`}
                            />
                        })
                }
            </div>

        </div>
        <form onSubmit={handleSubmitAudios}>
            <div className="flex flex-row mt-2">
                <label htmlFor="documento" className="ml-auto">Buscar en mi audios</label>
                <input
                    id="documento"
                    type="file"
                    multiple
                    accept=".m4a,.wav"
                    className="hidden"
                    onChange={handleAudioOnChange}
                />
            </div>
            {/* Submit button */}
            <div className="grid grid-flow-col gap-6 text-center">
                <button className="font-bold save-bg-btn capitalize py-3 w-full mt-5"
                    disabled={uploadingAudio}
                    type="submit"
                >
                    {
                        uploadingAudio
                            ? <div className='flex justify-center items-center'>
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600  fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                            </div>
                            : 'Guardar'
                    }

                </button>
            </div>
        </form>
    </Modal>;

    const DocumentModal = () => <Modal
        open={openModalDocument}
        setOpen={setOpenModalDocument}
    >
        <div className="mt-8 login-bg p-3">
            <span>Arrastra aqui tus documentos</span>
            <div className="p-3 grid grid-flow-row grid-cols-4 gap-3 ">
                {
                    Array.from(selectedFiles).map(
                        (file, index) => {
                            const extension = file.name.split('.')[1]
                            return <IconFile
                                extension={extension}
                                size={35}
                                key={`file_${index}`}
                            />
                        })
                }
            </div>

        </div>
        <form onSubmit={handleSubmitDocumentos}>
            <div className="flex flex-row mt-2">
                <label htmlFor="documento" className="ml-auto">Buscar en mi documentos</label>
                <input
                    id="documento"
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
                    className="hidden"
                    onChange={handleDocumentOnChange}
                />
            </div>
            {/* Submit button */}
            <div className="grid grid-flow-col gap-6 text-center">
                <button className="font-bold save-bg-btn capitalize py-3 w-full mt-5"
                    type="submit"
                >
                    {uploadingDocumento ? <div className='flex justify-center items-center'>
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600  fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                    </div>
                        : 'Guardar'}
                </button>
            </div>
        </form>
    </Modal>

    const AudioPlayerModal = () => {
        return <Modal
            open={openModalPlayer}
            setOpen={setOpenModalPlayer}
        >
            <div>
                <AudioPlayer src={playerUrl} />
            </div>
        </Modal>
    }

    const RemoveAudioModal = () => {
        return <Modal
            open={openModalRemoveAudio}
            setOpen={setOpenModalRemoveAudio}
        >
            <div className="mt-9 flex flex-col justify-center items-center">
                <span>¿Deseas <span className="font-bold">eliminar</span> el {selectedTypeFile2Remove} &quot;{selectedFile2Remove}&quot;</span>
                <div className="mt-6 grid grid-flow-col gap-6 text-center">
                    <button className="px-8 font-bold navbar-bg capitalize py-3 mt-5"
                        onClick={handleRemoveFile}
                    >
                        Eliminar
                    </button>
                    <button className="px-8 font-bold navbar-bg capitalize py-3 mt-5"
                        onClick={() => setOpenModalRemoveAudio(false)}
                    >
                        Cancelar
                    </button>

                </div>
            </div>
        </Modal>
    }

    useEffect(() => {
        getData()
    }, [getData])

    const handleAudioPlayer = (url) => {
        setPlayerUrl(url)
        setOpenModalPlayer(true)
    }


    return (
        <div className="login-bg py-12 pl-14">
            <AudioModal />
            <DocumentModal />
            <RemoveAudioModal />
            <AudioPlayerModal />
            {!expedienteData ? <LoaderSkeleton />
                : <Container>
                    <span className="text-lg mb-4">Expediente</span>


                    <div className="p-6 primary-bg flex flex-col">
                        <DateTimeDisplayer
                            timeStamp={expedienteData.expediente.createdAt}
                        />
                        <span className="font-bold">Folio {expedienteData.expediente.folio}</span>
                        <span className="mb-5 capitalize">{expedienteData.expediente.nombre}</span>
                        {/* Audio Container */}
                        <div className="p-3 login-bg flex flex-col">
                            <span className="font-bold">
                                Audio
                            </span>
                            <div className="px-5 mt-2 flex flex-col ">
                                {expedienteData.audios.map((item, index) => <FileViewer
                                    isAudio
                                    onView={() => handleAudioPlayer(item.url)}
                                    key={item.descripcion + index}
                                    url={item.url}
                                    onRemove={() => handleSelected2RemoveFile({ filename: item.descripcion, type: 'audio' })}
                                    descripcion={item.descripcion}
                                />)}
                            </div>
                            {/* AUDIO Buttons */}
                            <AudioRecorder
                                id={id}
                                setRefresh={setRefresh}
                                handleOpenModalAudio={handleOpenModalAudio}
                            />
                        </div>
                        {/* Documentos Container */}
                        <div className="mt-2 p-3 login-bg flex flex-col">
                            <span className="font-bold">Documentos</span>
                            {
                                expedienteData.documentos.map((item, index) => <FileViewer
                                    key={item.descripcion + index}
                                    url={item.url}
                                    onRemove={() => handleSelected2RemoveFile({ filename: item.descripcion, type: 'documento' })}
                                    descripcion={item.descripcion}
                                />)
                            }
                            {/* Upload doc button */}
                            <div className="p-3 ml-auto" >
                                <IconButton onClick={handleOpenModalDocument}>
                                    <TbUpload size={40} />
                                </IconButton>
                            </div>
                        </div>
                        {/* Buttons group */}
                        <ButtonGroupCedulaExpediente
                            folio={id}
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center items-center">
                        <Link className="font-bold primary-bg capitalize py-3 px-12 mt-5"
                            href={routes.dashboard.main}
                        >
                            más expedientes
                        </Link>
                    </div>
                </Container>
            }
        </div>
    );
}


export default HomeFolio;