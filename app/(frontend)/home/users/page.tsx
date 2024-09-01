/** @format */

import { getUsers } from "@/actions/UserActions";
import PageHeader from "@/components/backend/PageHeader";
import DataTable from "@/components/DataTableComponents/DataTable";
import { TableHeader } from "@/components/ui/table";
import { User } from "@prisma/client";
import { columns } from "../columns";

export default async function page() {
  const users: User[] = (await getUsers()) || [];
  return (
    <div className="p-8">
      <TableHeader />
      <PageHeader
        title={"Users"}
        href={"/register"}
        toolTipText={"Add user"}
      />
      <div className="py-8">
        <DataTable data={users} columns={columns} />
      </div>
    </div>
  );
}
