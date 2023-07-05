'use client'
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';
import { useState } from 'react';

const HomeLogin = () => {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <div className='h-screen'>
            {!isLoged && <div className="grid justify-end">
                <button className="mt-5 no-bg-btn outfit-font"
                    onClick={() => setIsLoged(true)}
                >
                    Ingresar
                </button>
            </div>}
            {!isLoged ? <div className="relative flex justify-center top-1/3">
                <Logo
                    width={501}
                    height={156}
                />
            </div>
                : <div className="relative flex justify-center top-1/4">
                    <LoginForm
                        onClose={() => setIsLoged(false)}
                    />
                </div>
            }
        </div>
    );
}

export default HomeLogin;