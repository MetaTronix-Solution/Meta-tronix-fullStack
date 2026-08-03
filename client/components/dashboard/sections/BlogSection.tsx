"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "../DataTable";
import Badge from "../Badge";
import EntityModal, { FieldConfig } from "../EntityModal";
import ConfirmDialog from "../ConfirmDialog";
import { BlogPost } from "../types";
import { BLOG_POSTS } from "../mock-data";

const FIELDS: FieldConfig[] = [
  { name: "title", label: "Title", type: "text", placeholder: "Post title" },
  { name: "author", label: "Author", type: "text", placeholder: "Author name" },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["draft", "published", "archived"],
  },
  {
    name: "date",
    label: "Publish date",
    type: "text",
    placeholder: "YYYY-MM-DD",
  },
];

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [deleting, setDeleting] = useState<BlogPost | null>(null);

  const columns: Column<BlogPost>[] = [
    { key: "title", label: "Title" },
    { key: "author", label: "Author" },
    { key: "date", label: "Date" },
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

  function openEdit(post: BlogPost) {
    setEditing(post);
    setModalOpen(true);
  }

  function handleSave(values: Record<string, unknown>) {
    if (editing) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === editing.id ? ({ ...p, ...values } as BlogPost) : p,
        ),
      );
    } else {
      setPosts((prev) => [
        { id: crypto.randomUUID(), ...values } as BlogPost,
        ...prev,
      ]);
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleting) setPosts((prev) => prev.filter((p) => p.id !== deleting.id));
    setDeleting(null);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-brand-muted">{posts.length} posts</p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 rounded-lg bg-brand-navy px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" /> New post
        </button>
      </div>

      <DataTable
        columns={columns}
        data={posts}
        onEdit={openEdit}
        onDelete={setDeleting}
        emptyLabel="No blog posts yet — create your first one."
      />

      <EntityModal
        open={modalOpen}
        title={editing ? "Edit post" : "New post"}
        fields={FIELDS}
        initialValues={editing ?? {}}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmDialog
        open={!!deleting}
        title="Delete post?"
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
