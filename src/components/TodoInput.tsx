type TodoInputProps = {
  title: string;
  setTitle: (value: string) => void;
  text: string;
  setText: (value: string) => void;
};

const TodoInput = ({ title, text, setTitle, setText }: TodoInputProps) => {
  return (
    <div className="flex flex-col gap-2 shadow-medium p-3 rounded-sm">
      <input
        type="text"
        name=""
        id=""
        placeholder="Title"
        className="outline-none border-none"
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr className="text-neutral-active" />
      <textarea
        name=""
        id=""
        placeholder="Text"
        rows={5}
        className="border-none outline-none"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TodoInput;
