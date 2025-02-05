import TodoCard from "./TodoCard";

const CardList = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-neutral-50">
      {Array.from({ length: 15 }).map((_, i) => (
        <TodoCard
          key={i}
          link={i.toString()}
          variant="todo"
          title={`Marketing Campign UIs ${i + 1}`}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim"
        />
      ))}
    </div>
  );
};

export default CardList;
