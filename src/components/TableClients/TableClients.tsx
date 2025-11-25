import { ClientsMocks } from "@/src/mocks/ClientsMocks";
import TableClientsRow from "../TableClientsRow/TableClientsRow";

export default function TableClients() {
  return (
    <div className="m-10 border border-white/20 rounded-2xl overflow-hidden max-w-8xl w-full">
      <table className="w-full border-collapse table-auto">
        <thead className="bg-primaryBlack">
          <tr className="border-b border-white/20 ">
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-right ">Total Gasto</th>
          </tr>
        </thead>

        <tbody>
          {ClientsMocks.map((item, index) => (
            <TableClientsRow
              key={index}
              name={item.name}
              email={item.email}
              totalGasto={item.totalGasto}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
