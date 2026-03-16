import { create } from "zustand";
import { League, Match } from "../types/match";
import { storage } from "../../../shared/lib/localStorage";
import { STORAGE_KEYS } from "../../../shared/config/constants";

interface MatchStore {
  leagues: League[];
  addLeague: (league: League) => void;
  updateMatch: (leagueId: string, match: Match) => void;
  loadLeagues: () => void;
}

export const useMatchStore = create<MatchStore>((set) => ({
  leagues: [],
  loadLeagues: () => {
    const saved = storage.get<League[]>(STORAGE_KEYS.LEAGUES);
    if (saved) set({ leagues: saved });
  },
  addLeague: (league) =>
    set((state) => {
      const updated = [...state.leagues, league];
      storage.set(STORAGE_KEYS.LEAGUES, updated);
      return { leagues: updated };
    }),
  updateMatch: (leagueId, match) =>
    set((state) => {
      const updated = state.leagues.map((l) =>
        l.id === leagueId
          ? {
              ...l,
              matches: l.matches.map((m) => (m.id === match.id ? match : m)),
            }
          : l,
      );
      storage.set(STORAGE_KEYS.LEAGUES, updated);
      return { leagues: updated };
    }),
}));
