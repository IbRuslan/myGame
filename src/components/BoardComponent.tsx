import React, {useEffect, useState} from 'react';
import {CellComponent} from "./CellComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardComponentType {
    board: Board;
    setBoard: (board: Board) => void
    currentPlayer: Player | null;
    swapPlayer: () => void
}

export const BoardComponent: React.FC<BoardComponentType> = ({currentPlayer, swapPlayer, board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function onClick(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        } else {
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
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
        <div>
            <h3>Текущий игрок {currentPlayer?.color}</h3>
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
        </div>
    );
};