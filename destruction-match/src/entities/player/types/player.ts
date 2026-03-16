export type Position = "탑" | "정글" | "미드" | "원딜" | "서폿";

export interface Player {
  id: string;
  nickname: string;
  position: Position;
  score: number;
  tier: string;
}
