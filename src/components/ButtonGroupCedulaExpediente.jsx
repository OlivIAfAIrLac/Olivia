import { routes } from "@/helpers/routes";
import Link from "next/link";

const ButtonGroupCedulaExpediente = ({ folio, admin, onClick }) => {
    return <div className="grid grid-flow-col gap-6 text-center">
        {
            admin && <button className="font-bold navbar-bg capitalize py-3 w-full mt-5"
                onClick={onClick}
            >
                Eliminar
            </button>
        }
        <Link className="font-bold navbar-bg capitalize py-3 w-full mt-5"
            href={`${routes.dashboard.cedula}/${folio}`}
        >
            cédula
        </Link>

    </div>
}

export default ButtonGroupCedulaExpediente;