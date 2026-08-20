interface TabsProps {
    items: TabItems[];

    selectedValue?: TabItems['id']
    onChange?: (id: TabItems['id']) => void;
    className?: string;
}

interface TabItems {
    id: string;
    value: string;
}

export type { TabsProps };
