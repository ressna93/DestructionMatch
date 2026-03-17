import { useState } from "react";
import { Player, Position } from "../../../entities/player/types/player";
import { Team } from "../../../entities/team/types/team";
import { useTeamStore } from "../../../entities/team/model/teamStore";
import { usePlayerStore } from "../../../entities/player/model/playerStore";
import { calculateTeamScore } from "../../score-calculate/lib/scoreCalculator";
import { POSITIONS } from "../../../shared/config/constants";

type PositionMap = Record<Position, Player | null>;

const emptyPositions = (): PositionMap =>
  POSITIONS.reduce((acc, pos) => ({ ...acc, [pos]: null }), {} as PositionMap);

export const useTeamCompose = () => {
  const [teamName, setTeamName] = useState("");
  const [selected, setSelected] = useState<PositionMap>(emptyPositions());
  const players = usePlayerStore((s) => s.players);
  const addTeam = useTeamStore((s) => s.addTeam);

  const assignPlayer = (position: Position, player: Player | null) => {
    setSelected((prev) => ({ ...prev, [position]: player }));
  };

  const handleSubmit = (leaderId: string) => {
    if (!teamName.trim()) return;
    const members = Object.values(selected).filter(Boolean) as Player[];
    const newTeam: Team = {
      id: crypto.randomUUID(),
      name: teamName,
      leaderId,
      members,
      totalScore: calculateTeamScore(members),
    };
    addTeam(newTeam);
    setTeamName("");
    setSelected(emptyPositions());
  };

  return {
    teamName,
    setTeamName,
    selected,
    assignPlayer,
    handleSubmit,
    players,
  };
};
