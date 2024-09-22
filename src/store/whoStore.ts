import { create } from "zustand";
import { useUsersStore } from "./usersStore";
import { Clue, PlayersType, Turn, WhoItem, Winner } from "@/types";

type WhoStore = {
  answer: string;
  clues: Clue[];
  localWhosList: string[];
  counter: number;
  suspended: PlayersType | "";
  nextTic: boolean;
  score: number;
  score1: number;
  score2: number;
  strike: number;
  strike1: number;
  strike2: number;
  winner: Winner | "user";
  setQ(Q: WhoItem): void;
  showNextQ(): void;
  addScore(type: PlayersType): void;
  addStrike(type: PlayersType): void;
  setSuspended(team: PlayersType): void;
  reset(): void;
};

export const useWhoStore = create<WhoStore>((set, get) => ({
  answer: "",
  clues: [],
  localWhosList: [],
  counter: 0,
  suspended: "",
  nextTic: false,
  score: 0,
  score1: 0,
  score2: 0,
  strike: 0,
  strike1: 0,
  strike2: 0,
  winner: "draw",
  setQ(Q) {
    const localList: string[] = JSON.parse(
      localStorage.getItem("whoList") || "[]"
    );
    const newLocalList: string[] = [...localList, Q._id];
    set({ localWhosList: [...newLocalList] });
    localStorage.setItem("whoList", JSON.stringify(newLocalList));
    set({
      counter: 0,
      answer: Q.answer,
      clues: [
        {
          clue: Q.clue1,
          show: false,
        },
        {
          clue: Q.clue2,
          show: false,
        },
        {
          clue: Q.clue3,
          show: false,
        },
        {
          clue: Q.clue4,
          show: false,
        },
        {
          clue: Q.clue5,
          show: false,
        },
      ],
      strike: 0,
      strike1: 0,
      strike2: 0,
      suspended: "",
    });
    useUsersStore.getState().setTimeUp(true);
  },
  showNextQ() {
    set((state) => ({
      clues: state.clues.map((q, idx) => {
        if (idx == state.counter) {
          return {
            clue: q.clue,
            show: true,
          };
        }
        return q;
      }),
      counter: state.counter + 1,
    }));
    useUsersStore.getState().setTimeUp(true);
  },
  addScore(type) {
    if (type == "team1") {
      if (get().score1 == 1) {
        set({
          clues: [],
          answer: "",
          winner: "team1",
        });
      }
      set((state) => ({
        score1: state.score1 + 1,
      }));
      useUsersStore.getState().setTimeUp(true);
    } else if (type == "team2") {
      if (get().score2 == 1) {
        set({
          clues: [],
          answer: "",
          winner: "team2",
        });
      }
      set((state) => ({
        score2: state.score2 + 1,
      }));
      useUsersStore.getState().setTimeUp(true);
    } else {
      if (get().score == 1) {
        set({
          clues: [],
          answer: "",
          winner: "user",
        });
      }
      set((state) => ({
        score: state.score + 1,
      }));
      useUsersStore.getState().setTimeUp(true);
    }
  },
  addStrike(type) {
    if (type == "team1") {
      if (get().strike1 == 2) {
        set({
          clues: [],
          answer: "",
          suspended: "team1",
        });
      }
      set((state) => ({
        strike1: state.strike1 + 1,
      }));
      useUsersStore.getState().setTimeUp(true);
    } else if (type == "team2") {
      if (get().strike2 == 2) {
        set({
          clues: [],
          answer: "",
          suspended: "team2",
        });
      }
      set((state) => ({
        strike2: state.strike2 + 1,
      }));
      useUsersStore.getState().setTimeUp(true);
    } else {
      if (get().strike == 2) {
        set({
          clues: [],
          answer: "",
        });
      }
      set((state) => ({
        strike: state.strike + 1,
      }));
      useUsersStore.getState().setTimeUp(true);
    }
  },
  setSuspended(team) {
    if (useUsersStore.getState().isSingle) {
      set({
        suspended: team,
      });
    } else {
      if (team == "") {
        get().nextTic
          ? set({
              nextTic: false,
            })
          : set({
              suspended: team,
            });
      } else {
        set({
          suspended: team,
          nextTic: true,
        });
      }
    }
  },
  reset() {
    set({
      answer: "",
      clues: [],
      score: 0,
      score1: 0,
      score2: 0,
      strike: 0,
      strike1: 0,
      strike2: 0,
      winner: "draw",
    });
  },
}));
