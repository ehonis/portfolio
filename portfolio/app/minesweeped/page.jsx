"use client";
import Options from "../components/minesweeped/options";
import BoardGame from "../components/minesweeped/boardgame";

export default function minesweeped() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl p-5">Minesweeped</h1>
      <Options />
      <BoardGame height={6} width={8} numMines={10} />
    </div>
  );
}
