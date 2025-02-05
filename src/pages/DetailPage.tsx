import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateTimeInput from "../components/DateTimeInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import NotificationControl from "../components/NotificationControl";
import { GET_SINGLE_TASK } from "../graphql/queries/taskQueries";
import { TaskType } from "../types/taskTypes";

const DetailPage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SINGLE_TASK, {
    variables: { id },
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [detailData, setDetailData] = useState<TaskType | null>(null);

  useEffect(() => {
    if (id) setIsDisabled(true);
  }, [id]);

  const handleOnDelete = () => {
    console.log("delete todo");
  };
  useEffect(() => {
    if (data) {
      setDetailData(data.task_by_pk);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return "error";

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />

      <div className="flex flex-col gap-4 p-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
        <p className="text-lg font-medium">{detailData?.title}</p>
        <DateTimeInput
          inputStartDate={detailData?.startDate}
          inputEndDate={detailData?.endDate}
          isDisabled={isDisabled}
        />
        <NotificationControl isDisabled={isDisabled} />

        <p className="shadow-medium px-5 py-3 rounded-sm text-neutral-weak text-xs">
          {detailData?.text}
        </p>
      </div>

      <Footer actionType="detail" onClick={handleOnDelete} />
    </div>
  );
};

export default DetailPage;
