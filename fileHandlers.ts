import * as fs from 'fs';
import { TeamList } from './types';

export class FileHandler {
    readDataFromFile(filePath: string) {
      try {
        let json = fs.readFileSync(filePath, "utf8");
        return JSON.parse(json);
      } catch (error) {
        console.log(error);
      }
    }
    writeDataOnFile( filePath: string, json: TeamList) {
      try {
        fs.writeFileSync(filePath, JSON.stringify(json));
      } catch (error) {
        console.log(error);
      }
      
    }
  }