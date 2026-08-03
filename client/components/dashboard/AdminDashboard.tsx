"use client";

import { useState } from "react";
import { Newspaper, Package, Users, Briefcase } from "lucide-react";
import Sidebar, { DashboardTab } from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";
import BlogSection from "./sections/BlogSection";
import ProductsSection from "./sections/ProductsSection";
import TeamsSection from "./sections/TeamsSection";
import CareersSection from "./sections/CareersSection";
import {
  BLOG_POSTS,
  PRODUCTS,
  TEAM_MEMBERS,
  CAREER_LISTINGS,
} from "./mock-data";

const TAB_META: Record<DashboardTab, { title: string; description: string }> = {
  overview: {
    title: "Overview",
    description: "A snapshot of what's happening across the site.",
  },
  blog: { title: "Blog", description: "Write, edit, and publish articles." },
  products: { title: "Products", description: "Manage your product catalog." },
  teams: { title: "Team", description: "Manage team member profiles." },
  careers: { title: "Careers", description: "Manage open roles and listings." },
};

export default function AdminDashboard() {
  const [tab, setTab] = useState<DashboardTab>("overview");
  const meta = TAB_META[tab];

  return (
    <div className="flex h-full w-full overflow-hidden bg-dot-grid">
      <Sidebar active={tab} onChange={setTab} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={meta.title} description={meta.description} />

        <main className="flex-1 overflow-y-auto px-8 py-6">
          {tab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  label="Blog posts"
                  value={BLOG_POSTS.length}
                  icon={Newspaper}
                  hint="Published & drafts"
                />
                <StatCard
                  label="Products"
                  value={PRODUCTS.length}
                  icon={Package}
                  hint="Active catalog"
                />
                <StatCard
                  label="Team members"
                  value={TEAM_MEMBERS.length}
                  icon={Users}
                  hint="Across departments"
                />
                <StatCard
                  label="Open roles"
                  value={
                    CAREER_LISTINGS.filter((c) => c.status === "open").length
                  }
                  icon={Briefcase}
                  hint="Currently hiring"
                />
              </div>
              <div className="rounded-xl border border-brand-border bg-white p-6">
                <p className="text-sm text-brand-muted">
                  Pick a section from the sidebar to manage blog posts,
                  products, team members, or career listings.
                </p>
              </div>
            </div>
          )}

          {tab === "blog" && <BlogSection />}
          {tab === "products" && <ProductsSection />}
          {tab === "teams" && <TeamsSection />}
          {tab === "careers" && <CareersSection />}
        </main>
      </div>
    </div>
  );
}
