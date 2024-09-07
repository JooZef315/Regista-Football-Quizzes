import { create } from "zustand";

type Turn = "team1" | "team2";

type Clue = {
  team: Turn;
  clue: string;
};

type PasswordStore = {
  passwordNames: string[];
  winner: Turn | "draw";
  score1: number;
  score2: number;
  turn: Turn;
  clues: Clue[];
  setPasswordNames(names: string[]): void;
  addToScore1(): void;
  addToScore2(): void;
  addClue(clue: Clue): void;
  toggleTurn(): void;
};

export const usePasswordStore = create<PasswordStore>((set, get) => ({
  passwordNames: [],
  winner: "draw",
  score1: 0,
  score2: 0,
  turn: "team1",
  clues: [],
  setPasswordNames(names) {
    set({ passwordNames: names });
  },
  addToScore1() {
    if (get().score1 == 4) {
      set((state) => ({
        score1: state.score1 + 1,
        winner: "team1",
        clues: [],
      }));
    } else {
      set((state) => ({ score1: state.score1 + 1 }));
    }
  },
  addToScore2() {
    if (get().score2 == 4) {
      set((state) => ({
        score2: state.score2 + 1,
        winner: "team2",
        clues: [],
      }));
    } else {
      set((state) => ({ score2: state.score2 + 1 }));
    }
  },
  addClue(clue) {
    set((state) => ({ clues: [...state.clues, clue] }));
  },
  toggleTurn() {
    set((state) => ({ turn: state.turn == "team1" ? "team2" : "team1" }));
  },
}));
