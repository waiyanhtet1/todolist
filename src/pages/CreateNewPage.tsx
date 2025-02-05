import DateTimeInput from "../components/DateTimeInput";
import Header from "../components/Header";
import TodoInput from "../components/TodoInput";

const CreateNewPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-9 px-5 py-4 bg-neutral-50">
        <TodoInput />
        <DateTimeInput />
      </div>
    </>
  );
};

export default CreateNewPage;
