export interface ICollocation {
    uid: string,
    name: string,
    rentDue: number,
    rentPaid: number,
    persons: string[],
    resume: ICollocationIncome[],
    createdAt: Date,
    updatedAt: Date
}

export interface ICollocationIncome {
    collocationId: string,
    income: number,
    paidBy: string, // User uid
    paidFor: string[], // List User uid
    category: string,
    location: string,
    description: string,
    createdAt: Date,
    updatedAt: Date
}