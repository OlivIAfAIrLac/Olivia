import { routes } from "@/helpers/routes";
import Link from "next/link";

const ButtonGroupCedulaExpediente = ({ folio }) => {
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

export default ButtonGroupCedulaExpediente;