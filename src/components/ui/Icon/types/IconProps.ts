interface IconProps {
    type: IconType;

    className?: string;
}

type IconType =
    'user'
    | 'clock'
    | 'chevronDown'
    | 'basket';

export type { IconProps };
