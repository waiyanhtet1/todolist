import DateTimeInput from "../components/DateTimeInput";
import Header from "../components/Header";
import NotificationControl from "../components/NotificationControl";
import TodoInput from "../components/TodoInput";

const CreateNewPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="flex flex-col gap-9 px-5 py-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
        <TodoInput />
        <DateTimeInput />
        <NotificationControl />
      </div>
      <div className="absolute bottom-0 w-full h-[55px] bg-base-white text-primary flex items-center justify-center border-t border-border-natural cursor-pointer hover:bg-border-natural transition duration-300 ease-in-out">
        Add Task
      </div>
    </div>
  );
};

export default CreateNewPage;
