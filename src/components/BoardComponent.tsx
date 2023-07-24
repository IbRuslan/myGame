import React from 'react';
import {CellComponent} from "./CellComponent";
import {Board} from "../models/Board";

interface BoardComponentType {
    board: Board;
    setBoard: (board: Board) => void
}

export const BoardComponent: React.FC<BoardComponentType> = ({board, setBoard}) => {
    return (
        <div className={'board'}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent cell={cell} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};