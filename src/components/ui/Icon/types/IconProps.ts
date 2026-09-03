interface IconProps {
    type: IconType;

    className?: string;
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
