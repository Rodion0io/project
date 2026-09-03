import type {ReactNode} from "react";

interface BoxProps {
    children?: ReactNode;
    className?: string;
    flexDirection?: FlexDirection;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    flexWrap?: FlexWrap;
    gap?: Gap;
    onClick?: () => void;
}

type FlexDirection = 'row' | 'rowReverse' | 'column' | 'columnReverse';
type JustifyContent =
    'normal'
    | 'center'
    | 'flexStart'
    | 'flexEnd'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly';
type AlignItems = 'normal' | 'flexStart' | 'flexEnd' | 'center' | 'baseline' | 'stretch';
type FlexWrap = 'nowrap' | 'wrap' | 'wrapReverse';
type Gap =
    '0'
    | '2'
    | '4'
    | '6'
    | '8'
    | '10'
    | '12'
    | '14'
    | '16'
    | '18'
    | '20'
    | '22'
    | '24'
    | '26'
    | '28'
    | '30'
    | '32';

export type { BoxProps };
