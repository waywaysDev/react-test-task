import { TableHeaderProps } from './types';

export const TableHeader = (props: TableHeaderProps) => {
    const { headers } = props;

    return (
        <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        </thead>
    );
}