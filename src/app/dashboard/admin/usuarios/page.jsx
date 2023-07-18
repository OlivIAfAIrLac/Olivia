import Container from "@/components/Container";
import AdminUsersModal from "@/components/AdminUsersModal";
import SearchButton from "@/components/SearchButton";
import { routes } from "@/helpers/routes";
import Link from "next/link";
import { FaRegEye, FaUserPlus } from "react-icons/fa6";
import IconButton from "@/components/IconButton";
import { FaUserEdit, FaUserTimes } from "react-icons/fa";

const HomeAdminUsers = () => {

    return (
        <Container>
            {/* New Users button */}
            <div className="flex flex-col justify-center items-center">
                <NewUserButton />
            </div>
            {/* Search Button */}
            <div className="flex flex-col justify-center mx-6 items-center">
                <SearchButton />
            </div>
            {/* Users Grid */}
            <div className="">
                <span className="primary-color capitalize text-2xl ">usuarios</span>
                <div className="grid grid-flow-row">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>
        </Container>
    );
}
export const NewUserButton = () => {
    return <Link href={routes.dashboard.admin.nuevoUsuario} className="flex flex-row mt-6 primary-btn py-6 px-16">
        <FaUserPlus size={40} />
        <span className='ml-5 flex-initial mr-24 mt-2 capitalize'>
            crear nuevo usuario
        </span>
    </Link>
}

const UserCard = () => {
    return <div className='flex flez-col mt-2 p-3 login-bg'>
        <div className="flex flex-col">
            <span className="font-bold capitalize">Nombre Completo</span>
            <span className="capitalize">profesion</span>
            <span className="capitalize">unidad</span>
        </div>
        <div className="flex flex-row ml-auto">
            <div className="">
                <IconButton className="mr-14 mt-4">
                    <FaRegEye size={35} />
                </IconButton>
            </div>
            <div>
                <IconButton className="mr-14 mt-4">
                    <FaUserEdit size={35} />
                </IconButton>
            </div>
            <div>
                <IconButton className="mt-4">
                    <FaUserTimes size={35} />
                </IconButton>
            </div>
        </div>
    </div>
}

export default HomeAdminUsers;