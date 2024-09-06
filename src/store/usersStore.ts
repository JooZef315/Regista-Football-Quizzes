import { create } from "zustand";

type UsersStore = {
  isSingle: boolean;
  singleName: string;
  team1Name: string;
  team2Name: string;
  setTeamsNames(teams: { team1: string; team2: string }): void;
  setSingleName(single: { single: string }): void;
};

export const useUsersStore = create<UsersStore>((set, get) => ({
  isSingle: false,
  singleName:
    JSON.parse(localStorage.getItem("single") || "{}")?.single || "user",
  team1Name:
    JSON.parse(localStorage.getItem("teams") || "{}")?.team1 || "team 1",
  team2Name:
    JSON.parse(localStorage.getItem("teams") || "{}")?.team2 || "team 2",
  setTeamsNames(teams) {
    localStorage.setItem("teams", JSON.stringify(teams));
    set({ team1Name: teams.team1, team2Name: teams.team2, isSingle: false });
  },
  setSingleName(single) {
    localStorage.setItem("single", JSON.stringify(single));
    set({ singleName: single.single, isSingle: true });
  },
}));
