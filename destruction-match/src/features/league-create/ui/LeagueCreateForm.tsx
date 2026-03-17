import { useLeagueCreate } from "../model/useLeagueCreate";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";
import { LEAGUE_TYPES } from "../../../shared/config/constants";
import { LeagueType } from "../../../entities/match/types/match";

interface Props {
  onClose: () => void;
}

export const LeagueCreateForm = ({ onClose }: Props) => {
  const {
    name,
    setName,
    type,
    setType,
    selectedTeamIds,
    toggleTeam,
    handleSubmit,
    teams,
  } = useLeagueCreate();

  const onSubmit = () => {
    handleSubmit();
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="리그 이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="리그 이름 입력"
      />
      <div className="flex flex-col gap-1">
        <label className="text-yellow-400 text-sm font-semibold tracking-wider">
          리그 형식
        </label>
        <div className="flex gap-2">
          {LEAGUE_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t as LeagueType)}
              className={`flex-1 py-2 text-sm font-bold border transition-colors ${
                type === t
                  ? "bg-yellow-600 border-yellow-400 text-black"
                  : "bg-transparent border-yellow-800 text-gray-400 hover:border-yellow-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-yellow-400 text-sm font-semibold tracking-wider">
          참가 팀 선택 (최소 2팀)
        </label>
        <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
          {teams.length === 0 && (
            <p className="text-gray-500 text-sm">구성된 팀이 없습니다</p>
          )}
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => toggleTeam(team.id)}
              className={`px-3 py-2 text-sm font-semibold border text-left transition-colors ${
                selectedTeamIds.includes(team.id)
                  ? "bg-yellow-700 border-yellow-400 text-black"
                  : "bg-gray-800 border-gray-600 text-gray-300 hover:border-yellow-600"
              }`}
            >
              {team.name} ({team.totalScore}점)
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!name || selectedTeamIds.length < 2}
        >
          생성
        </Button>
      </div>
    </div>
  );
};
