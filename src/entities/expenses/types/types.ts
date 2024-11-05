export interface Expense {
    id: number;
    date: string;
    amount: number;
    merchant: string;
    category: string;
}

export interface FormattedExpense {
    id: number;
    date: string;
    amount: string;
    merchant: string;
    category: string;
}

export interface ExpensesResponse {
    currentPage: number;
    next: { page: number; limit: number };
    totalPages: number;
    transactions: Expense[];
}