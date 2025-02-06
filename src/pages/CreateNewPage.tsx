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
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:00");
  const [status, setStatus] = useState<StatusType>("todo");
  const [isNotiOn, setIsNotiOn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    title: false,
    text: false,
  });

  const [insertTask, { loading, error }] = useMutation(INSERT_TASK);

  const handleOnCreateNew = async () => {
    if (title.length === 0)
      setErrorMessage((prev) => ({ ...prev, title: true }));
    if (text.length === 0) setErrorMessage((prev) => ({ ...prev, text: true }));
    else {
      try {
        await insertTask({
          variables: {
            title,
            text,
            startDate,
            startTime,
            endDate,
            endTime,
            status,
            notification: isNotiOn,
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

  console.log("startDate", startDate);
  console.log("startTime", startTime);
  console.log("endDate", endDate);
  console.log("endTime", endTime);
  console.log("title", title);
  console.log("text", text);
  console.log("status", status);
  console.log("isNotiOn", isNotiOn);

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="flex flex-col gap-9 px-5 py-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
        <TodoInput
          title={title}
          setTitle={(value) => {
            setTitle(value);
            setErrorMessage((prev) => ({ ...prev, title: false }));
          }}
          text={text}
          setText={(value) => {
            setText(value);
            setErrorMessage((prev) => ({ ...prev, text: false }));
          }}
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
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
          status={status}
          setStatus={setStatus}
        />
        <NotificationControl isNotiOn={isNotiOn} setIsNotiOn={setIsNotiOn} />
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
