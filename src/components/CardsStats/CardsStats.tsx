import { CardsStatsProps } from "./CardsStatsProps";

export default function CardsStats({
  title,
  value,
  Icon,
  BalanceStonks,
}: CardsStatsProps) {
  return (
    <div className=" w-80 p-6    justify-between border border-white/20  rounded-2xl  ">
      <div className="flex  justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <Icon className="self-end font-semibold" size={30} />
      </div>
      <p className="font-bold  text-3xl">{value}</p>
      <span className="text-text-secondary  text-xs ">{BalanceStonks}</span>
    </div>
  );
}
