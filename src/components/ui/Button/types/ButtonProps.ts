import type {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;

    className?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    onClick?: () => void;
    disabled?: boolean;
}

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonColor = 'orange' | 'orangeSoft' | 'black' | 'grey';

export type { ButtonProps };
