import {Game} from "./types";
import { Player } from "./types";
import { Teams } from "./team";
import {Team} from "./types";
import { TeamsList } from "./teamsList";
import { FileCreation } from "./jsonFileCreation";
import { GameObject } from "./types";


let GameEnum: GameObject = {
    1: 11,
    2: 2,
    3: 1,
};

export class TeamCreation {
    private teamList: Team[];
    private game: undefined | Game;
    private static instance: TeamCreation;
    constructor() {
        this.teamList = [];
    }

    createTeams = (input: Game | undefined) => {
        if (input?.gameType) {
            let index: number = input?.gameType;
            let noOfPlayers: number = GameEnum[index];
            if (
                !input.players.length ||
                input.players.length < noOfPlayers ||
                input.players.length % noOfPlayers !== 0
            ) {
                console.log("invalid input");
                return;
            } else {
                let i = 0;
                let j = 0;
                while (i < input.players.length) {
                    let newTeam = new Teams(
                        j,
                        `Team - ${String.fromCharCode(65 + j)}`,
                        input.gameType,
                        input.players.slice(i, i + noOfPlayers)
                    );
                    let teamData = newTeam.getTeams();
                    this.teamList.push(teamData);
                    i = i + noOfPlayers;
                    j++;
                }
            }
        }
    };

    createTeamList() {
        let list = new TeamsList(this.teamList);
        new FileCreation(list.getTeamsList());
    }
}