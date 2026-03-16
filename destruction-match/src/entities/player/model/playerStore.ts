import { create } from "zustand";
import { Player } from "../types/player";
import { storage } from "../../../shared/lib/localStorage";
import { STORAGE_KEYS } from "../../../shared/config/constants";

interface PlayerStore {
  players: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: string) => void;
  loadPlayers: () => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  players: [],
  loadPlayers: () => {
    const saved = storage.get<Player[]>(STORAGE_KEYS.PLAYERS);
    if (saved) set({ players: saved });
  },
  addPlayer: (player) =>
    set((state) => {
      const updated = [...state.players, player];
      storage.set(STORAGE_KEYS.PLAYERS, updated);
      return { players: updated };
    }),
  removePlayer: (id) =>
    set((state) => {
      const updated = state.players.filter((p) => p.id !== id);
      storage.set(STORAGE_KEYS.PLAYERS, updated);
      return { players: updated };
    }),
}));
