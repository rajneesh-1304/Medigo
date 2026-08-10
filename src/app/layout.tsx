import { Footer } from "@/components/layout/footer/footer.component";
import './global.styles.scss';
import Header from "@/components/layout/header/header.component";
import ThemeProviderWrapper from "@/theme/theme-provider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body suppressHydrationWarning>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProviderWrapper>
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProviderWrapper>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
} 