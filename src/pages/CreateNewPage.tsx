import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateTimeInput from "../components/DateTimeInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import NotificationControl from "../components/NotificationControl";
import TodoInput from "../components/TodoInput";
import { INSERT_TASK } from "../graphql/mutations/taskMutations";
import { GET_TASK_LIST } from "../graphql/queries/taskQueries";
import { StatusType } from "../types/taskTypes";

const CreateNewPage = () => {
  const navigate = useNavigate();

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

  const [insertTask, { loading, error }] = useMutation(INSERT_TASK);

  const handleInputChange = (field: string, value: string | Date | boolean) => {
    setTask((prev) => ({ ...prev, [field]: value }));
    setErrorMessage((prev) => ({ ...prev, [field]: false }));
  };

  const handleOnCreateNew = async () => {
    const errors = {
      title: task.title.trim().length === 0,
      text: task.text.trim().length === 0,
    };
    setErrorMessage(errors);

    if (!errors.title && !errors.text) {
      try {
        await insertTask({
          variables: {
            title: task.title,
            text: task.text,
            startDate: task.startDate,
            startTime: task.startTime,
            endDate: task.endDate,
            endTime: task.endTime,
            status: task.status,
            notification: task.isNotiOn,
          },
          refetchQueries: [GET_TASK_LIST],
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (error) return "error";

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
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
      {loading ? (
        <Loading type="button" />
      ) : (
        <Footer actionType="new" onClick={handleOnCreateNew} />
      )}
    </div>
  );
};

export default CreateNewPage;
