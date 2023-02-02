import * as fs from "fs";
import {Team} from "./types"
import { FileHandler } from './fileHandlers';

export interface TeamList {
    teams: Array<Team>;
    total: number;
}

export class FileCreation {
    file = new FileHandler();
    constructor(teamList: TeamList) {
        const teamsOutputFilePath = "./teamsOutputFile.json";
        const data = teamList;

        this.file.writeDataOnFile(teamsOutputFilePath, data);

            console.log(`The file was saved at ${teamsOutputFilePath}`);
        };
    }