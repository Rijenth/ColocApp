export interface ExpensePayload {
    data: {
        id: string;
        amount: string;
        colocataireId: string;
        colocataireName: string;
        paidFord: string;
        date: string;
        desccription: string;
        colocationId: string;
    }[];
}