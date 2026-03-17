import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../../shared/lib/useTheme";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/players", label: "선수 등록" },
  { path: "/teams", label: "팀 구성" },
  { path: "/league", label: "리그" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const { isDark, toggle } = useTheme();

  return (
    <nav className="bg-slate-200 dark:bg-gray-950 border-b border-yellow-400 dark:border-yellow-800 px-6 py-3 flex items-center justify-between transition-colors duration-300">
      <span className="text-yellow-600 dark:text-yellow-400 font-black tracking-[0.3em] text-xl">
        ⚔ 멸망전
      </span>
      <ul className="flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-sm font-semibold tracking-wider transition-colors ${
                pathname === item.path
                  ? "text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600 dark:border-yellow-400 pb-1"
                  : "text-slate-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-300"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={toggle}
            className="text-lg px-2 py-1 border border-yellow-600 dark:border-yellow-800 hover:border-yellow-400 transition-colors"
            title={isDark ? "라이트 모드" : "다크 모드"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
