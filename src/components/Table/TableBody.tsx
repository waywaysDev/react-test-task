import { TableBodyProps } from './types';

export const TableBody = (props: TableBodyProps) => {
    const { rows, onClick } = props;

    return (
        <tbody>
            {rows.map((row, rowIndex) => (
                <tr onClick={onClick} key={row.id ?? rowIndex}>
                    {Object.values(row).map((value) => (
                        <td key={value}>{value}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}