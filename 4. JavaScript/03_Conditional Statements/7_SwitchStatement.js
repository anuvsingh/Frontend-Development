// Switch statement is used when we have some fixed values that we have need to compare to.

let color = "red"

switch (color) {
    case "red":
        console.log("STOP")
        break;
    case "yellow":
        console.log("WAIT...")
        break;
    case "green":
        console.log("GO")
        break;
    default:
        console.log("BROKEN LIGHT")
}