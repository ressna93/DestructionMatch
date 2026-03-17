import { useEffect, useState } from "react";
import { usePlayerStore } from "../../../entities/player/model/playerStore";
import { PlayerCard } from "../../../widgets/player-card/ui/PlayerCard";
import { PlayerRegisterForm } from "../../../features/player-register/ui/PlayerRegisterForm";
import { Button } from "../../../shared/ui/Button";
import { Modal } from "../../../shared/ui/Modal";

export const PlayersPage = () => {
  const { players, loadPlayers, removePlayer } = usePlayerStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-yellow-400 font-black text-2xl tracking-widest">
            선수 목록
          </h1>
          <Button onClick={() => setIsOpen(true)}>+ 선수 등록</Button>
        </div>
        <div className="flex flex-col gap-3">
          {players.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              등록된 선수가 없습니다
            </p>
          )}
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onRemove={removePlayer}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="선수 등록">
        <PlayerRegisterForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};
