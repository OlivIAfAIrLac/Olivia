'use-client'
import { routes } from "@/helpers/routes";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

const DropdownUser = () => {
    const router = useRouter()

    const handleSingOut = async () => {
        localStorage.removeItem('olivia-auth')
        const data = await signOut({
            redirect: false,
            callbackUrl: "/login"
        })
        router.push(data.url)
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