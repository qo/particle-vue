const getNextPos = (current) => {
    switch (current) {
        case 'right-lower':
            return 'left-lower'
        case 'right-upper':
            return 'right-lower'
        case 'left-upper':
            return 'right-upper'
        case 'left-lower':
            return 'left-upper'
    }
}

export default getNextPos