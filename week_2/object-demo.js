const champions = {
  team: "Raptors",
  year: 2019,
  mvp: ["Leonard", "James", "Giannis"],
  printMvps: function() {
    const roster = this.mvp;
    for (const player of roster) {
      console.log(`MVP: ${player}`);
    }
  }
};

console.log(champions);
console.log(champions.printMvps());