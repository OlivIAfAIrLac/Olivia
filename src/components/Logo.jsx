import Image from "next/image";

const Logo = ({
    width,
    height
}) => {
    return (
        <Image
            src="/Logo_OLIVIA.png"
            alt="logo"
            width={width}
            height={height}
        />
    );
}

export default Logo;