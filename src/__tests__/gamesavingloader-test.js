import GameSavingLoader from "../js/gamesavingloader";
jest.setTimeout(10000); 

test('GameSaving', async () => {
    const res = await GameSavingLoader.load();
    const dataGame = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    };

    expect(res).toEqual(dataGame);
});

test('error', async() => {
    try {
        return await GameSavingLoader.load()   
    } catch(error) {
        expect(error).toThrow(error);
    }
}); 