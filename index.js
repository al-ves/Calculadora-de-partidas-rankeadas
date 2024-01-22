function calculateBalance(victories, defeats) {
    let matchBalance = victories - defeats;
    let level;

    const levels = [
        {limit: 10, level: "Ferro"},
        {limit: 20, level: "Bronze"},
        {limit: 50, level: "Prata"},
        {limit: 80, level: "Ouro"},
        {limit: 90, level: "Diamante"},
        {limit: 100, level: "Lendário"},
        {limit: Infinity, level: "Imortal"}
    ];

    for (let i = 0; i < levels.length; i++) {
        if (matchBalance <= levels[i].limit) {
            level = levels[i].level;
            break;
        }
    }

    return `O Herói com um saldo de ${matchBalance} está no nível de ${level}`;
}

let result = calculateBalance(120, 10);
console.log(result);
