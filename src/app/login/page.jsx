'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Login from '@/components/Login';

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
                <Image
                    src="/Logo_OLIVIA.png"
                    alt="logo"
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