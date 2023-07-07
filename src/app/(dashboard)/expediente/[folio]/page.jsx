import CloseBtn from "@/components/CloseBtn";
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import IconButton from "@/components/IconButton";
import { routes } from "@/helpers/routes";
import { expedienteData } from "@/mock/apiResponse";
import Link from "next/link";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { TbUpload } from "react-icons/tb";


const HomeFolio = ({ params }) => {
    const {
        nombre,
        fecha,
        hora,
        audio,
        documentos,
    } = expedienteData;
    const { folio } = params

    return (
        <div className="login-bg py-12 pl-14">
            <Container>
                <span className="text-lg mb-4">Expediente</span>
                <div className="p-6 primary-bg flex flex-col">
                    <DateTimeDisplayer
                        fecha={fecha}
                        hora={hora}
                    />
                    <span className="font-bold">Folio {folio}</span>
                    <span className="mb-5">{nombre}</span>
                    {/* Audio Container */}
                    <div className="p-3 login-bg flex flex-col">
                        <span className="font-bold">
                            Audio
                        </span>
                        <div className="px-5 mt-2 flex flex-col ">
                            <div className="border-b-2 border-color-primary  flex flex-row">
                                {/* Audio descripcion */}
                                <span className="pl-5 mt-4">
                                    {audio.descripcion}
                                </span>
                                <ControlButtonsGroup
                                    onView={() => true}
                                    onRemove={() => true}
                                />
                            </div>
                        </div>
                        {/* Buttons */}
                        <RecordsButtonGroup />
                    </div>
                    {/* Documentos Container */}
                    <div className="mt-2 p-3 login-bg flex flex-col">
                        <span className="font-bold">Documentos</span>
                        {
                            documentos.map((item, index) => <DocumentViewer
                                key={item.descripcion + index}
                                descripcion={item.descripcion}
                            />)
                        }
                        {/* Upload doc button */}
                        <UploadDocumentButton />
                    </div>
                    {/* Buttons group */}
                    <ButtonGroup
                        folio={folio}
                    />
                </div>
            </Container>
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

const RecordsButtonGroup = () => {
    return <div className="p-3 ml-auto">
        <IconButton className="mr-2">
            <BiSolidMicrophone size={40} />
        </IconButton>
        <IconButton className="">
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

const UploadDocumentButton = () => {
    return <div className="p-3 ml-auto" >
        <IconButton>
            <TbUpload size={40} />
        </IconButton>
    </ div>
}
export default HomeFolio;