import { FaSearch } from "react-icons/fa";


const SearchButton = ({
    placeholder = 'Buscar...',
    onChange,
}) => {
    return (
        <div className='relative ml-auto'>
            <div className="primary-bg w-12 h-12 rounded-full absolute inset-y-0 ml-auto flex items-center p-2">
                <FaSearch className="" size={30} />
            </div>
            <input
                accessKey="k"
                onChange={onChange}
                name="search"
                type="search"
                placeholder={placeholder}
                className="rounded-full p-1 bg-transparent text-transparent w-12 h-12 placeholder-transparent focus:flex-1 focus:w-96 focus:pl-10 focus:pr-5 focus:placeholder-black transition-all duration-500 transform focus:border-transparent focus:primary-bg focus:text-black"
            />
            
        </div>

    );
}

export default SearchButton;