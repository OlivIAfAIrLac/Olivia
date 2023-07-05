
import CloseBtn from "./CloseBtn";
import Input from "./Input";

const RecoverForm = ({
    onClose
}) => {
    return (
        <div className="px-4 py-3 login-bg outfit-font login-form rounded-none">
            <div className="container flex flex-col items-center justify-center">
                <CloseBtn onClose={onClose} />
                <form className="mt-4 mb-2 w-96">
                    <div className="mb-4 flex flex-col mx-4">
                        <h1 className="outfit-font ">
                            Registra tu correo y te enviaremos un e-mail con las instrucciones
                        </h1>
                        <h1 className="outfit-font font-bold mt-8">Correo</h1>
                        <Input placeholder="Correo..." type="email" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button className="primary-btn rounded-none capitalize py-3 w-1/2 mt-5">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecoverForm;