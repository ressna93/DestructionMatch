import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../widgets/navbar/ui/Navbar";
import { HomePage } from "../../pages/home/ui/HomePage";
import { PlayersPage } from "../../pages/players/ui/PlayersPage";
import { TeamsPage } from "../../pages/teams/ui/TeamsPage";
import { LeaguePage } from "../../pages/league/ui/LeaguePage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/league" element={<LeaguePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
