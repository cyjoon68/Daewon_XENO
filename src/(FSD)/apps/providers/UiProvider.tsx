"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";

const UiProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <HeroUIProvider>
            <ThemeProvider defaultTheme={"light"}>
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    );
};

export default UiProvider;