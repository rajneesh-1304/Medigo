import ThemeProviderWrapper from "@/theme/theme-provider";
import React from "react";
import StoreProvider from "./store-provider";
import { SnackbarProvider } from "notistack";

export const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProviderWrapper>
            <StoreProvider>
                <SnackbarProvider maxSnack={2}>
                    {children}
                </SnackbarProvider>
            </StoreProvider>
        </ThemeProviderWrapper>
    )
}