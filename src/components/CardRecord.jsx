import { formatDateTime } from "@/helpers/dateFormatter";
import { routes } from "@/helpers/routes";
import Link from "next/link";

const CardRecord = ({
    data
}) => {
    const { createdAt, folio, nombre, _id } = data;
    const { fecha } = formatDateTime(createdAt);
    return (
        <Link href={`${routes.dashboard.expediente}/${_id}`} className="flex w-1/3 flex-wrap">
            <div className="w-full p-2">
                <div className="block h-full w-full object-cover object-center primary-bg pl-2 pb-1 pr-1">
                    {/* date */}
                    <div className="flex flex-col">
                        <span className="ml-auto mt-0">
                            {fecha}
                        </span>
                    </div>
                    {/*  */}
                    <div className="flex flex-col pt-1">
                        <span>Folio: {folio ?? '123'}</span>
                        <span>{nombre}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardRecord;