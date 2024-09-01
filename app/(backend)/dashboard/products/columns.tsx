/** @format */

"use client";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import ProductActionsColumn from "./ProductActionsColumn";
// import PdtActionColumn from "../categories/ProductActionColumn";
export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableColumn column={column} title="Name" />,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <SortableColumn column={column} title="Category" />,
  },
  {
    accessorKey: "employeeName",
    header: ({ column }) => (
      <SortableColumn column={column} title="Employee Name" />
    ),
  },
  {
    accessorKey: "costPrice",
    header: ({ column }) => (
      <SortableColumn column={column} title="Cost Price" />
    ),
  },
  {
    accessorKey: "sellingPrice",
    header: ({ column }) => (
      <SortableColumn column={column} title="sellingPrice" />
    ),
  },
  {
    accessorKey: "quantityInHand",
    header: ({ column }) => (
      <SortableColumn column={column} title="QttyInHand" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <SortableColumn column={column} title="Description" />
    ),
  },
  {
    accessorKey: "imageUrl",
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },

  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <ProductActionsColumn
          row={row}
          model="product"
          editEndpoint={`products/update/${product.id}`}
          id={product.id}
        />
      );
    },
  },
];
