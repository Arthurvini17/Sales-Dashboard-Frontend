type CardsStatsProps = {
  title: string;
  value: string;
  icon: React.ElementType;
  BalanceStonks: string;
};

export default function CardsStats({
  title,
  value,
  icon: Icon,
  BalanceStonks,
}: CardsStatsProps) {
  return (
    <div className=" w-80 p-6 border-[0.5px]    justify-between border-gray-500  rounded-2xl  ">
      <div className="flex  justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <Icon className="self-end font-semibold" size={30} />
      </div>
      <p className="font-bold  text-3xl">{value}</p>
      <span className="text-text-secondary  text-xs ">{BalanceStonks}</span>
    </div>
  );
}
