import TableClients from "@/src/components/TableClients/TableClients";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl mt-10">Clientes</h1>
      </div>

      <div className="flex justify-center items-center overflw-x-auto">
        <TableClients />
      </div>
    </div>
  );
}
