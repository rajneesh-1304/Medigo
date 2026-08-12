import {
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';

import Theme from "@/theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function ThemeProviderWrapper({ children }:
    Readonly<{ children: React.ReactNode }>) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={Theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </AppRouterCacheProvider>
    )
}
