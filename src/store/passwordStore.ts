import { create } from "zustand";
import { useUsersStore } from "./usersStore";
import { PasswordsItem, PasswordsList } from "@/types";

export type PasswordCategory = "محلي" | "عالمي" | "mix";
type Turn = "team1" | "team2";

type Clue = {
  team: Turn;
  clue: string;
};

type PasswordStore = {
  passwordsList: PasswordsList;
  localPasswordsList: string[];
  passwordCategory: PasswordCategory;
  winner: Turn | "draw";
  score1: number;
  score2: number;
  turn: Turn;
  counter: number;
  clues: Clue[];
  setPasswordsList(names: PasswordsList): void;
  setPasswordCategory(category: { category: PasswordCategory }): void;
  addToScore1(): void;
  addToScore2(): void;
  addClue(clue: Clue): void;
  toggleTurn(): void;
  reset(): void;
};

export const usePasswordStore = create<PasswordStore>((set, get) => ({
  passwordsList: [],
  localPasswordsList: [],
  passwordCategory: "mix",
  winner: "draw",
  score1: 0,
  score2: 0,
  turn: "team1",
  counter: 0,
  clues: [],
  setPasswordsList(list) {
    const localList: string[] = JSON.parse(
      localStorage.getItem("passwordsList") || "[]"
    );
    if (list.length) {
      const newLocalList: string[] = [
        ...localList,
        ...list.map((item) => item._id as string),
      ];
      set({ localPasswordsList: [...newLocalList] });
      localStorage.setItem("passwordsList", JSON.stringify(newLocalList));
    } else {
      set({ localPasswordsList: [...localList] });
      localStorage.setItem("passwordsList", JSON.stringify(localList));
    }
    set({ passwordsList: [...list], counter: 0 });
  },
  setPasswordCategory(category) {
    localStorage.setItem("passwordCategory", JSON.stringify(category));
    set({ passwordCategory: category.category });
  },
  addToScore1() {
    if (get().score1 == 4) {
      set((state) => ({
        passwordsList: [],
        score1: state.score1 + 1,
        winner: "team1",
        clues: [],
        counter: 0,
      }));
    } else {
      set((state) => ({
        score1: state.score1 + 1,
        counter: state.counter + 1,
      }));
    }
    useUsersStore.getState().setTimeUp(true);
  },
  addToScore2() {
    if (get().score2 == 4) {
      set((state) => ({
        passwordsList: [],
        score2: state.score2 + 1,
        winner: "team2",
        clues: [],
        counter: 0,
      }));
    } else {
      set((state) => ({
        score2: state.score2 + 1,
        counter: state.counter + 1,
      }));
    }
    useUsersStore.getState().setTimeUp(true);
  },
  addClue(clue) {
    set((state) => ({ clues: [...state.clues, clue] }));
  },
  toggleTurn() {
    set((state) => ({ turn: state.turn == "team1" ? "team2" : "team1" }));
  },
  reset() {
    set({
      passwordsList: [],
      turn: "team1",
      winner: "draw",
      score1: 0,
      score2: 0,
      clues: [],
      counter: 0,
    });
  },
}));
