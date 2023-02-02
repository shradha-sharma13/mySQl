"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreation = void 0;
const fileHandlers_1 = require("./fileHandlers");
class FileCreation {
    constructor(teamList) {
        this.file = new fileHandlers_1.FileHandler();
        const teamsOutputFilePath = "./teamsOutputFile.json";
        const data = teamList;
        this.file.writeDataOnFile(teamsOutputFilePath, data);
        console.log(`The file was saved at ${teamsOutputFilePath}`);
    }
    ;
}
exports.FileCreation = FileCreation;
