import Modal from "./Modal";

const RemoveFileModal = ({
    open,
    setOpen
}) => {
    return (
        <Modal
            open={open}
            setOpen={setOpen}
        >
            <div>HellO!</div>
        </Modal>
    );
}

export default RemoveFileModal;