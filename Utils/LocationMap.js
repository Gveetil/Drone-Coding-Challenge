
/** This class stores data grouped by x and y position co-ordinates */
class LocationMap {
    constructor() {
        this.locations = [];
    }

    /** adds the given value at the co-ordinate specified */
    add(xPos, yPos, value) {
        const x = "x" + xPos;
        const y = "y" + yPos;
        // Check if there is a value at this x position
        if (typeof this.locations[x] == 'undefined') {
            // Create new array for this x position
            this.locations[x] = [];
        }
        // Check if there is a value at this x and y position
        if (typeof this.locations[x][y] == 'undefined') {
            // Create new entry
            this.locations[x][y] = value;
        } else {
            //Append value to existing entry 
            this.locations[x][y] += value;
        }
    }

    /** returns value from a given co-ordinate */
    get(xPos, yPos) {
        const x = "x" + xPos;
        const y = "y" + yPos;
        if (typeof this.locations[x] != 'undefined')
            return this.locations[x][y];

        // Value not found
        return null;
    }

    /** returns a count of the number of locations with values */
    count() {
        return Object.keys(this.locations).reduce(
            ((total, current) => total + Object.keys(this.locations[current]).length)
            , 0);
    }
}

module.exports = LocationMap;
