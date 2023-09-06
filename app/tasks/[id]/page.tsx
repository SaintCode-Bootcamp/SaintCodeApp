type TaskProps = {
  params: {
    id: string;
  };
};
function Task({ params: { id } }: TaskProps) {
  return <h1>Task {id}</h1>;
}

export default Task;
