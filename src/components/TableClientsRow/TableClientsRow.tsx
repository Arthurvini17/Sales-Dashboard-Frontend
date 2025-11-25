import TableClientsRowProps from "./TableClientsRowProps";

export default function TableClientsRow({
  name,
  email,
  totalGasto,
}: TableClientsRowProps) {
  return (
    <tr className="border-b border-white/20">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2 ">{email}</td>
      <td className="px-4 py-2  text-right">{totalGasto}</td>
    </tr>
  );
}
