import { api, Statistics as ApiStatistics } from "@/utils/api";
import { formatUnixTime } from "@/utils/formatUnixTime";
import { useEffect, useState } from "react";

export const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<ApiStatistics | string>(
    ">w< Loading...",
  );

  useEffect(() => {
    (async () => {
      try {
        setStatistics(await api.statistics());
      } catch {
        setStatistics(">~< I can't load statistics, refresh maybe..?");
      }
    })();
  }, []);

  return (
    <div className="bg-black bg-opacity-[50%] dark:bg-white dark:bg-opacity-[3%] w-full p-3 px-8 rounded-2xl flex items-center justify-between">
      {typeof statistics === "string" ? (
        <p className="text-white text-lg">{statistics}</p>
      ) : (
        <>
          <p className="text-white text-lg">
            <span style={{ fontWeight: 465 }} className="mr-1">
              Last message:
            </span>

            {formatUnixTime(statistics.lastMessage)}
          </p>

          <p className="text-white text-lg">
            <span style={{ fontWeight: 465 }} className="mr-1">
              Last database update:
            </span>

            {formatUnixTime(statistics.lastDatabaseUpdate)}
          </p>

          <p className="text-white text-lg">
            <span style={{ fontWeight: 465 }} className="mr-1">
              Saved users:
            </span>

            {statistics.savedUsers}
          </p>

          <p className="text-white text-lg">
            <span style={{ fontWeight: 465 }} className="mr-1">
              Saved messages:
            </span>

            {statistics.savedMessages}
          </p>
        </>
      )}
    </div>
  );
};

export default Statistics;
