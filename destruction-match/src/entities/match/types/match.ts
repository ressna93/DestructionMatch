export type LeagueType = "리그전" | "토너먼트";
export type MatchStatus = "예정" | "진행중" | "완료";

export interface Match {
  id: string;
  teamAId: string;
  teamBId: string;
  teamAScore: number;
  teamBScore: number;
  status: MatchStatus;
  date: string;
}

export interface League {
  id: string;
  name: string;
  type: LeagueType;
  teamIds: string[];
  matches: Match[];
  createdAt: string;
}
