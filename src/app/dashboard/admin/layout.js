/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { routes } from "@/helpers/routes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
    const router = useRouter()
    const { data, status } = useSession()

    const checkRole = (role) => {
        role !== 'admin' && router.push(routes.dashboard.main)
    }

    useEffect(() => {
        status !== 'loading' && checkRole(data.user.rol);
    }, [status])


    return (
        <div>
            {(status !== 'loading' && data.user.rol === 'admin') && children}
        </div>


    )
}
