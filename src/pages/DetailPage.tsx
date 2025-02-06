import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateTimeInput from "../components/DateTimeInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import NotificationControl from "../components/NotificationControl";
import { DELETE_TASK } from "../graphql/mutations/taskMutations";
import { GET_SINGLE_TASK, GET_TASK_LIST } from "../graphql/queries/taskQueries";
import { StatusType, TaskType } from "../types/taskTypes";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_SINGLE_TASK, {
    fetchPolicy: "network-only",
    variables: { id },
  });
  const [deleteTask, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_TASK);

  const [isDisabled, setIsDisabled] = useState(false);
  const [detailData, setDetailData] = useState<TaskType | null>(null);

  useEffect(() => {
    if (id) setIsDisabled(true);
    if (data) setDetailData(data.task_by_pk);
  }, [data, id]);

  const handleOnDelete = async () => {
    await deleteTask({ variables: { id }, refetchQueries: [GET_TASK_LIST] });
    navigate("/");
  };

  if (error || deleteError) return "error";

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col gap-4 p-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
            <p className="text-lg font-medium">{detailData?.title}</p>
            <DateTimeInput
              startDate={detailData?.startDate as Date}
              endDate={detailData?.endDate as Date}
              startTime={detailData?.startTime as string}
              endTime={detailData?.endTime as string}
              status={detailData?.status as StatusType}
              isDisabled={isDisabled}
            />
            <NotificationControl
              isDisabled={isDisabled}
              isNotiOn={detailData?.notification as boolean}
            />

            <p className="shadow-medium px-5 py-3 rounded-sm text-neutral-weak text-xs">
              {detailData?.text}
            </p>
          </div>

          {deleteLoading ? (
            <Loading type="button" />
          ) : (
            <Footer actionType="detail" onClick={handleOnDelete} />
          )}
        </>
      )}
    </div>
  );
};

export default DetailPage;
