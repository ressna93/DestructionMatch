import { useState } from "react";
import { League, LeagueType, Match } from "../../../entities/match/types/match";
import { useMatchStore } from "../../../entities/match/model/matchStore";
import { useTeamStore } from "../../../entities/team/model/teamStore";
import { LEAGUE_TYPES } from "../../../shared/config/constants";

export const useLeagueCreate = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState<LeagueType>(LEAGUE_TYPES[0] as LeagueType);
  const [selectedTeamIds, setSelectedTeamIds] = useState<string[]>([]);
  const teams = useTeamStore((s) => s.teams);
  const addLeague = useMatchStore((s) => s.addLeague);

  const toggleTeam = (id: string) => {
    setSelectedTeamIds((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  const generateMatches = (teamIds: string[]): Match[] => {
    const matches: Match[] = [];
    for (let i = 0; i < teamIds.length; i++) {
      for (let j = i + 1; j < teamIds.length; j++) {
        matches.push({
          id: crypto.randomUUID(),
          teamAId: teamIds[i],
          teamBId: teamIds[j],
          teamAScore: 0,
          teamBScore: 0,
          status: "예정",
          date: "",
        });
      }
    }
    return matches;
  };

  const handleSubmit = () => {
    if (!name.trim() || selectedTeamIds.length < 2) return;
    const newLeague: League = {
      id: crypto.randomUUID(),
      name,
      type,
      teamIds: selectedTeamIds,
      matches: type === "리그전" ? generateMatches(selectedTeamIds) : [],
      createdAt: new Date().toISOString(),
    };
    addLeague(newLeague);
    setName("");
    setSelectedTeamIds([]);
  };

  return {
    name,
    setName,
    type,
    setType,
    selectedTeamIds,
    toggleTeam,
    handleSubmit,
    teams,
  };
};
