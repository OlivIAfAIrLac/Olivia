'use client'
import Link from "next/link";

import Logo from "./Logo";
import DropdownUser from "./DropdownUser";
import { routes } from "@/helpers/routes";
import axios from "axios";
import { useEffect } from "react";

const Navigation = () => {
    useEffect(
        () => {
            const token = localStorage.getItem('olivia-auth')
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        [],
    )

    return (
        <header className="navbar-bg">
            <div className="container mx-auto flex flex-wrap flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    href={routes.dashboard.main}
                >
                    <Logo
                        width={192}
                        height={60}
                    />
                </Link>
                <DropdownUser />
            </div>
        </header>
    );
}

export default Navigation;