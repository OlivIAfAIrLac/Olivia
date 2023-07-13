import axios from 'axios'
import Link from "next/link";
import CloseBtn from "./CloseBtn";
import Input from "./Input";
import { routes } from "@/helpers/routes";
import { apiRoutes } from '@/helpers/apiRoutes';

const LoginForm = ({
    onClose
}) => {
    const handleOnSubmit = async (ev) => {
        ev.preventDefault()
        const formData = new FormData(ev.currentTarget);
        const email = formData.get('email')
        const password = formData.get('password')
        try {
            const res = await axios.post(apiRoutes.LOGIN, { email, password });
            if (res.status === 200) {
                cookies().set("auth", res.data.token);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="px-4 py-3 login-bg outfit-font login-form rounded-none">
            <div className="container flex flex-col items-center justify-center">
                <CloseBtn onClose={onClose} />
                <form className="mt-4 mb-2 w-96" onSubmit={handleOnSubmit}>
                    <div className="mb-4 flex flex-col">
                        <h1 className="font-bold outfit-font ">Usuario o correo</h1>
                        <Input placeholder="Usuario o correo..." type="email" name="email" />
                        <h1 className="font-bold outfit-font mt-3">Contraseña</h1>
                        <Input placeholder="Contraseña..." type="password" name="password" />
                        {/* Add functions to recover pass */}
                        <Link className="ml-auto"
                            href={routes.login.recuperarPass}
                        >
                            Olvide mi contraseña
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button type="submit" className="font-bold primary-btn rounded-none capitalize py-3 w-1/2 mt-5">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;