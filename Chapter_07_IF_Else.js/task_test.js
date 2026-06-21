frequency = "always";
impact = "blocker";

if (frequency === "always") {

    if (impact === "blocker") {
        console.log("Severity: P0");
    }
    else if (impact === "major") {
        console.log("Severity: P1");
    }
    else if (impact === "minor") {
        console.log("Severity: P2");
    }

}
else if (frequency === "often") {

    if (impact === "blocker") {
        console.log("Severity: P1");
    }
    else if (impact === "major") {
        console.log("Severity: P2");
    }
    else if (impact === "minor") {
        console.log("Severity: P3");
    }

}
else if (frequency === "rarely") {

    if (impact === "blocker") {
        console.log("Severity: P2");
    }
    else if (impact === "major") {
        console.log("Severity: P3");
    }
    else if (impact === "minor") {
        console.log("Severity: P4");
    }

}
else {
    console.log("Invalid Frequency");
}