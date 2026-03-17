import { useEffect, useState } from "react";
import { useMatchStore } from "../../../entities/match/model/matchStore";
import { useTeamStore } from "../../../entities/team/model/teamStore";
import { LeagueTable } from "../../../widgets/league-table/ui/LeagueTable";
import { LeagueCreateForm } from "../../../features/league-create/ui/LeagueCreateForm";

import { Button } from "../../../shared/ui/Button";
import { Modal } from "../../../shared/ui/Modal";

export const LeaguePage = () => {
  const { leagues, loadLeagues } = useMatchStore();
  const { loadTeams } = useTeamStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadLeagues();
    loadTeams();
  }, [loadLeagues, loadTeams]);

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-yellow-400 font-black text-2xl tracking-widest">
            리그 관리
          </h1>
          <Button onClick={() => setIsOpen(true)}>+ 리그 생성</Button>
        </div>
        <div className="flex flex-col gap-6">
          {leagues.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              생성된 리그가 없습니다
            </p>
          )}
          {leagues.map((league) => (
            <LeagueTable key={league.id} league={league} />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="리그 생성">
        <LeagueCreateForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};
