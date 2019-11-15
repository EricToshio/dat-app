const mergeBoards = (myBoard, opponentBoard) => {
    const mergedBoard = {"board":{}}
    Object.keys(myBoard["board"]).forEach(key => {
        mergedBoard["board"][key] = myBoard["board"][key].length ? myBoard["board"][key] : opponentBoard["board"][key];
    })
    return mergedBoard;
}

exports.mergeBoards = mergeBoards;