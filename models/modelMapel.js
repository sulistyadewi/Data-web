const fs = require("fs");

class Mapel {
  constructor(id, mapel) {
    this.id = id;
    this.mapel = mapel;
  }
}

const mapel = JSON.parse(fs.readFileSync("./dataMapel.json")).map((data) => {
  return new Mapel(data.id, data.mapel);
});

// console.log(mapel);

module.exports = Mapel;
