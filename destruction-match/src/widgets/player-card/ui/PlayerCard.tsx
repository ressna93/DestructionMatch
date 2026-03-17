import { Player } from "../../../entities/player/types/player";
import { Badge } from "../../../shared/ui/Badge";
import { Button } from "../../../shared/ui/Button";

interface PlayerCardProps {
  player: Player;
  onRemove?: (id: string) => void;
}

const positionColor: Record<string, "gold" | "blue" | "red" | "gray"> = {
  탑: "red",
  정글: "blue",
  미드: "gold",
  원딜: "gray",
  서폿: "blue",
};

export const PlayerCard = ({ player, onRemove }: PlayerCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-yellow-300 dark:border-yellow-900 p-4 flex items-center justify-between hover:border-yellow-500 dark:hover:border-yellow-600 transition-colors">
      <div className="flex items-center gap-3">
        <Badge color={positionColor[player.position]}>{player.position}</Badge>
        <div>
          <p className="text-slate-900 dark:text-white font-bold">{player.nickname}</p>
          <p className="text-slate-500 dark:text-gray-400 text-xs">
            {player.tier} · {player.score}점
          </p>
        </div>
      </div>
      {onRemove && (
        <Button
          variant="danger"
          onClick={() => onRemove(player.id)}
          className="text-xs px-2 py-1"
        >
          삭제
        </Button>
      )}
    </div>
  );
};
