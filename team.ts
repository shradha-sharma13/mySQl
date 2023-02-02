import { Player } from "./types";
import { Team } from "./types";

export class Teams {
    private team: Team;
    constructor(
        teamId: number,
        teamName: string,
        gameType: number,
        players: Array<Player>
    ) {
        let teamData = {
            id: teamId,
            name: teamName,
            gameType: gameType,
            players: players.map((player) => {
                return {
                    playerId: player.playerId,
                    name: player.name,
                };
            }),
        };
        this.team = teamData;
    }

    getTeams() {
        return this.team;
    }
}
