interface IconProps {
    type: IconType;

    className?: string;
    onClick?: () => void;
}

type IconType =
    'user'
    | 'clock'
    | 'chevronDown'
    | 'basket'
    | 'plus'
    | 'cross'
    | 'checkmark';

export type { IconProps };
