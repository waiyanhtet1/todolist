import TodoCard from "./TodoCard";

const CardList = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-neutral-50">
      {Array.from({ length: 10 }).map((_, i) => (
        <TodoCard
          key={i}
          variant="todo"
          title={`Marketing Campign UIs ${i + 1}`}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim"
        />
      ))}
      {/* <TodoCard
        variant="todo"
        title="Marketing Campign UIs"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim"
      />
      <TodoCard variant="processing" title="title" text="text" />

      <TodoCard variant="complete" title="title" text="text" /> */}
    </div>
  );
};

export default CardList;
