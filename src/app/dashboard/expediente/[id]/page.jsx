'use client'
import AudioRecorder from "@/components/AudioRecording";
import CloseBtn from "@/components/CloseBtn";
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import IconButton from "@/components/IconButton";
import IconFile from "@/components/IconFile";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import Modal from "@/components/Modal";
import { apiRoutes } from "@/helpers/apiRoutes";
import { routes } from "@/helpers/routes";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { TbUpload } from "react-icons/tb";



const HomeFolio = ({ params }) => {
    const { id } = params;
    const [expedienteData, setExpedienteData] = useState()
    const [openModalAudio, setOpenModalAudio] = useState(false)
    const [openModalDocument, setOpenModalDocument] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [refresh, setRefresh] = useState(false)

    const handleOpenModalAudio = (ev) => {
        setOpenModalAudio(true)
    }
    const handleOpenModalDocument = (v) => {
        setSelectedFiles([])
        setOpenModalDocument(true)
    }
    const handleDocumentOnChange = (ev) => {
        ev.preventDefault()
        setSelectedFiles(ev.target.files)
    }
    const handleSubmit = async (ev) => {
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
            /* TODO: Handle error messages */
            console.error(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, refresh]);

    const AudioModal = () => <Modal
        open={openModalAudio}
        setOpen={setOpenModalAudio}
    >
        <div className="login-bg p-3 capitalize">
            arrastra aqui tu audio
        </div>
    </Modal>;

    const DocumentModal = () => <Modal
        open={openModalDocument}
        setOpen={setOpenModalDocument}
    >
        {/* TODO: Complete documents upload */}
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
        <form onSubmit={handleSubmit}>
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

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <div className="login-bg py-12 pl-14">
            <AudioRecorder />
            <AudioModal />
            <DocumentModal />
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
                                <div className="border-b-2 border-color-primary  flex flex-row">
                                    {/* Audio descripcion */}
                                    <span className="pl-5 mt-4">
                                        {/* {expedienteData.audio[0]?.descripcion} */}
                                    </span>
                                    <ControlButtonsGroup
                                        onView={() => true}
                                        onRemove={() => true}
                                    />
                                </div>
                            </div>
                            {/* Buttons */}
                            <RecordsButtonGroup
                                handleUploadAudio={handleOpenModalAudio}
                            />
                        </div>
                        {/* Documentos Container */}
                        <div className="mt-2 p-3 login-bg flex flex-col">
                            <span className="font-bold">Documentos</span>
                            {
                                expedienteData.documentos.map((item, index) => <DocumentViewer
                                    key={item.descripcion + index}
                                    descripcion={item.descripcion}
                                />)
                            }
                            {/* Upload doc button */}
                            <UploadDocumentButton
                                onClick={handleOpenModalDocument}
                            />
                        </div>
                        {/* Buttons group */}
                        <ButtonGroup
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

const DocumentViewer = ({
    descripcion,
}) => {
    /* TODO: add onView and on Remove */
    return <div className="px-5 mt-2 flex flex-col ">
        <div className="border-b-2 border-color-primary  flex flex-row">
            {/* Document descripcion */}
            <span className="pl-5 mt-4">{descripcion}</span>
            <ControlButtonsGroup
                onView={() => true}
                onRemove={() => true}
            />
        </div>
    </div>
}

const ButtonGroup = ({ folio }) => {
    return <div className="grid grid-flow-col gap-6 text-center">
        <Link className="font-bold navbar-bg capitalize py-3 w-full mt-5"
            href={`${routes.dashboard.cedula}/${folio}`}
        >
            cédula
        </Link>
        <Link className="font-bold navbar-bg capitalize py-3 w-full mt-5"
            href={routes.dashboard.main}
        >
            sabana
        </Link>
    </div>
}

const RecordsButtonGroup = ({
    handleUploadAudio
}) => {
    return <div className="p-3 ml-auto">
        <IconButton className="mr-2">
            <BiSolidMicrophone size={40} />
        </IconButton>
        <IconButton className="" onClick={handleUploadAudio}>
            <TbUpload size={40} />
        </IconButton>
    </div>
}

const ControlButtonsGroup = ({ onView, onRemove }) => {
    <div className="ml-auto mb-1">
        {/* TODO: onView and onRemove funtionality  */}
        <IconButton className="mr-5"
            onClick={onView}>
            <FaRegEye size={25} />
        </IconButton>
        <CloseBtn
            onClick={onRemove}
            size={25}
        />
    </div>
}

const UploadDocumentButton = ({
    onClick
}) => {
    return <div className="p-3 ml-auto" >
        <IconButton onClick={onClick}>
            <TbUpload size={40} />
        </IconButton>
    </ div>
}
export default HomeFolio;