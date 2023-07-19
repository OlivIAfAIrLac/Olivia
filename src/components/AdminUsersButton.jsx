import { routes } from "@/helpers/routes";
import Link from "next/link";

const AdminUsersButton = () => {
    return (
        <div className="flex flex-row justify-center items-center mt-7">
            <Link href={routes.dashboard.admin.adminUsuarios} className="capitalize primary-bg py-3 px-12">
                administrar usuarios
            </Link>
        </div>
    );
}

export default AdminUsersButton;