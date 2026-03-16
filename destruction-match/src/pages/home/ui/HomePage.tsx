import { Link } from "react-router-dom";

const menuItems = [
  { path: "/players", label: "선수 등록", desc: "클랜원 프로필을 등록하세요" },
  { path: "/teams", label: "팀 구성", desc: "라인별로 팀을 구성하세요" },
  {
    path: "/league",
    label: "리그 관리",
    desc: "리그전 또는 토너먼트를 시작하세요",
  },
];

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-10 p-8">
      <div className="text-center">
        <h1 className="text-yellow-400 font-black text-5xl tracking-[0.4em] mb-2">
          ⚔ 멸망전
        </h1>
        <p className="text-gray-400 tracking-widest text-sm">
          CLAN DESTRUCTION MATCH
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <div className="bg-gray-900 border border-yellow-900 hover:border-yellow-500 p-6 flex flex-col gap-3 transition-all hover:bg-gray-800 cursor-pointer">
              <span className="text-yellow-400 font-black tracking-wider text-lg">
                {item.label}
              </span>
              <span className="text-gray-400 text-sm">{item.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
