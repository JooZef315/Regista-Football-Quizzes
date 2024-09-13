import { PasswordCategory, usePasswordStore } from "@/store/passwordStore";
import { PasswordsItem } from "@/types";
import { toast } from "react-toastify";

type FetchResult = {
  data: [PasswordsItem];
};

export const useGetPasswords = () => {
  const localPasswordsList = usePasswordStore(
    (state) => state.localPasswordsList
  );
  const setPasswordsName = usePasswordStore((state) => state.setPasswordsName);
  const setPasswordCategory = usePasswordStore(
    (state) => state.setPasswordCategory
  );
  const getPasswords = async (passwordCategory: PasswordCategory) => {
    try {
      setPasswordCategory({ category: passwordCategory });
      const response = await fetch("/password/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          existedList: localPasswordsList,
          category: passwordCategory,
        }),
      });

      if (!response.ok) {
        toast.error("Network response was not ok");
        return;
      }

      const result: FetchResult = await response.json();
      setPasswordsName(result.data[0]);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return getPasswords;
};
