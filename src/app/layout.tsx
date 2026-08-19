'use client';

import { Footer } from "@/components/layout/footer/footer.component";
import './global.styles.scss';
import Header from "@/components/layout/header/header.component";
import { AppProvider } from "@/providers/app-provider";
import NoSSR from "@/components/no-ssr";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body suppressHydrationWarning>
                <AppProvider>
                    <NoSSR>
                        <Header />
                        {children}
                        <Footer />
                    </NoSSR>
                </AppProvider>
            </body>
        </html>
    )
} 