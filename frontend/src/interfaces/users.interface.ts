export interface IUser {
    uid: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    collocations: string[],
    debts: IUserDebt[],
}

export interface IUserDebt {
    did: string,
    debt: number,
    debtTo: string, // User uid
}