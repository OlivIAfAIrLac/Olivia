import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Providers } from "../Providers";

export const metadata = {
    title: 'Olivia',
    description: 'for her',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es-MX">
            <body className="welcome-bg h-fit">
                <Providers>
                    {children}
                    <Footer className="fixed footer bottom-0 w-screen" />
                </Providers>
            </body>
        </html>
    )
}
