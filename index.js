const fs = require("fs");
const DroneDataReader = require("./Utils/DroneDataReader");

/**the path where the data file is located */
const dataFilePath = "./Data/droneInput.txt";

/**
 * Method reads the drone input data file and returns the contents as a String 
 * @returns {String} the contents of the data file
 */
function fetchDroneInput() {
    return fs.readFileSync(dataFilePath, "UTF8");
}

/**
 * This method initializes and executes the application  
 */
function init() {
    try {
        console.log("Parsing drone input data file from the Data folder ...");

        const droneInput = fetchDroneInput();

        // If no data found, display message and exit
        if (droneInput == null) {
            console.log(">> No Drone Data file found!");
            return;
        }

        const droneReader = new DroneDataReader(droneInput);
        console.log(`${droneReader.targetsFound()} billboard targets were found by the drone!`);
    }
    catch (error) {
        console.log(error);
    }
}

// Call the init method to start the application
init();
