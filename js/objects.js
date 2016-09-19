//Objects lesson.

var robot = {
    fuel: 100,
    weapon: "laser",
    speed: 10,
    strength: 5,
    armor: "light",

    addFuel: function (tank){
        fuel += tank;
    },

    upgradeArmor: function (change){
        this.armor = change;
    },

    changeWeapon: function (change){
        this.weapon = change;
    }
}

robot.speed += parseInt(prompt("Increase robot speed."));
alert("Our robot now has a speed of " + robot.speed);

robot.upgradeArmor(prompt("What should we upgrade the armor to?"));
alert("Your armor is now " + robot.armor + " armor.");

robot.changeWeapon(prompt("What should we change our weapon to?"));
alert("Your weapon is now a " + robot.weapon);

