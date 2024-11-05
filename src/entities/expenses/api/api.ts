import { ExpensesResponse } from "../types";

export const fetchExpenses = async (query: string): Promise<ExpensesResponse> => {
    try {
        const response = await fetch(`https://tip-transactions.vercel.app/api/transactions?${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch expenses:', error);
        throw error;
    }
};