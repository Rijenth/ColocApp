export interface ExpensePayload {
    data: {
        amount: string;
        colocataireId: string;
        paidFord: string;
        createdAt: Date;
        updateAt: Date;
        desccription: string;
        colocationId: string;
    }[];
}