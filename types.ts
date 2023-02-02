export interface Player {
    playerId: number;
    name: string;
}

export interface Game {
    gameType: number;
    players: Array<Player>
}

export interface Team {
    id: number;
    name: string;
    gameType: number;
    players: Array<Player>;
}

export interface TeamList {
    teams: Array<Team>;
    total: number;
}

export interface GameObject {
    [key: number]: number;
    1: number;
    2: number;
    3: number;
}