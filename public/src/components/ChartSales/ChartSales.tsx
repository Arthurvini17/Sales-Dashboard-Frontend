"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartSalesProps } from "./ChartSalesProps";

export default function ChartSales(props: ChartSalesProps) {
  const data = [
    { name: "Jan", pv: props.janPv, uv: props.janUv },
    { name: "Fev", pv: props.fevPv, uv: props.fevUv },
    { name: "Mar", pv: props.marPv, uv: props.marUv },
    { name: "Abr", pv: props.abrPv, uv: props.abrUv },
    { name: "Mai", pv: props.maiPv, uv: props.maiUv },
    { name: "Jun", pv: props.junPv, uv: props.junUv },
    { name: "Jul", pv: props.julPv, uv: props.julUv },
    { name: "Ago", pv: props.agoPv, uv: props.agoUv },
    { name: "Set", pv: props.setPv, uv: props.setUv },
    { name: "Out", pv: props.outPv, uv: props.outUv },
    { name: "Nov", pv: props.novPv, uv: props.novUv },
    { name: "Dez", pv: props.dezPv, uv: props.dezUv },
  ];

  return (
    <div className="w-full h-[350px] px-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="0" />
          <YAxis domain={[0, "dataMax"]} tick={{ fill: "white" }} />
          <XAxis dataKey="name" tick={{ fill: "white" }} />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8a5cf6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
