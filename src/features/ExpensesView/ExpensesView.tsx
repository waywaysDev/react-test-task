import { Table } from "../../components/Table";
import { useExpenses } from "../../entities/expenses";

import './styles.css';

export const ExpensesView = () => {
    const headers:string[] = ["Id", "Date", "Amount", "Merchant", "Category"];
    const page = 1;
    const queryParams = `page=${page}`;
    const { data, loading, error } = useExpenses(queryParams);

    if (loading) {
        return <div className="text">Loading...</div>;
    }

    if (error) {
        return <div className="text">{error}</div>;
    }

    if (!data.length) {
        return <div className="empty">Currently, there are no records available.</div>;
    }

    return (
        <div className="container">
            <h1 className="title">Expenses</h1>
            <Table headers={headers} rows={data} />
        </div>
    );
}