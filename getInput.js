"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInput = void 0;
const fileHandlers_1 = require("./fileHandlers");
class GetInput {
    constructor() {
        this.file = new fileHandlers_1.FileHandler();
        const inputFilePath = "./TeamsInputJSON.json";
        const input = this.file.readDataFromFile(inputFilePath);
        this.teamsInput = input;
    }
}
exports.GetInput = GetInput;
