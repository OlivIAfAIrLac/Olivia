import { GrClose } from "react-icons/gr";

const CloseBtn = ({ onClose, size, className }) => {
    return (
        <button className={`rounded-full primary-btn ml-auto p-2 ${className}`}
            onClick={onClose}>
            <GrClose size={size} />
        </button>
    );
}

export default CloseBtn;