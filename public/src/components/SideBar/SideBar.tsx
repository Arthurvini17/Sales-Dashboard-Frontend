import { Grid, Box, Users, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen  bg-black border-r border-zinc-800 flex flex-col justify-between p-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <Grid size={22} /> SalesHub
        </div>

        <nav className="flex flex-col gap-4 text-xl text-white font-bold">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:text-white"
          >
            <Grid size={18} /> Dashboard
          </Link>

          <Link
            href="/produtos"
            className="flex items-center gap-2 hover:text-white"
          >
            <Box size={18} /> Produtos
          </Link>

          <Link
            href="/clientes"
            className="flex items-center gap-2 hover:text-white"
          >
            <Users size={18} /> Clientes
          </Link>
        </nav>
      </div>

      <button className="flex items-center gap-2 text-zinc-300 hover:text-white">
        <LogOut size={18} /> Sair
      </button>
    </aside>
  );
}
