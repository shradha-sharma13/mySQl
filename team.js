"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
class Teams {
    constructor(teamId, teamName, gameType, players) {
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
exports.Teams = Teams;
