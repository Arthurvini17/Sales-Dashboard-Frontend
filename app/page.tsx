import CardsStats from "@/public/src/components/CardsStats/CardsStats";
import Sidebar from "@/public/src/components/SideBar/SideBar";
import { CardsMocks } from "@/public/src/mocks/CardsMocks";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <div className="flex items-center justify-center">
          <h1 className="text-white font-bold text-4xl">Dashboard</h1>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4 p-4">
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
      </div>
    </div>
  );
}
