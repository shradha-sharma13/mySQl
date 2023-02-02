import * as fs from 'fs';
import { Game } from './types';
import { FileHandler } from './fileHandlers';

export class GetInput {
    teamsInput: Game | undefined;
    file = new FileHandler();
    constructor() {
        const inputFilePath = "./TeamsInputJSON.json";
        const input = this.file.readDataFromFile(inputFilePath);
        this.teamsInput = input;
    }
}
