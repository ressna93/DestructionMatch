import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../widgets/navbar/ui/Navbar";
import { HomePage } from "../../pages/home/ui/HomePage";
import { PlayersPage } from "../../pages/players/ui/PlayersPage";
import { TeamsPage } from "../../pages/teams/ui/TeamsPage";
import { TeamDetailPage } from "../../pages/teams/ui/TeamDetailPage";
import { LeaguePage } from "../../pages/league/ui/LeaguePage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/:id" element={<TeamDetailPage />} />
          <Route path="/league" element={<LeaguePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
