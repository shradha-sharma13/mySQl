import {GetInput} from "./getInput";
import {TeamCreation} from "./teamCreation";

const getInput = new GetInput(); 
export const teamCreation = new TeamCreation();
teamCreation.createTeams(getInput.teamsInput);
teamCreation.createTeamList();

