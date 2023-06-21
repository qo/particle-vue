import appConfig from './../config'

const getWindowHeightToFitContent = (table) => {
    const rowHeight = appConfig.tableRowHeight
    const headerRowAmt = 2
    const dataRowAmt = table.length
    const totalRowAmt = headerRowAmt + dataRowAmt
    const buttonHeight = appConfig.changePosButtonHeight
    const borderHeight = appConfig.tableBordersWidth
    const height = buttonHeight + totalRowAmt * rowHeight + borderHeight
    return height
}

export default getWindowHeightToFitContent