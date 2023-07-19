import { AiOutlinePlus } from "react-icons/ai";
import IconButton from "./IconButton"
import { FaSearch } from "react-icons/fa";

const SearchButton = (props) => {
    return (
        <div className='ml-auto'>
            <IconButton
            {...props}
            >
                <FaSearch size={30} />
            </IconButton>
        </div>
    );
}

export default SearchButton;