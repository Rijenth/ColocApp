export interface ICollocation {
    uid: string,
    name: string,
    rentDue: number,
    rentPaid: number,
}

export interface ICollocationIncome {
    collocationId: string,
    income: number,
    paidBy: string, // User uid
    when: Date,
}