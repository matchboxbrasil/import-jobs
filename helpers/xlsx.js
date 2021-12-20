const alphabetic = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

exports.excelToJson = function (path) {
    const xlsx = require('xlsx')
	const workbook = xlsx.readFile(path)
    
    const sheetNames = workbook.SheetNames[0]
    const sheets = workbook.Sheets[sheetNames]
    const countCells = workbook.Strings['Count']

    const ref = sheets['!ref']
    const lastCell = ref.split(':')[1]

    const countColumns = alphabetic.indexOf(lastCell[0]) + 1
    const columns = alphabetic.slice(0, countColumns)
    const countLines = countCells / countColumns

    let arraySheets = new Set()
    for (let i = 2; i <= countLines; i++) {
        let objCell = {}
        for (let j = 0; j < countColumns; j++) {
            const title = sheets[`${columns[j]}1`].v
            const cell = sheets[`${columns[j]}${i}`].v
            objCell[title] = cell
        }
        arraySheets.add(objCell)
    }
    return arraySheets
}