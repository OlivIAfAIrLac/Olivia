import { GrClose } from "react-icons/gr";
const CloseBtn = ({ onClose }) => {
    return (
        <button className="rounded-full primary-btn ml-auto p-2" onClick={onClose}>
            <GrClose />
        </button>
    );
}

export default CloseBtn;