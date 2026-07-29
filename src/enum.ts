export enum CustomerType{
    REGULAR,
    GOLD,
    PLATINUM
}

export type Customer = {
    id: string,
    name: string,
    type: CustomerType
}