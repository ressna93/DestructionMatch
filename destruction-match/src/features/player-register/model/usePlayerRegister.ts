import { useState } from "react";
import { Player, Position } from "../../../entities/player/types/player";
import { usePlayerStore } from "../../../entities/player/model/playerStore";
import { POSITIONS } from "../../../shared/config/constants";

const initialForm = {
  nickname: "",
  position: POSITIONS[0] as Position,
  score: 0,
  tier: "",
};

export const usePlayerRegister = () => {
  const [form, setForm] = useState(initialForm);
  const addPlayer = usePlayerStore((s) => s.addPlayer);

  const handleChange = (
    field: keyof typeof initialForm,
    value: string | number,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.nickname.trim()) return;
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      ...form,
    };
    addPlayer(newPlayer);
    setForm(initialForm);
  };

  return { form, handleChange, handleSubmit };
};
