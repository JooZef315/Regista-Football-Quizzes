import { useWhoStore } from "@/store/whoStore";
import { WhoItem } from "@/types";
import { toast } from "react-toastify";

type FetchResult = {
  data: [WhoItem];
};

export const useGetWho = () => {
  const localWhosList = useWhoStore((state) => state.localWhosList);
  const setQ = useWhoStore((state) => state.setQ);

  const getWho = async () => {
    try {
      const response = await fetch("/whoAmI/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          existedList: localWhosList,
        }),
      });

      if (!response.ok) {
        toast.error("Network response was not ok");
        return;
      }
      const result: FetchResult = await response.json();
      setQ(result.data[0]);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return getWho;
};
