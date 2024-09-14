import { create } from "zustand";
import { usePasswordStore } from "./passwordStore";

type UsersStore = {
  timeIsUp: boolean;
  timeIsRunning: boolean;
  isSingle: boolean;
  singleName: string;
  team1Name: string;
  team2Name: string;
  setTeamsNames(teams: { team1: string; team2: string }): void;
  setSingleName(single: { single: string }): void;
  setTimeUp(val: boolean): void;
  setTimerunning(val: boolean): void;
  resetGames(): void;
};

export const useUsersStore = create<UsersStore>((set, get) => ({
  timeIsUp: false,
  timeIsRunning: false,
  isSingle: false,
  singleName: "user",
  team1Name: "team 1",
  team2Name: "team 2",
  setTeamsNames(teams) {
    localStorage.setItem("teams", JSON.stringify(teams));
    set({
      team1Name: teams.team1,
      team2Name: teams.team2,
      isSingle: false,
      timeIsUp: false,
    });
  },
  setSingleName(single) {
    localStorage.setItem("single", JSON.stringify(single));
    set({ singleName: single.single, isSingle: true, timeIsUp: false });
  },
  setTimeUp(val) {
    if (val) {
      usePasswordStore.getState().setDeserveDouble(false);
    }
    set({ timeIsUp: val });
  },
  setTimerunning(val) {
    set({ timeIsRunning: val });
  },
  resetGames() {
    usePasswordStore.getState().reset();
    set({ timeIsUp: true });
  },
}));
