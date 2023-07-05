'use client'
import React, { useState } from 'react'
import Login from '@/components/Login';
import Logo from '@/components/Logo';

const Home = () => {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <div className="h-screen">
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
                    <Login
                        onClose={() => setIsLoged(false)}
                    />
                </div>
            }
        </div>
    );
}

export default Home;