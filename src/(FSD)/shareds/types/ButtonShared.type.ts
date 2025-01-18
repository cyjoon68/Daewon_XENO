import { ButtonProps } from "@heroui/button";

export interface ButtonSharedType extends ButtonProps {
    children: React.ReactNode;
    disableHover?: boolean;
};
