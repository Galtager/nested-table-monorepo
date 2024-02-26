import { FC } from "react";

interface ProductsTableProps {
  products: Iproduct[];
}
export type Iproduct = {
  name: string;
  id: number;
  active: boolean;
  amount: number;
};
const ProductsTable: FC<ProductsTableProps> = ({ products }) => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {products.map((el) => (
          <tr key={el.id} className={el.active ? "activeProduct" : "canceledProduct"}>
            <td width="60%">{el.name}</td>

            <td width="20%">{el.amount}</td>
            <td width="20%">{el.active ? "active" : "canceled"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
