import Cell from "./cell";

export default function BoardGame(props) {
  const numCells = props.height * props.width;
  function generateCells(amount) {
    const cells = [];
    for (let i = 0; i < amount; i++) {
      cells.push(<Cell key={i} />);
    }
    return cells;
  }
  return (
    <div className="flex flex-wrap w-auto bg-stone-900 m-5 p-4 pt-9 pb-9 rounded-lg justify-center">
      <div className="flex flex-wrap w-[320px]">{generateCells(numCells)}</div>
    </div>
  );
}
