import type { ModalProps } from "@heroui/modal";

export interface AppModalType {
    isOpen: ModalProps["isOpen"];
    onOpenChange: ModalProps["onOpenChange"];
    isDetect?: boolean;
    size?: ModalProps["size"];
}