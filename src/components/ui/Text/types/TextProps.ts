import type {ReactNode} from "react";

interface TextProps {
    children?: ReactNode;
    className?: string;
    size?: TextSize;
    weight?: TextWeight;
    onClick?: () => void;
}

type TextSize = '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '30' | '32';
type TextWeight =  '200' | '400' | '600' | '800';

export type { TextProps };
