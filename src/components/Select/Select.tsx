import { FC } from 'react';
import Select, {
    CSSObjectWithLabel,
    components,
    DropdownIndicatorProps,
} from 'react-select';

import { Icon } from '../index';

interface OptionType {
    value: string;
    label: string;
}

const options: OptionType[] = [
    { value: '5', label: '5 days' },
    { value: '6', label: '6 days' },
    { value: '7', label: '7 days' },
    { value: '8', label: '8 days' },
    { value: '9', label: '9 days' },
    { value: '10', label: '10 days' },
];

const DropdownIndicator = (
    props: DropdownIndicatorProps<OptionType, false>,
) => (
    <components.DropdownIndicator {...props}>
        <Icon name="arrow-down" />
    </components.DropdownIndicator>
);

export const SelectComponent: FC = () => {
    return (
        <Select
            isSearchable={false}
            options={options}
            styles={{
                control: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    border: 'none',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    paddingLeft: '20px',
                }),
                valueContainer: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    padding: 0,
                    fontWeight: 600,
                }),
                input: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    margin: 0,
                    padding: 0,
                }),
                dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    padding: 0,
                    marginLeft: '4px',
                }),
                placeholder: (baseStyle: CSSObjectWithLabel) => ({
                    ...baseStyle,
                    fontWeight: 600,
                    color: '#000000',
                    lineHeight: '32px',
                }),
                menuList: (baseStyle) => ({
                    ...baseStyle,
                    fontWeight: 500,
                    color: '#000000',
                }),
                menu: (baseStyle) => ({
                    ...baseStyle,
                    width: '100px',
                }),
            }}
            components={{
                IndicatorSeparator: () => null,
                DropdownIndicator,
            }}
            placeholder="5 days"
        />
    );
};
