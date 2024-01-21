import read from './reader.js';
import json from './parser.js';
import { GameSaving } from './gamesaving.js'

export default class GameSavingLoader {
    static async load() {
        try {
            const read =await read();
            const json =await json(read);
            return new GameSaving(JSON.parse(json));
       }
        catch(error) {
            throw new Error(error);
      }
}
}


