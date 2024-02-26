// initial jsons
export type IProducrsInResJSON = {
    id: number,
    reservation_uuid: string,
    name: string

}
export type IProductJSON = {
    id: number,
    special_product_assignment_id: number,
    amount: number,
    active: boolean
}
// returns
export type Iproduct = {
    name: string,
    id: number
    active: boolean,
    amount: number
}

export type Reseveration = {
    reservation_uuid: string,
    sum: number
    products: Iproduct[]
}
export type GroupObject = { [key: string]: { products: Iproduct[], sum: number } }
