import { useEffect, useState } from "react";
import { useTeamStore } from "../../../entities/team/model/teamStore";
import { usePlayerStore } from "../../../entities/player/model/playerStore";
import { TeamBoard } from "../../../widgets/team-board/ui/TeamBoard";
import { TeamComposeForm } from "../../../features/team-compose/ui/TeamComposeForm";
import { Button } from "../../../shared/ui/Button";
import { Modal } from "../../../shared/ui/Modal";

export const TeamsPage = () => {
  const { teams, loadTeams, removeTeam } = useTeamStore();
  const { loadPlayers } = usePlayerStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadTeams();
    loadPlayers();
  }, [loadTeams, loadPlayers]);

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-yellow-400 font-black text-2xl tracking-widest">
            팀 목록
          </h1>
          <Button onClick={() => setIsOpen(true)}>+ 팀 구성</Button>
        </div>
        <div className="flex flex-col gap-4">
          {teams.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              구성된 팀이 없습니다
            </p>
          )}
          {teams.map((team) => (
            <TeamBoard key={team.id} team={team} onRemove={removeTeam} />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="팀 구성">
        <TeamComposeForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};
