import type {ReactNode} from "react";

interface BadgeProps {
    children?: ReactNode
    className?: string;
    size?: BadgeSize
    color?: BadgeColor;
}

type BadgeSize = 'md';
type BadgeColor = 'orange';

export type { BadgeProps };
