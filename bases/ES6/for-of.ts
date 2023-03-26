(() => {
    type Avenger = {
        name:string,
        weapon:string
    }

    const ironman:Avenger = {
        name: 'ironman',
        weapon: 'armorsuit'
    }

    const captainAmerica:Avenger = {
        name: 'Capitan America',
        weapon: 'shield'
    }

    const thor:Avenger = {
        name: 'Thor',
        weapon: 'hammer'
    }

    const avengers = [ironman,captainAmerica,thor]

    /* FOR OF */
    for (const avenger of avengers) {
        console.log(avenger.name,avenger.weapon);
    }
})()