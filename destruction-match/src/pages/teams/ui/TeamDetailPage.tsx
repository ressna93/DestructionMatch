import { useParams, useNavigate } from "react-router-dom";
import { useTeamStore } from "../../../entities/team/model/teamStore";
import { usePlayerStore } from "../../../entities/player/model/playerStore";
import { Badge } from "../../../shared/ui/Badge";
import { Button } from "../../../shared/ui/Button";
import { useEffect } from "react";

const positionColor: Record<string, "gold" | "blue" | "red" | "gray"> = {
  탑: "red",
  정글: "blue",
  미드: "gold",
  원딜: "gray",
  서폿: "blue",
};

export const TeamDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { teams, loadTeams } = useTeamStore();
  const { players, loadPlayers } = usePlayerStore();

  useEffect(() => {
    loadTeams();
    loadPlayers();
  }, [loadTeams, loadPlayers]);

  const team = teams.find((t) => t.id === id);
  const leader = players.find((p) => p.id === team?.leaderId);

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">팀을 찾을 수 없습니다</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="secondary"
            onClick={() => navigate("/teams")}
            className="text-sm px-3 py-1"
          >
            ← 뒤로
          </Button>
          <h1 className="text-yellow-400 font-black text-3xl tracking-widest">
            {team.name}
          </h1>
        </div>

        <div className="bg-gray-900 border border-yellow-800 p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm tracking-wider">팀장</span>
            <span className="text-white font-bold">
              {leader?.nickname ?? "-"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm tracking-wider">
              팀 통합 점수
            </span>
            <span className="text-yellow-400 font-black text-xl">
              {team.totalScore}점
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-yellow-600 font-bold tracking-widest text-sm mb-1">
            라인업
          </h2>
          {team.members.map((member) => (
            <div
              key={member.id}
              className="bg-gray-900 border border-yellow-900 px-5 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Badge color={positionColor[member.position]}>
                  {member.position}
                </Badge>
                <span className="text-white font-bold text-lg">
                  {member.nickname}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">{member.tier}</span>
                <span className="text-yellow-400 font-black">
                  {member.score}점
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
