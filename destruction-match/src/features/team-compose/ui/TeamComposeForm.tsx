import { useTeamCompose } from "../model/useTeamCompose";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";
import { POSITIONS } from "../../../shared/config/constants";
import { Player, Position } from "../../../entities/player/types/player";

interface Props {
  onClose: () => void;
}

export const TeamComposeForm = ({ onClose }: Props) => {
  const {
    teamName,
    setTeamName,
    selected,
    assignPlayer,
    handleSubmit,
    players,
  } = useTeamCompose();

  const onSubmit = () => {
    const leader = (Object.values(selected) as (Player | null)[]).find(Boolean);
    if (!leader) return;
    handleSubmit(leader.id);
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="팀 이름"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="팀 이름 입력"
      />
      <div className="flex flex-col gap-2">
        <label className="text-yellow-400 text-sm font-semibold tracking-wider">
          라인별 선수 배정
        </label>
        {POSITIONS.map((pos) => (
          <div key={pos} className="flex items-center gap-2">
            <span className="text-gray-400 text-sm w-10">{pos}</span>
            <select
              value={selected[pos as Position]?.id ?? ""}
              onChange={(e) => {
                const player =
                  players.find((p) => p.id === e.target.value) ?? null;
                assignPlayer(pos as Position, player);
              }}
              className="flex-1 bg-gray-900 border border-yellow-700 text-white px-3 py-2 focus:outline-none focus:border-yellow-400"
            >
              <option value="">선수 선택</option>
              {players
                .filter((p) => p.position === pos)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nickname} ({p.score}점)
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onSubmit} disabled={!teamName}>
          구성 완료
        </Button>
      </div>
    </div>
  );
};
