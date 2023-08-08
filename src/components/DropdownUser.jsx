'use-client'
import { routes } from "@/helpers/routes";
import { signOut } from 'next-auth/react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiUserCircle } from "react-icons/bi";

const DropdownUser = () => {
    const router = useRouter()

    const handleSingOut = async () => {
        localStorage.removeItem('olivia-auth')
        await signOut({
            redirect: false,
            callbackUrl: 'https://www.olivia-fairlac.org/login'
        })
        router.push(routes.login.signIn)
    }

    return (
        <div className="ml-auto float-right dropdown">
            <BiUserCircle className="primary-color" size={50} />
            <div className="container dropdown-content navbar-bg right-0">
                {/*  */}
                <Link href={routes.dashboard.miCuenta} className="font-bold primary-color p-3">Mi cuenta</Link>
                <button onClick={handleSingOut} className="font-bold primary-color p-3">Salir</button>
            </div>
        </div>

    );
}

export default DropdownUser;