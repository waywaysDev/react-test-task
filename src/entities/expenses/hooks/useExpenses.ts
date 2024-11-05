import { useState, useEffect } from 'react';
import { fetchExpenses } from '../api';
import { formatDate, formatTime } from '../../../utils/date';
import { formatCurrency } from '../../../utils/currency';
import { FormattedExpense } from "../types";

export const useExpenses = (query: string) => {
    const [ data, setData ] = useState<FormattedExpense[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchExpenses(query);
                const formattedExpenses = response.transactions.map(item => ({
                    id: item.id,
                    date: `${formatTime(item.date)} - ${formatDate(item.date)}`,
                    amount: formatCurrency(item.amount),
                    merchant: item.merchant,
                    category: item.category
                }));

                setData(formattedExpenses);
            } catch (err) {
                setError('Failed to fetch expenses');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [query]);

    return { data, loading, error };
};