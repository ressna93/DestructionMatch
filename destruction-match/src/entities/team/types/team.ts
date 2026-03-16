import { Player } from "../../player/types/player";

export interface Team {
  id: string;
  name: string;
  leaderId: string;
  members: Player[];
  totalScore: number;
}
