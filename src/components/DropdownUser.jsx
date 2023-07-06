import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
const DropdownUser = () => {
    return (
        <div className="ml-auto float-right dropdown">
            <BiUserCircle className="primary-color" size={50} />
            <div className="container dropdown-content navbar-bg right-0">
                {/*  */}
                <Link href="my_account" className="font-bold primary-color p-3">Mi cuenta</Link>
                <h1 className="font-bold primary-color p-3">Salir</h1>
            </div>
        </div>

    );
}

export default DropdownUser;