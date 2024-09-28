function speeddetector(speed) {
    const speedlimit = 70; // set speed limit
    const kmperdemerit = 5; // set demerit (every 5Km) point rule

    if (speed < speedlimit) {
        return "ok";  // print "ok", if speed is below 70
    } else {  // calculate the number of demerit points for speeding
        const demeritpoints = Math.floor((speed - speedlimit) / kmperdemerit);
        if (demeritpoints > 12) {
            return "license suspended";  // suspend licence, if the demerits points exceed 12
        } else {
            return `points: ${demeritpoints}`; // show the demerit points
        }
    }
}
// prompt the user for the speed
const speed = parseInt(prompt("enter the car's speed"));
// display the result
console.log(speeddetector(speed));