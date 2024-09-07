import { create } from "zustand";

type UsersStore = {
  timeIsUp: boolean;
  isSingle: boolean;
  singleName: string;
  team1Name: string;
  team2Name: string;
  winnerModal: boolean;
  playAgainModal: boolean;
  setTeamsNames(teams: { team1: string; team2: string }): void;
  setSingleName(single: { single: string }): void;
  setTimeUp(): void;
  toggleWinnerModal(): void;
  togglePlayAgainModal(): void;
};

export const useUsersStore = create<UsersStore>((set, get) => ({
  timeIsUp: false,
  isSingle: false,
  singleName:
    JSON.parse(localStorage.getItem("single") || "{}")?.single || "user",
  team1Name:
    JSON.parse(localStorage.getItem("teams") || "{}")?.team1 || "team 1",
  team2Name:
    JSON.parse(localStorage.getItem("teams") || "{}")?.team2 || "team 2",
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
  setTimeUp() {
    set({ timeIsUp: true });
  },
  winnerModal: false,
  toggleWinnerModal() {
    set((state) => ({ winnerModal: !state.winnerModal }));
  },
  playAgainModal: false,
  togglePlayAgainModal() {
    set((state) => ({ playAgainModal: !state.playAgainModal }));
  },
}));
