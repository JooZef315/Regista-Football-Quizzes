import { TPassword } from "./models/passwordModel";

type PasswordsItem = TPassword & {
  _id: mongoose.Types.ObjectId;
};

type PasswordsList = PasswordsItem[];
