/** @format */

import { fetchAllProducts } from "@/actions/ProductActions";
import PageHeader from "@/components/backend/PageHeader";
import DataTable from "@/components/DataTableComponents/DataTable";
import { TableHeader } from "@/components/ui/table";
import { Product } from "@prisma/client";
import { columns } from "./columns";

export default async function page() {
  const products: Product[] = (await fetchAllProducts()) || [];
  return (
    <div className="mt-20">
      <TableHeader />
      <PageHeader
        title={"Add product"}
        href={"/dashboard/products/new"}
        toolTipText={"Add Product"}
      />
      <div className="pr-6">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
