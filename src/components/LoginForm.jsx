import { apiRoutes } from '@/helpers/apiRoutes';
import { routes } from "@/helpers/routes";
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import CloseBtn from "./CloseBtn";
import Input from "./Input";
import { useState } from 'react';
import ErrorNotification from './ErrorNotification';


const LoginForm = ({
    onClose
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [show, setShow] = useState()
    const handleOnSubmit = async (ev) => {
        ev.preventDefault()
        const formData = new FormData(ev.currentTarget);
        const email = formData.get('email')
        const password = formData.get('password')
        try {
            setIsLoading(true)
            const res = await axios.post(apiRoutes.LOGIN, { email, password });
            if (res.status === 200) {
                const {
                    nombre,
                    email,
                    unidad,
                    profesion,
                    token,
                    telefono,
                    extension,
                    rol
                } = res.data;
                localStorage.setItem('olivia-auth', token)
                const resAuth = await signIn('credentials', {
                    nombre,
                    email,
                    unidad,
                    profesion,
                    token,
                    telefono,
                    extension,
                    rol,
                    redirect: false
                });
                if (resAuth.ok) {
                    setIsLoading(false)
                    router.push(routes.dashboard.main)
                }
            }
        } catch (error) {
            /* TODO: Handle error messages */

            setError({ message: 'No se encontró usuario' })
            setShow(true)
            setIsLoading(false)
            console.error(error);
        }
    }

    return (
        <div className="px-4 py-3 login-bg outfit-font login-form rounded-none">
            <div className="container flex flex-col items-center justify-center">
                <CloseBtn onClose={onClose} />
                <form className="mt-4 mb-2 w-96" onSubmit={handleOnSubmit}>
                    <div className="mb-4 flex flex-col">
                        <h1 className="font-bold outfit-font">Usuario o correo</h1>
                        <Input placeholder="Usuario o correo..." type="email" name="email" required />
                        <h1 className="font-bold outfit-font mt-3">Contraseña</h1>
                        <Input placeholder="Contraseña..." type="password" name="password" required />
                        {/* Add functions to recover pass */}
                        {/* <Link className="ml-auto"
                            href={routes.login.recuperarPass}
                        >
                            Olvide mi contraseña
                        </Link> */}

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button type="submit" className="font-bold primary-btn rounded-none capitalize py-3 w-1/2 mt-5">
                            {isLoading ?
                                <div className='flex justify-center items-center'>
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600  fill-blue-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill" />
                                    </svg>
                                </div>
                                : 'Ingresar'
                            }
                        </button>
                    </div>
                </form>
            </div>
            <ErrorNotification
                error={error}
                show={show}
                setShow={setShow}
            />
        </div>
    );
}

export default LoginForm;