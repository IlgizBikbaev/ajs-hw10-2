import { GameSaving } from './gamesaving.js';
import read from './reader.js';
import json from './parser.js';


export default class GameSavingLoader {
    static async load() {
            const readData =await read();
            const jsonData =await json(readData);
        return new GameSaving(JSON.parse(jsonData));
       } 
}