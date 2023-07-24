import {Figure, FigureNames} from "./figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from '../../assets/black-knight.png.png'
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
}