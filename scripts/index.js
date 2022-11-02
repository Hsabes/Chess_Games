// This function determines which squares are white or black

function determineSquareColor(element, i){
    if ((i >= 0 && i <= 7) || (i >= 16 && i <= 23) || (i >= 32 && i <= 39) || (i >= 48 && i <= 55)){
        return i % 2 === 0 ? element.style.backgroundColor = "#FFF" : element.style.backgroundColor = "#606060";
    }
    if ((i >= 8 && i <= 15) || (i >= 24 && i <= 31) || (i >= 40 && i <= 47) || (i >= 56 && i <= 63)){
        return i % 2 !== 0 ? element.style.backgroundColor = "#FFF" : element.style.backgroundColor = "#606060";
    }
}

// This function accepts an array of pieces, and according to their position in the array, assign them an ID for its corrospinding piece on the board.
// EX: The first element of blackPieces will be ID of "rook", since the top left corner of the board will be a black rook, and vice versa for the bottom right piece

function determineChessPieceById(whitePieces, blackPieces){
    whitePieces.map((element, i) => {
        switch(true){
            case i < 8 : return element.setAttribute("id", "pawn" + (i + 1))
            case i === 8 : return element.setAttribute("id", "rook" + (i + 1))
            case i === 9 : return element.setAttribute("id", "knight" + (i + 1))
            case i === 10 : return element.setAttribute("id", "bishop" + (i + 1))
            case i === 11 : return element.setAttribute("id", "queenWhite")
            case i === 12 : return element.setAttribute("id", "kingWhite")
            case i === 13 : return element.setAttribute("id", "bishop" + (i + 1))
            case i === 14 : return element.setAttribute("id", "knight" + (i + 1))
            case i === 15 : return element.setAttribute("id", "rook" + (i + 1))
        }
    })
    blackPieces.map((element, i) => {
        switch(true){
            case i === 0 : return element.setAttribute("id", "rook" + (i + 1))
            case i === 1 : return element.setAttribute("id", "knight" + (i + 1))
            case i === 2 : return element.setAttribute("id", "bishop" + (i + 1))
            case i === 3 : return element.setAttribute("id", "queenBlack")
            case i === 4 : return element.setAttribute("id", "kingBlack")
            case i === 5 : return element.setAttribute("id", "bishop" + (i + 1))
            case i === 6 : return element.setAttribute("id", "knight" + (i + 1))
            case i === 7 : return element.setAttribute("id", "rook" + (i + 1))
            case i > 7 : return element.setAttribute("id", "pawn" + (i + 1))
        }
    })
}

const chessSquareArray = []; // Global because it's needed in many places

// This function renders all 64 squares onto the chess board

function renderSquares(){
    let numOfSquares = 0;
    const chessBoard = document.querySelector(".chessBoard")
    while (numOfSquares < 64){
        const chessSquare = document.createElement("div")
        chessSquare.classList.add("chessSquare")
        chessSquareArray.push(chessSquare)
        numOfSquares += 1;
    }
    chessSquareArray.forEach((element, i) => {
        determineSquareColor(element, i)
        element.addEventListener("click", function(){
            console.log(i, element)
        })
    })
    return chessSquareArray.forEach((element) => {
        return chessBoard.append(element)
    })
}

renderSquares()

// This function creates the pieces and may handle appending those pieces to specific tiles on the board to create the starting positions

function createPieces(chessSquareArray){
    let pieces = 0
    const whitePieces = []
    const blackPieces = []
    while (pieces < 16){
        const whitePiece = document.createElement("div")
        whitePiece.classList.add("whitePiece")
        whitePieces.push(whitePiece)
        const blackPiece = document.createElement("div")
        blackPiece.classList.add("blackPiece")
        blackPieces.push(blackPiece)
        pieces += 1
    }
    determineChessPieceById(whitePieces, blackPieces)
    renderWhitePieces(whitePieces, chessSquareArray)
    renderBlackPieces(blackPieces, chessSquareArray)
    console.log(whitePieces, blackPieces)
}

createPieces(chessSquareArray)

// These functions render the created pieces onto the board

function renderWhitePieces(whitePieces, chessSquareArray){
    const button = document.querySelector("button")
    button.addEventListener("click", function(){
        setTimeout(function(){
            chessSquareArray.slice(48).map((square, i) => {
                setTimeout(function(){
                    square.append(whitePieces[i])
                }, 50 * i)
            })
        }, 800)
    })
}

function renderBlackPieces(blackPieces, chessSquareArray){
    const button = document.querySelector("button")
    button.addEventListener("click", function(){
        chessSquareArray.slice(0, 16).map((square, i) => {
            setTimeout(function(){
                square.append(blackPieces[i])
            }, 50 * i)
        })
    })
}

// function stylePieces(whitePieces, blackPieces){
//     whitePieces.map((piece) => {
//         switch (true){
//             case piece.id === "rook9" : return piece.innerText = "test"
//         }
//     })
// }