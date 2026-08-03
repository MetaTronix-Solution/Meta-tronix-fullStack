"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "../DataTable";
import Badge from "../Badge";
import EntityModal, { FieldConfig } from "../EntityModal";
import ConfirmDialog from "../ConfirmDialog";
import { CareerListing } from "../types";
import { CAREER_LISTINGS } from "../mock-data";

const FIELDS: FieldConfig[] = [
  {
    name: "title",
    label: "Role title",
    type: "text",
    placeholder: "e.g. Frontend Engineer",
  },
  {
    name: "department",
    label: "Department",
    type: "text",
    placeholder: "e.g. Engineering",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "e.g. Kathmandu, NP",
  },
  {
    name: "type",
    label: "Type",
    type: "select",
    options: ["full-time", "part-time", "contract", "internship"],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["open", "closed"],
  },
];

export default function CareersSection() {
  const [listings, setListings] = useState<CareerListing[]>(CAREER_LISTINGS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CareerListing | null>(null);
  const [deleting, setDeleting] = useState<CareerListing | null>(null);

  const columns: Column<CareerListing>[] = [
    { key: "title", label: "Role" },
    { key: "department", label: "Department" },
    { key: "location", label: "Location" },
    {
      key: "type",
      label: "Type",
      render: (item) => (
        <span className="capitalize">{item.type.replace("-", " ")}</span>
      ),
    },
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

  function openEdit(listing: CareerListing) {
    setEditing(listing);
    setModalOpen(true);
  }

  function handleSave(values: Record<string, unknown>) {
    if (editing) {
      setListings((prev) =>
        prev.map((l) =>
          l.id === editing.id ? ({ ...l, ...values } as CareerListing) : l,
        ),
      );
    } else {
      setListings((prev) => [
        { id: crypto.randomUUID(), ...values } as CareerListing,
        ...prev,
      ]);
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleting)
      setListings((prev) => prev.filter((l) => l.id !== deleting.id));
    setDeleting(null);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-brand-muted">{listings.length} listings</p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 rounded-lg bg-brand-navy px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" /> New listing
        </button>
      </div>

      <DataTable
        columns={columns}
        data={listings}
        onEdit={openEdit}
        onDelete={setDeleting}
        emptyLabel="No open roles yet — post your first listing."
      />

      <EntityModal
        open={modalOpen}
        title={editing ? "Edit listing" : "New listing"}
        fields={FIELDS}
        initialValues={editing ?? {}}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmDialog
        open={!!deleting}
        title="Delete listing?"
        description={
          deleting
            ? `"${deleting.title}" will be permanently removed.`
            : undefined
        }
        onCancel={() => setDeleting(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
