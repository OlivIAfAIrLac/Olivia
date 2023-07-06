import Input from "@/components/Input";

const page = () => {
    return (
        <section className="h-screen h-81vh ">
            <div className="container max-w-2xl relative flex flex-col top-14">
                <span className="left-0 mb-4">
                    Ingresa CURP o nombre
                </span>
                <div className="px-4 py-3 login-bg ">
                    <div className="flex flex-col items-center justify-center">
                        <form className="mt-4 mb-2 w-full">
                            <div className="mb-4 flex flex-col">
                                <h1 >
                                    CURP
                                </h1>
                                <Input placeholder="CURP..." />
                                <h1 className="mt-3">
                                    Nombre
                                </h1>
                                <Input placeholder="Nombre..." />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-4">
                    <button className="primary-btn capitalize py-3 w-1/2 mt-5">
                        crear expediente
                    </button>
                </div>
            </div>
        </section>


    );
}

export default page;