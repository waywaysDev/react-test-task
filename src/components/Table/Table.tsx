import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableProps } from './types';

import './styles.css';

export const Table = (props: TableProps) => {
    const { headers, rows, onClick } = props;

    return (
        <table>
            <TableHeader headers={headers} />
            <TableBody onClick={onClick} rows={rows} />
        </table>
    );
}
