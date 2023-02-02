"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreation = void 0;
const team_1 = require("./team");
const teamsList_1 = require("./teamsList");
const jsonFileCreation_1 = require("./jsonFileCreation");
let GameEnum = {
    1: 11,
    2: 2,
    3: 1,
};
class TeamCreation {
    constructor() {
        this.createTeams = (input) => {
            if (input === null || input === void 0 ? void 0 : input.gameType) {
                let index = input === null || input === void 0 ? void 0 : input.gameType;
                let noOfPlayers = GameEnum[index];
                if (!input.players.length ||
                    input.players.length < noOfPlayers ||
                    input.players.length % noOfPlayers !== 0) {
                    console.log("invalid input");
                    return;
                }
                else {
                    let i = 0;
                    let j = 0;
                    while (i < input.players.length) {
                        let newTeam = new team_1.Teams(j, `Team - ${String.fromCharCode(65 + j)}`, input.gameType, input.players.slice(i, i + noOfPlayers));
                        let teamData = newTeam.getTeams();
                        this.teamList.push(teamData);
                        i = i + noOfPlayers;
                        j++;
                    }
                }
            }
        };
        this.teamList = [];
    }
    createTeamList() {
        let list = new teamsList_1.TeamsList(this.teamList);
        new jsonFileCreation_1.FileCreation(list.getTeamsList());
    }
}
exports.TeamCreation = TeamCreation;
