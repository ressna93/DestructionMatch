import { League } from "../../../entities/match/types/match";
import { useTeamStore } from "../../../entities/team/model/teamStore";
import { Badge } from "../../../shared/ui/Badge";

interface LeagueTableProps {
  league: League;
}

export const LeagueTable = ({ league }: LeagueTableProps) => {
  const teams = useTeamStore((s) => s.teams);

  const getTeamName = (id: string) =>
    teams.find((t) => t.id === id)?.name ?? id;

  return (
    <div className="bg-gray-900 border border-yellow-900 p-4">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-yellow-400 font-black tracking-wider">
          {league.name}
        </h3>
        <Badge color="blue">{league.type}</Badge>
      </div>
      <div className="flex flex-col gap-2">
        {league.matches.map((match) => (
          <div
            key={match.id}
            className="flex items-center justify-between bg-gray-800 px-4 py-2 border border-gray-700"
          >
            <span className="text-white text-sm font-semibold">
              {getTeamName(match.teamAId)}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 font-black">
                {match.teamAScore}
              </span>
              <Badge
                color={
                  match.status === "완료"
                    ? "gold"
                    : match.status === "진행중"
                      ? "red"
                      : "gray"
                }
              >
                {match.status}
              </Badge>
              <span className="text-yellow-400 font-black">
                {match.teamBScore}
              </span>
            </div>
            <span className="text-white text-sm font-semibold">
              {getTeamName(match.teamBId)}
            </span>
          </div>
        ))}
        {league.matches.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-4">
            경기 일정이 없습니다
          </p>
        )}
      </div>
    </div>
  );
};
