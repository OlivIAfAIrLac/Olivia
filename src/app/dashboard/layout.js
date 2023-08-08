'use client'
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "../../styles/globals.css";
import { Providers } from "../Providers";
import CedulaProvider from "../CedulaProvider";


export default function RootLayout({ children }) {

    return (
        <html lang="es-MX">
            <body className="main-bg outfit-font">
                <Providers>
                    <Navigation />
                    <CedulaProvider>
                        {children}
                    </CedulaProvider>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
