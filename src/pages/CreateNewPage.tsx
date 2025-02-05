import DateTimeInput from "../components/DateTimeInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotificationControl from "../components/NotificationControl";
import TodoInput from "../components/TodoInput";

const CreateNewPage = () => {
  const handleOnCreateNew = () => {
    console.log("create new todo");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="flex flex-col gap-9 px-5 py-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
        <TodoInput />
        <DateTimeInput />
        <NotificationControl />
      </div>
      <Footer actionType="new" onClick={handleOnCreateNew} />
    </div>
  );
};

export default CreateNewPage;
