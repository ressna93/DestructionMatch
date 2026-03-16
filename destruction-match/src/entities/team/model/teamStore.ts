import { create } from "zustand";
import { Team } from "../types/team";
import { storage } from "../../../shared/lib/localStorage";
import { STORAGE_KEYS } from "../../../shared/config/constants";

interface TeamStore {
  teams: Team[];
  addTeam: (team: Team) => void;
  removeTeam: (id: string) => void;
  loadTeams: () => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
  teams: [],
  loadTeams: () => {
    const saved = storage.get<Team[]>(STORAGE_KEYS.TEAMS);
    if (saved) set({ teams: saved });
  },
  addTeam: (team) =>
    set((state) => {
      const updated = [...state.teams, team];
      storage.set(STORAGE_KEYS.TEAMS, updated);
      return { teams: updated };
    }),
  removeTeam: (id) =>
    set((state) => {
      const updated = state.teams.filter((t) => t.id !== id);
      storage.set(STORAGE_KEYS.TEAMS, updated);
      return { teams: updated };
    }),
}));
