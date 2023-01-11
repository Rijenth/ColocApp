export interface IUser {
    uid: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthdate?: Date
    phoneNumber?: string,
    picture?: string,
}

export interface IUserRegister {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthdate?: Date
}

export interface IUserDebt {
    did: string,
    debt: number,
    debtTo: string, // User uid
}