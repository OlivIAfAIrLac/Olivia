import Link from "next/link";

const PrimaryLinkButton = ({
    href,
    children
}) => {
    return (
        <Link className="primary-btn capitalize py-3 w-full mt-5"
            href={href}
        >
            {children}
        </Link>
    );
}

export default PrimaryLinkButton;