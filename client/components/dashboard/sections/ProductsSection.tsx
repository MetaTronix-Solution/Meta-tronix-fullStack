"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "../DataTable";
import Badge from "../Badge";
import EntityModal, { FieldConfig } from "../EntityModal";
import ConfirmDialog from "../ConfirmDialog";
import { Product } from "../types";
import { PRODUCTS } from "../mock-data";

const FIELDS: FieldConfig[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Product name" },
  {
    name: "category",
    label: "Category",
    type: "text",
    placeholder: "e.g. Subscription",
  },
  { name: "price", label: "Price (USD)", type: "number", placeholder: "0" },
  { name: "stock", label: "Stock", type: "number", placeholder: "0" },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["active", "inactive"],
  },
];

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [deleting, setDeleting] = useState<Product | null>(null);

  const columns: Column<Product>[] = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price", render: (item) => `$${item.price}` },
    { key: "stock", label: "Stock" },
    {
      key: "status",
      label: "Status",
      render: (item) => <Badge value={item.status} />,
    },
  ];

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(product: Product) {
    setEditing(product);
    setModalOpen(true);
  }

  function handleSave(values: Record<string, unknown>) {
    if (editing) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editing.id ? ({ ...p, ...values } as Product) : p,
        ),
      );
    } else {
      setProducts((prev) => [
        { id: crypto.randomUUID(), ...values } as Product,
        ...prev,
      ]);
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleting)
      setProducts((prev) => prev.filter((p) => p.id !== deleting.id));
    setDeleting(null);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-brand-muted">{products.length} products</p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 rounded-lg bg-brand-navy px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" /> New product
        </button>
      </div>

      <DataTable
        columns={columns}
        data={products}
        onEdit={openEdit}
        onDelete={setDeleting}
        emptyLabel="No products yet — add your first one."
      />

      <EntityModal
        open={modalOpen}
        title={editing ? "Edit product" : "New product"}
        fields={FIELDS}
        initialValues={editing ?? {}}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmDialog
        open={!!deleting}
        title="Delete product?"
        description={
          deleting
            ? `"${deleting.name}" will be permanently removed.`
            : undefined
        }
        onCancel={() => setDeleting(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
