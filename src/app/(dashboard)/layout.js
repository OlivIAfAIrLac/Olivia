
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "../../styles/globals.css";
export const metadata = {
    title: 'Olivia',
    description: 'for her',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es-MX">
            <body className="main-bg outfit-font">
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
