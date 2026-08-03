"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "../DataTable";
import Badge from "../Badge";
import EntityModal, { FieldConfig } from "../EntityModal";
import ConfirmDialog from "../ConfirmDialog";
import { TeamMember } from "../types";
import { TEAM_MEMBERS } from "../mock-data";

const FIELDS: FieldConfig[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Full name" },
  {
    name: "role",
    label: "Role",
    type: "text",
    placeholder: "e.g. Design Lead",
  },
  {
    name: "department",
    label: "Department",
    type: "text",
    placeholder: "e.g. Design",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "name@meta-tronix.com",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["active", "invited"],
  },
];

export default function TeamsSection() {
  const [members, setMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [deleting, setDeleting] = useState<TeamMember | null>(null);

  const columns: Column<TeamMember>[] = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    { key: "email", label: "Email" },
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

  function openEdit(member: TeamMember) {
    setEditing(member);
    setModalOpen(true);
  }

  function handleSave(values: Record<string, unknown>) {
    if (editing) {
      setMembers((prev) =>
        prev.map((m) =>
          m.id === editing.id ? ({ ...m, ...values } as TeamMember) : m,
        ),
      );
    } else {
      setMembers((prev) => [
        { id: crypto.randomUUID(), ...values } as TeamMember,
        ...prev,
      ]);
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleting)
      setMembers((prev) => prev.filter((m) => m.id !== deleting.id));
    setDeleting(null);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-brand-muted">
          {members.length} team members
        </p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 rounded-lg bg-brand-navy px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" /> New member
        </button>
      </div>

      <DataTable
        columns={columns}
        data={members}
        onEdit={openEdit}
        onDelete={setDeleting}
        emptyLabel="No team members yet — add your first one."
      />

      <EntityModal
        open={modalOpen}
        title={editing ? "Edit member" : "New member"}
        fields={FIELDS}
        initialValues={editing ?? {}}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmDialog
        open={!!deleting}
        title="Remove team member?"
        description={
          deleting
            ? `"${deleting.name}" will be removed from the team.`
            : undefined
        }
        onCancel={() => setDeleting(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
