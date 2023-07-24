import React from 'react';
import {Cell} from "../models/Cell";

interface CellComponentType {
    cell: Cell
}

export const CellComponent: React.FC<CellComponentType> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};
