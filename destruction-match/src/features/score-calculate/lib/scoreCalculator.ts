import { Player } from "../../../entities/player/types/player";

export const calculateTeamScore = (members: Player[]): number => {
  return members.reduce((sum, player) => sum + player.score, 0);
};

export const calculateAverageScore = (members: Player[]): number => {
  if (members.length === 0) return 0;
  return Math.round(calculateTeamScore(members) / members.length);
};
