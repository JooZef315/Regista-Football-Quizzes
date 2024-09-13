import { create } from "zustand";
import { useUsersStore } from "./usersStore";
import { PasswordsItem } from "@/types";

export type PasswordCategory = "محلي" | "عالمي" | "mix";
type Turn = "team1" | "team2";

type PasswordStore = {
  passwordsName: string;
  localPasswordsList: string[];
  passwordCategory: PasswordCategory;
  winner: Turn | "draw";
  score1: number;
  score2: number;
  turn: Turn;
  showName: boolean;
  setPasswordsName(names: PasswordsItem): void;
  setPasswordCategory(category: { category: PasswordCategory }): void;
  addToScore1(): void;
  addToScore2(): void;
  toggleTurn(): void;
  setShowName(val: boolean): void;
  reset(): void;
};

export const usePasswordStore = create<PasswordStore>((set, get) => ({
  passwordsName: "",
  localPasswordsList: [],
  passwordCategory: "mix",
  winner: "draw",
  score1: 0,
  score2: 0,
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
  setPasswordCategory(category) {
    localStorage.setItem("passwordCategory", JSON.stringify(category));
    set({ passwordCategory: category.category });
  },
  addToScore1() {
    if (get().score1 == 4) {
      set((state) => ({
        passwordsName: "",
        score1: state.score1 + 1,
        winner: "team1",
      }));
    } else {
      set((state) => ({
        score1: state.score1 + 1,
      }));
    }
    useUsersStore.getState().setTimeUp(true);
  },
  addToScore2() {
    if (get().score2 == 4) {
      set((state) => ({
        passwordsName: "",
        score2: state.score2 + 1,
        winner: "team2",
      }));
    } else {
      set((state) => ({
        score2: state.score2 + 1,
      }));
    }
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
      turn: "team1",
      winner: "draw",
      score1: 0,
      score2: 0,
    });
  },
}));
