import React, {useEffect, useState} from 'react';
import {CellComponent} from "./CellComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";

interface BoardComponentType {
    board: Board;
    setBoard: (board: Board) => void
}

export const BoardComponent: React.FC<BoardComponentType> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function onClick(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell);
        }
    }

    useEffect(()=> {
        highlightCell()
    }, [selectedCell])

    function highlightCell() {
        board.highlightCell(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className={'board'}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent onClick={onClick} cell={cell} key={cell.id}
                                       selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};