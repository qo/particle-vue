const config = require('../../../config')

const getCoordinatesFromPos = (pos) => {
    const coords = {
        x: null,
        y: null,
    }

    const left = 0
    const right = config.resX - config.width
    const upper = 0
    const lower = config.resY - config.height
    
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
        case "left-lower":
            coords.x = left
            coords.y = lower
    }

    return coords
}

module.exports = getCoordinatesFromPos