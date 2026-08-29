import type {ReactNode} from "react";

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: () => void;

    className?: string;
}

export type { ModalProps };
