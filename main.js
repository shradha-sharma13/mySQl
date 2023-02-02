"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamCreation = void 0;
const getInput_1 = require("./getInput");
const teamCreation_1 = require("./teamCreation");
const getInput = new getInput_1.GetInput();
exports.teamCreation = new teamCreation_1.TeamCreation();
exports.teamCreation.createTeams(getInput.teamsInput);
exports.teamCreation.createTeamList();
