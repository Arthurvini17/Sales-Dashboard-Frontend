"use client";
import { Grid, Users, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard", icon: Grid },
  { href: "/clientes", label: "Clientes", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-screen  bg-primaryBlack border-r border-zinc-800 flex flex-col justify-between p-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <Grid size={22} /> SalesHub
        </div>

        <nav className="flex flex-col gap-4 text-xl text-white font-bold">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 p-2 rounded-md transition
                         ${active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"}
                       `}
              >
                <Icon size={20} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <button className="flex items-center gap-2 text-zinc-300 hover:text-white">
        <LogOut size={18} /> Sair
      </button>
    </aside>
  );
}
