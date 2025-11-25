import CardsStats from "../components/CardsStats/CardsStats";
import ChartCategory from "../components/ChartCategory/ChartCategory";
import ChartSales from "../components/ChartSales/ChartSales";
import { CardsMocks } from "../mocks/CardsMocks";
import { chartCategoryMock } from "../mocks/ChartCategoryMocks";
import { chartSalesMock } from "../mocks/ChartSalesMocks";

export default function Home() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl p-10">Dashboard</h1>
      </div>

      <div className="flex items-center  justify-around gap-4 mt-6">
        {CardsMocks.map((item, index) => (
          <CardsStats
            key={index}
            title={item.title}
            value={item.value}
            Icon={item.icon}
            BalanceStonks={item.BalanceStonks}
          />
        ))}
      </div>

      <div className="flex flex-row mt-10 gap-10 px-10">
        <div className="border border-white/20 rounded-2xl  w-full">
          <h1 className="text-3xl font-bold p-10">Vendas por Mês</h1>
          <ChartSales {...chartSalesMock} />
        </div>

        <div className="border border-white/20 rounded-2xl w-xl">
          <h1 className="text-3xl font-bold p-10">Vendas por Categoria</h1>
          <div className="flex items-center justify-center">
            <ChartCategory {...chartCategoryMock} />
          </div>
        </div>
      </div>
    </div>
  );
}
