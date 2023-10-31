import { GameBoard } from './gameboard';

const Player = class {

    attack(x, y, board) {
        if (!board.attacks.has(`${x}, ${y}`)) {
            return board.receiveAttack(x, y);
        }
    }

}

const Computer = class {

    attack(board) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        if (!board.attacks.has(`${x}, ${y}`)) {
            return board.receiveAttack(x, y);
        }
        else {
            this.attack(board);
        }
    }
}

export { Player, Computer }