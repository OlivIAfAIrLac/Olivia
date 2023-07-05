import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata = {
    title: 'Olivia',
    description: 'for her',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es-MX">
            <body className="welcome-bg h-screen">
                {children}
                <Footer />
            </body>
        </html>
    )
}
