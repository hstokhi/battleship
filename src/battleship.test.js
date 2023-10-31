import { Ship } from './ship';
import { GameBoard } from './gameboard';
import { Player, Computer } from './player';

//Ship object
test('Ship: hit()', () => {
    const hitTest = new Ship(4);
    hitTest.hits = 3;

    expect(hitTest.hit()).toBe(4);
})

test('Ship: isSunk()', () => {
    const sunkTest = new Ship(3);
    sunkTest.hits = 3;

    expect(sunkTest.isSunk()).toBe(true);
})

//GameBoard object

test('GameBoard: buildBoard()', () => {
    const board = new GameBoard();

    expect(board.buildBoard()).toStrictEqual(
        [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ]
    )
})

test('GameBoard: placeShip()', () => {
    const board = new GameBoard();
    board.buildBoard();
    const ship = new Ship(3);

    expect(board.placeShip(3, 4, 3, 'V')).toStrictEqual(
        [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, ship, null, null, null, null, null],
            [null, null, null, null, ship, null, null, null, null, null],
            [null, null, null, null, ship, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ]
    )
})

test('GameBoard: receiveAttack(), HIT', () => {
    const board = new GameBoard();
    board.buildBoard();
    board.placeShip(4, 0, 0, 'H');

    const ship = new Ship(4);
    ship.hit();

    expect(board.receiveAttack(0,0)).toStrictEqual(
        [
            [ship, ship, ship, ship, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ]
    )
});

test('GameBoard: receiveAttack(), MISS', () => {
    const board = new GameBoard();
    board.buildBoard();
    board.placeShip(4, 0, 0, 'H');

    const ship = new Ship(4);

    expect(board.receiveAttack(4, 0)).toStrictEqual(
        [
            [ship, ship, ship, ship, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ]
    )
})

//Player object

test('Player: attack()', () => {
    const board = new GameBoard();
    board.buildBoard();
    board.placeShip(4, 0, 0, 'H');


    const ship = new Ship(4);
    ship.hit();

    const player1 = new Player();

    expect(player1.attack(0,0, board)).toStrictEqual(
        [
            [ship, ship, ship, ship, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ]
    )
})