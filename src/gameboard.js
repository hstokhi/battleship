import { Ship } from './ship.js';

const GameBoard = class {

    constructor() {
        this.attacks = new Set();
        this.board = [];
        this.ships = [5,4,3,3,2];
    }

    buildBoard() {
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                row.push(null);
            }
            this.board.push(row);
        }
        return this.board;
    }

    placeShip(length, x, y, direction) {
        const ship = new Ship(length);

        const isValid = (n) => {
            if ((n+(length-1)) < 10) { return true }
            else { return false }
        }

        if (direction === 'V' && isValid(y)) {
            this.board[y][x] = ship;
            let i = 1;
            while (i < length) {
                this.board[y+i][x] = ship;
                i++;
            }
        }
        if (direction === 'H' && isValid(x)) {
            this.board[x][y] = ship;
            let i = 1;
            while (i < length) {
                this.board[y][x+i] = ship;
                i++;
            }
        }

        return this.board;
    }

    receiveAttack(x, y) {
        if (this.board[y][x] !== null) {this.board[y][x].hit()}
        this.attacks.add(`${x}, ${y}`);

        return this.board;
    } 

}

export { GameBoard }