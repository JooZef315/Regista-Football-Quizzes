import { PasswordCategory, usePasswordStore } from "@/store/passwordStore";
import { PasswordsList } from "@/types";
import { toast } from "react-toastify";

type FetchResult = {
  data: PasswordsList;
};

export const useGetPasswords = () => {
  const localPasswordsList = usePasswordStore(
    (state) => state.localPasswordsList
  );
  const setPasswordsList = usePasswordStore((state) => state.setPasswordsList);
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
      setPasswordsList(result.data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return getPasswords;
};
