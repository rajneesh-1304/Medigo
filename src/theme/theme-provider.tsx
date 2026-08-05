import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';

import Theme from "@/theme/theme";

export default function ThemeProviderWrapper({ children }:
    Readonly<{ children: React.ReactNode }>) {
        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={Theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        )
}
