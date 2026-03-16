import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/players", label: "선수 등록" },
  { path: "/teams", label: "팀 구성" },
  { path: "/league", label: "리그" },
];

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gray-950 border-b border-yellow-800 px-6 py-3 flex items-center justify-between">
      <span className="text-yellow-400 font-black tracking-[0.3em] text-xl">
        ⚔ 멸망전
      </span>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-sm font-semibold tracking-wider transition-colors ${
                pathname === item.path
                  ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                  : "text-gray-400 hover:text-yellow-300"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
