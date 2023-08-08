'use client'
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
import { useCallback, useEffect, useState } from "react";
import { TbUpload } from "react-icons/tb";



const HomeFolio = ({ params }) => {
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
                setRefresh(true)
                setSelectedFiles([])
            }
        } catch (error) {
            setError(error)
            alert(error)
            console.error(error);
        }
    }
    const handleSubmitAudios = async (ev) => {
        ev.preventDefault()
        let formData = new FormData()
        try {
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
                setRefresh(true)
                setSelectedAudios([])
            }
        } catch (error) {
            setError(error)
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
            setError(error)
            // TODO: Handle errors 
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
            /* TODO: Handle error messages */
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
                    type="submit"
                >
                    Guardar
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
                    Guardar
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
            <pre>
                {error}
            </pre>
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