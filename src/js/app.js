
import GameSavingLoader from "./gamesavingloader.js";

(async() => {
    try {
        const load = await GameSavingLoader.load(); 
        console.log(load);
    } catch (error) {
        throw new Error(error);
    }
}) ();
