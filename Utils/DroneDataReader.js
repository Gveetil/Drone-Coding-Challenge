const LocationMap = require("./LocationMap");

/** This class parses input data from a Drone */
class DroneDataReader {
  /**
   * Creates an instance of DroneDataReader
   * @param {String} droneData the data input from the drone
   */
  constructor(droneData) {
    this.targets = parseDroneData(droneData);
  }

  /** returns the number of targets found in the drone input */
  targetsFound() {
    return this.targets.count();
  }
}

/** 
 * Parse the input from the drone and return a LocationMap of co-ordinates 
 * where targets are found 
 * @param {String} droneData the data input from the drone
 */
parseDroneData = function (droneData) {
  const targetLocations = new LocationMap();
  let x = 0;
  let y = 0;
  cursorPosition = 0;

  while (cursorPosition < droneData.length) {
    switch (droneData[cursorPosition]) {
      case "x":
        targetLocations.add(x, y, 1);
        break;
      case "^":
        y += 1;
        break;
      case "v":
        y -= 1;
        break;
      case "<":
        x -= 1;
        break;
      case ">":
        x += 1;
        break;
      default:
        break;
    }
    cursorPosition++;
  }
  return targetLocations;
}

module.exports = DroneDataReader;