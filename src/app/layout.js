import "../styles/globals.css";
export const metadata = {
    title: 'Olivia',
    description: 'for her',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es-MX">
            {children}
        </html>
    )
}
