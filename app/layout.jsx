import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export default function MainLayout( { children } ) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />

            </body>
        </html>
    )
}
