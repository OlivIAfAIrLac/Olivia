import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
const DropdownUser = () => {
    return (
        <div className="ml-auto float-right dropdown">
            <BiUserCircle className="primary-color" size={50} />
            <div className="dropdown-content navbar-bg right-auto">
                {/*  */}
                <h1 href="my_account" className="font-bold primary-color">Mi cuenta</h1>
                <h1 className="font-bold primary-color p-2">Salir</h1>
            </div>
        </div>

    );
}

export default DropdownUser;