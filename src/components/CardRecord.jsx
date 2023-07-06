import { getFecha } from "@/helpers/getDate";
import Link from "next/link";

const CardRecord = ({
    data
}) => {
    const { fecha, folio, nombre } = data;
    return (
        <Link href="/expediente/2222" className="flex w-1/3 flex-wrap">
            <div className="w-full p-2">
                <div className="block h-full w-full object-cover object-center primary-bg pl-2 pb-1 pr-1">
                    {/* date */}
                    <div className="flex flex-col">
                        <span className="ml-auto mt-0">
                            {getFecha(fecha)}
                        </span>
                    </div>
                    {/*  */}
                    <div className="flex flex-col pt-1">
                        <span>{folio}</span>
                        <span>{nombre}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardRecord;