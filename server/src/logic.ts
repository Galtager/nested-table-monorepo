import { GroupObject, IProducrsInResJSON, IProductJSON, Reseveration } from "./types";

// load jsons
const productsInReservations = (require('./data/productsInReservations.json') as IProducrsInResJSON[]);
const products = (require('./data/products.json') as IProductJSON[]).filter(el => el.special_product_assignment_id);

export function getReservations(): Reseveration[] {
    const grouped: GroupObject = {};

    for (let i = 0; i < productsInReservations.length; i++) {
        const { reservation_uuid, name, id } = productsInReservations[i]
        const productDetails = findProductDetails(id);
        if (productDetails) {
            if (!grouped[reservation_uuid]) {
                grouped[reservation_uuid] = { products: [], sum: 0 }
            }
            grouped[reservation_uuid]['products'].push({ name, id, active: productDetails.active, amount: productDetails.amount })
            grouped[reservation_uuid]['sum'] += productDetails.amount
        }
    }
    return objectToArray(grouped)
}

function objectToArray(object: GroupObject) {
    return Object.keys(object).map(uuid => ({ reservation_uuid: uuid, products: object[uuid]['products'], sum: object[uuid]['sum'] }));
}
function findProductDetails(id: number) {
    return products.find(product => product.special_product_assignment_id === id)
}
