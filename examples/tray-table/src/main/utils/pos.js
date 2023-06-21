const config = require('../../../config')

const getCoordinatesFromPos = (pos, width, height) => {
    const coords = {
        x: null,
        y: null,
    }

    const left = 0
    const right = config.resX - width
    const upper = 0
    const lower = config.resY - height - config.taskBarHeight
    
    switch (pos) {
        case "left-upper":
            coords.x = left
            coords.y = upper
            break
        case "right-upper":
            coords.x = right
            coords.y = upper
            break
        case "right-lower":
            coords.x = right
            coords.y = lower
            break
        case "left-lower":
            coords.x = left
            coords.y = lower
            break
    }

    return coords
}

const getPosFromCoordinates = (x, y) => {
    if (x === 0 && y === 0) return "left-upper"
    else if (x === 0) return "left-lower"
    else if (y === 0) return "right-upper"
    else return "right-lower"
}

module.exports = { getCoordinatesFromPos, getPosFromCoordinates }