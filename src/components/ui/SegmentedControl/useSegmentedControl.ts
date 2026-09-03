import {useState} from "react";
import type {SegmentedControlProps} from "./types/SegmentedControlProps.ts";

export const useSegmentedControl = (props: SegmentedControlProps) => {

    const {
        values,
        selectedValue,
        onSelect,
        className,
    } = props

    const [currentValue, setCurrentValue] = useState(selectedValue);

    const changeValue = (value: string) => {
        onSelect(value);
        setCurrentValue(value)
    }

    return {
        values,
        className,
        currentValue,
        changeValue
    }
}
