import { GameBoard } from './gameboard';

const Player = class {
    attack(x, y, board) {
        if (!board.attacks.has(`${x}, ${y}`)) {
            board.receiveAttack(x, y)
        }
    }
}