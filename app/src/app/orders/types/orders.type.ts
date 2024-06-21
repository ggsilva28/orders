export interface IOrders {
  id: number
  date: string
  customer: string
  address1: string
  city: string
  postcode: string
  country: string
  amount: number
  deleted: string
  status: EStatus
  last_modified: string
}

export enum EStatus {
  CANCELLED = 'cancelled',
  PENDING = 'pending',
  IN_PRODUCTION = 'in_production',
}

export interface IRequestMessage{
  message: string
}
