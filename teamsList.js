"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsList = void 0;
class TeamsList {
    constructor(teams) {
        this.teamList = {
            teams: teams,
            total: teams.length,
        };
    }
    getTeamsList() {
        return this.teamList;
    }
}
exports.TeamsList = TeamsList;
