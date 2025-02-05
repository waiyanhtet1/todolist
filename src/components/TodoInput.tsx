const TodoInput = () => {
  return (
    <div className="flex flex-col gap-2 shadow-medium p-3 rounded-sm">
      <input
        type="text"
        name=""
        id=""
        placeholder="Title"
        className="outline-none border-none"
      />
      <hr className="text-neutral-active" />
      <textarea
        name=""
        id=""
        placeholder="Text"
        rows={5}
        className="border-none outline-none"
      ></textarea>
    </div>
  );
};

export default TodoInput;
