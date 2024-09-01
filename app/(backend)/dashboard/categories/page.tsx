/** @format */

import { getAllCategories } from "@/actions/CategoryAction";
import DataTable from "@/components/DataTableComponents/DataTable";
import { TableHeader } from "@/components/ui/table";
import { Category } from "@prisma/client";
import { columns } from "./columns";
import PageHeader from "@/components/backend/PageHeader";

export default async function page() {
  const categories: Category[] = (await getAllCategories()) || [];
  return (
    <div className="p-8">
      <TableHeader />
      <PageHeader
        title={"Categories"}
        href={"/dashboard/categories/new"}
        toolTipText={"Add Category"}
      />
      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
