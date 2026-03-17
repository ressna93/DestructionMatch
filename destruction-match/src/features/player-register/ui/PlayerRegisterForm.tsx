import { usePlayerRegister } from "../model/usePlayerRegister";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";
import { POSITIONS, TIER_SCORES } from "../../../shared/config/constants";
import { Position } from "../../../entities/player/types/player";

interface Props {
  onClose: () => void;
}

export const PlayerRegisterForm = ({ onClose }: Props) => {
  const { form, handleChange, handleSubmit } = usePlayerRegister();

  const onSubmit = () => {
    handleSubmit();
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="닉네임"
        value={form.nickname}
        onChange={(e) => handleChange("nickname", e.target.value)}
        placeholder="닉네임 입력"
      />
      <div className="flex flex-col gap-1">
        <label className="text-yellow-400 text-sm font-semibold tracking-wider">
          포지션
        </label>
        <div className="flex gap-2">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              onClick={() => handleChange("position", pos as Position)}
              className={`flex-1 py-2 text-sm font-bold border transition-colors ${
                form.position === pos
                  ? "bg-yellow-600 border-yellow-400 text-black"
                  : "bg-transparent border-yellow-800 text-gray-400 hover:border-yellow-500"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-yellow-400 text-sm font-semibold tracking-wider">
          티어
        </label>
        <select
          value={form.tier}
          onChange={(e) => {
            const tier = e.target.value;
            handleChange("tier", tier);
            handleChange(
              "score",
              TIER_SCORES[tier as keyof typeof TIER_SCORES] ?? 0,
            );
          }}
          className="bg-gray-900 border border-yellow-700 text-white px-3 py-2 focus:outline-none focus:border-yellow-400"
        >
          <option value="">티어 선택</option>
          {Object.entries(TIER_SCORES).map(([tier, score]) => (
            <option key={tier} value={tier}>
              {tier} ({score}점)
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onSubmit} disabled={!form.nickname || !form.tier}>
          등록
        </Button>
      </div>
    </div>
  );
};
