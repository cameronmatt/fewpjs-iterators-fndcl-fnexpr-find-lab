
function superbowlWin(record) {
    const found = record.find( ({ result }) => result === "W");
    if (found != undefined) {
        return found.year;
    } else {
        return undefined;
    }
}
