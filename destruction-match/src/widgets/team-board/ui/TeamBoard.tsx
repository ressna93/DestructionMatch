import { Team } from "../../../entities/team/types/team";
import { usePlayerStore } from "../../../entities/player/model/playerStore";
import { Badge } from "../../../shared/ui/Badge";
import { Button } from "../../../shared/ui/Button";

interface TeamBoardProps {
  team: Team;
  onRemove?: (id: string) => void;
}

export const TeamBoard = ({ team, onRemove }: TeamBoardProps) => {
  const players = usePlayerStore((s) => s.players);
  const leader = players.find((p) => p.id === team.leaderId);

  return (
    <div className="bg-gray-900 border border-yellow-900 p-4 hover:border-yellow-600 transition-colors">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-yellow-400 font-black tracking-wider">
            {team.name}
          </h3>
          <p className="text-gray-400 text-xs">
            팀장: {leader?.nickname ?? "-"} · 총점: {team.totalScore}
          </p>
        </div>
        {onRemove && (
          <Button
            variant="danger"
            onClick={() => onRemove(team.id)}
            className="text-xs px-2 py-1"
          >
            삭제
          </Button>
        )}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {team.members.map((member) => (
          <div key={member.id} className="flex flex-col items-center gap-1">
            <Badge color="gold">{member.position}</Badge>
            <span className="text-white text-xs text-center">
              {member.nickname}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
