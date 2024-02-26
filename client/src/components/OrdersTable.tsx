import { FC, useEffect, useState } from "react";
import { fetchTable } from "../api";
import { Iproduct } from "./ProductsTable";
import OrderRow from "./OrderRow";

interface OrdersTableProps {}

export type Reseveration = {
  reservation_uuid: string;
  sum: number;
  products: Iproduct[];
};
const OrdersTable: FC<OrdersTableProps> = () => {
  const [reservations, setReservations] = useState<Reseveration[]>([]);

  useEffect(() => {
    loadTableData();
  }, []);

  const loadTableData = async () => {
    const results = await fetchTable();
    setReservations(results);
  };

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>reservation_uuid</th>
          <th>sum of products</th>
          <th>count of products</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((order) => (
          <OrderRow order={order} />
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
