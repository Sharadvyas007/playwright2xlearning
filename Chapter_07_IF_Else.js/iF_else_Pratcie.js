let expactedResult = 200;
let actualResult = 404;

if (expactedResult === actualResult) {
    console.log("Test Pass")

}

if (actualResult >= 400 && actualResult <= 499) {
    console.log("Client Error")
}
else if (actualResult >= 500) {
    console.log("Server Error Found")
}

else {
    console.log("Unknown Result")
}

