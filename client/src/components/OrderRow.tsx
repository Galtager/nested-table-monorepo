import { FC, useState } from "react";
import { Reseveration } from "./OrdersTable";
import ProductsTable from "./ProductsTable";

interface OrderRowProps {
  order: Reseveration;
}
const OrderRow: FC<OrderRowProps> = ({ order }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* normal row */}
      <tr key={order.reservation_uuid}>
        <td width="60%">
          <button onClick={() => setOpen((prev) => !prev)}>{open ? "V" : ">"}</button>
          {order.reservation_uuid}
        </td>
        <td width="20%">{order.sum}</td>
        <td width="20%">{order.products.length}</td>
      </tr>
      {/* products row */}
      {open && (
        <tr key={`${order.reservation_uuid}products`}>
          <td colSpan={3}>
            <ProductsTable products={order.products} />
          </td>
        </tr>
      )}
    </>
  );
};

export default OrderRow;
