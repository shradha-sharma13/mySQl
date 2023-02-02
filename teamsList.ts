import { Player } from "./types";
import { TeamList } from "./types";
import { Team } from "./types";

export class TeamsList {
    private teamList: TeamList;

    constructor(teams: Array<Team>) {
        this.teamList = {
            teams: teams,
            total: teams.length,
        };
    }

    getTeamsList() {
        return this.teamList;
    }
}