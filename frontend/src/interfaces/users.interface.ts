export interface IUser {
    uid: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthdate: Date,
    collocations: string[],
    debts: IUserDebt[],
}

export interface IUserDebt {
    did: string,
    debt: number,
    debtTo: string, // User uid
}

export interface IUserRegister {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthdate?: Date
}