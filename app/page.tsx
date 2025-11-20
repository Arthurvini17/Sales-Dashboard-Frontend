import CardsStats from "@/public/src/components/CardsStats/CardsStats";
import ChartCategory from "@/public/src/components/ChartCategory/ChartCategory";
import ChartSales from "@/public/src/components/ChartSales/ChartSales";
import { CardsMocks } from "@/public/src/mocks/CardsMocks";
import { chartCategoryMock } from "@/public/src/mocks/ChartCategoryMocks";
import { chartSalesMock } from "@/public/src/mocks/ChartSalesMocks";
import Sidebar from "@/public/src/components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <div className="flex items-center justify-center">
          <h1 className="text-white font-bold text-4xl">Dashboard</h1>
        </div>

        <div className="flex items-center  justify-around gap-4 mt-6">
          {CardsMocks.map((item, index) => (
            <CardsStats
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
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
    </div>
  );
}
