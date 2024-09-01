import { Document } from "mongoose";

type TPassword = Document & {
  playerName: string;
  level: "سهل" | "متوسط" | "صعب";
  category: "محلي" | "عالمي";
};

type TWhoAmI = Document & {
  answer: string;
  clue1: string;
  clue2: string;
  clue3: string;
  clue4: string;
  clue5: string;
};

type TRiskQuestion = {
  question: string;
  choices: [string, string, string, string];
};

type TRiskCategory = {
  categoryName: string;
  Q5: TRiskQuestion;
  Ans5: string;
  Q10: TRiskQuestion;
  Ans10: string;
  Q20: TRiskQuestion;
  Ans20: string;
  Q40: TRiskQuestion;
  Ans40: string;
};

type TRisk = Document & {
  doubleQ: string;
  category1: TRiskCategory;
  category2: TRiskCategory;
  category3: TRiskCategory;
  category4: TRiskCategory;
};

type TFeedBack = Document & {
  name?: string;
  message: string;
};
