import { routes } from "@/helpers/routes";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { signOut } from 'next-auth/react'

const DropdownUser = () => {
    return (
        <div className="ml-auto float-right dropdown">
            <BiUserCircle className="primary-color" size={50} />
            <div className="container dropdown-content navbar-bg right-0">
                {/*  */}
                <Link href={routes.dashboard.miCuenta} className="font-bold primary-color p-3">Mi cuenta</Link>
                <button onClick={() => signOut()} className="font-bold primary-color p-3">Salir</button>
            </div>
        </div>

    );
}

export default DropdownUser;