interface SegmentedControlProps {
    values: Value[]
    selectedValue: string;
    onSelect: (value: string) => void;

    className?: string;
}

interface Value {
    key: string;
    value: string;
}

export type { SegmentedControlProps }
