import { TPassword } from "./models/passwordModel";
import { TWhoAmI } from "./models/whoAmIModel";

type Turn = "team1" | "team2";

type Winner = "team1" | "team2" | "draw";

type PlayersType = "team1" | "team2" | "single" | "";

type PasswordsItem = TPassword & {
  _id: mongoose.Types.ObjectId;
};

type PasswordsList = PasswordsItem[];

type WhoItem = TWhoAmI & {
  _id: mongoose.Types.ObjectId;
};

type WhoList = WhoItem[];

type Clue = {
  clue: string;
  show: boolean;
};
