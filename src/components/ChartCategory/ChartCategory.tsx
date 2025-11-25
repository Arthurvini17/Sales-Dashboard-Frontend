"use client";
import { Pie, PieChart, Tooltip, Legend } from "recharts";
import type ChartCategoryProps from "./ChartCategoryProps";

export default function ChartCategory({
  alimentos,
  eletronicos,
  vestuario,
  outros,
}: ChartCategoryProps) {
  const data = [
    { name: "Alimentos", value: Number(alimentos), fill: "#3a82f6" },
    { name: "Eletrônicos", value: Number(eletronicos), fill: "#06b7d4" },
    { name: "Vestuário", value: Number(vestuario), fill: "#8a5cf6" },
    { name: "Outros", value: Number(outros), fill: "#64758a" },
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="65%"
        outerRadius="80%"
        dataKey="value"
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
