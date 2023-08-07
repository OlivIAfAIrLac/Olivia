import Image from "next/image";

const Footer = ({
    className
}) => {
    return (
        <footer className={className ?? "bottom-0 footer"}>
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Image
                    className="flex items-center md:justify-start "
                    src="/Logo_FAIR_LAC.png"
                    alt="logo_Fair_Lac"
                    width={146}
                    height={31}
                />
                <div className="inline-flex ml-auto mt-0 justify-end">
                    <button className="no-bg-btn ">
                        <span>
                            Transparencia
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;