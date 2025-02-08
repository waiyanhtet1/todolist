import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateTimeInput from "../components/DateTimeInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import NotificationControl from "../components/NotificationControl";
import TodoInput from "../components/TodoInput";
import { UPDATE_TASK } from "../graphql/mutations/taskMutations";
import { GET_SINGLE_TASK, GET_TASK_LIST } from "../graphql/queries/taskQueries";
import useUserInfo from "../hooks/useUserInfo";
import { StatusType } from "../types/taskTypes";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userId, error: userError } = useUserInfo();

  const [task, setTask] = useState({
    title: "",
    text: "",
    startDate: new Date(),
    endDate: new Date(),
    startTime: "10:00",
    endTime: "10:00",
    status: "todo" as StatusType,
    isNotiOn: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    title: false,
    text: false,
  });

  const { loading, error, data } = useQuery(GET_SINGLE_TASK, {
    fetchPolicy: "network-only",
    variables: { id },
  });
  const [updateTask, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_TASK);

  useEffect(() => {
    if (data?.task_by_pk) {
      const {
        title,
        text,
        startDate,
        endDate,
        startTime,
        endTime,
        status,
        notification,
      } = data.task_by_pk;

      setTask({
        title,
        text,
        startDate,
        endDate,
        startTime,
        endTime,
        status,
        isNotiOn: notification,
      });
    }
  }, [data]);

  const handleInputChange = (field: string, value: string | Date | boolean) => {
    setTask((prev) => ({ ...prev, [field]: value }));
    setErrorMessage((prev) => ({ ...prev, [field]: false }));
  };

  const handleOnUpdate = async () => {
    const errors = {
      title: task.title.trim().length === 0,
      text: task.text.trim().length === 0,
    };

    setErrorMessage(errors);

    if (!errors.title && !errors.text) {
      await updateTask({
        variables: {
          id,
          title: task.title,
          text: task.text,
          startDate: task.startDate,
          startTime: task.startTime,
          endDate: task.endDate,
          endTime: task.endTime,
          status: task.status,
          notification: task.isNotiOn,
          user_id: userId,
        },
        refetchQueries: [GET_TASK_LIST],
      });
      navigate(-1);
    }
  };

  if (error || updateError || userError) return "Error";

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-9 px-5 py-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
          <TodoInput
            title={task.title}
            setTitle={(value) => handleInputChange("title", value)}
            text={task.text}
            setText={(value) => handleInputChange("text", value)}
          />
          <div className="mt-[-30px]">
            {errorMessage.title && (
              <p className="error-message">Title is required!</p>
            )}
            {errorMessage.text && (
              <p className="error-message">Text is required!</p>
            )}
          </div>

          <DateTimeInput
            startDate={task.startDate}
            setStartDate={(value) => handleInputChange("startDate", value)}
            endDate={task.endDate}
            setEndDate={(value) => handleInputChange("endDate", value)}
            startTime={task.startTime}
            setStartTime={(value) => handleInputChange("startTime", value)}
            endTime={task.endTime}
            setEndTime={(value) => handleInputChange("endTime", value)}
            status={task.status}
            setStatus={(value) => handleInputChange("status", value)}
          />

          <NotificationControl
            isNotiOn={task.isNotiOn}
            setIsNotiOn={(value) => handleInputChange("isNotiOn", value)}
          />
        </div>
      )}
      {updateLoading ? (
        <Loading type="button" />
      ) : (
        <Footer actionType="update" onClick={handleOnUpdate} />
      )}
    </div>
  );
};

export default UpdatePage;
