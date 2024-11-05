export interface  TableProps<T = { [key: string] }> {
    headers: string[];
    rows: T[];
    onClick?: () => void;
}

export interface TableHeaderProps {
    headers: string[];
}

export interface TableBodyProps<T = { [key: string] }> {
    rows: T[];
    onClick?: () => void;
}