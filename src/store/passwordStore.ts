import { create } from "zustand";
import { useUsersStore } from "./usersStore";
import { PasswordsItem, Turn, Winner } from "@/types";

export type PasswordCategory = "محلي" | "عالمي" | "mix";

type PasswordStore = {
  passwordsName: string;
  deserveDouble: boolean;
  localPasswordsList: string[];
  passwordCategory: PasswordCategory;
  winner: Winner;
  score1: number;
  score2: number;
  firstTurn: Turn;
  turn: Turn;
  showName: boolean;
  setPasswordsName(names: PasswordsItem): void;
  setDeserveDouble(val: boolean): void;
  setPasswordCategory(category: { category: PasswordCategory }): void;
  addToScore1(): void;
  addToScore2(): void;
  toggleTurn(): void;
  setShowName(val: boolean): void;
  reset(): void;
};

export const usePasswordStore = create<PasswordStore>((set, get) => ({
  passwordsName: "",
  deserveDouble: true,
  localPasswordsList: [],
  passwordCategory: "mix",
  winner: "draw",
  score1: 0,
  score2: 0,
  firstTurn: "team1",
  turn: "team1",
  showName: false,
  setPasswordsName(player) {
    const localList: string[] = JSON.parse(
      localStorage.getItem("passwordsList") || "[]"
    );
    if (player.playerName) {
      const newLocalList: string[] = [...localList, player._id];
      set({ localPasswordsList: [...newLocalList] });
      localStorage.setItem("passwordsList", JSON.stringify(newLocalList));
    } else {
      set({ localPasswordsList: [...localList] });
      localStorage.setItem("passwordsList", JSON.stringify(localList));
    }
    set({ passwordsName: player.playerName });
  },
  setDeserveDouble(val) {
    set({ deserveDouble: val });
  },
  setPasswordCategory(category) {
    localStorage.setItem("passwordCategory", JSON.stringify(category));
    set({ passwordCategory: category.category });
  },
  addToScore1() {
    if (get().score1 == 4 || (get().score1 == 3 && get().deserveDouble)) {
      set({
        passwordsName: "",
        winner: "team1",
      });
    }
    set((state) => ({
      score1: state.deserveDouble ? state.score1 + 2 : state.score1 + 1,
      turn: state.firstTurn == "team1" ? "team2" : "team1",
      firstTurn: state.firstTurn == "team1" ? "team2" : "team1",
    }));
    useUsersStore.getState().setTimeUp(true);
  },
  addToScore2() {
    if (get().score2 == 4 || (get().score2 == 3 && get().deserveDouble)) {
      set({
        passwordsName: "",
        winner: "team2",
      });
    }
    set((state) => ({
      score2: state.deserveDouble ? state.score2 + 2 : state.score2 + 1,
      turn: state.firstTurn == "team1" ? "team2" : "team1",
      firstTurn: state.firstTurn == "team1" ? "team2" : "team1",
    }));
    useUsersStore.getState().setTimeUp(true);
  },
  toggleTurn() {
    set((state) => ({ turn: state.turn == "team1" ? "team2" : "team1" }));
  },
  setShowName(val) {
    set({ showName: val });
  },
  reset() {
    set({
      passwordsName: "",
      deserveDouble: true,
      turn: "team1",
      winner: "draw",
      score1: 0,
      score2: 0,
      showName: false,
    });
  },
}));
