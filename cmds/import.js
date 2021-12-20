exports.command = '$0 <path> [origin]'
exports.desc = 'Create an xml for job sites passing just a spreadsheet'
exports.builder = {
	path: {
		describe: 'File path of the spreadsheet you want to load',
		type: 'string'
	},
	origin: {
		describe: 'Which job site do you want to convert your spreadsheet to',
		type: 'string',
		default: 'buscojobs'
	}
}
exports.handler = function (argv) {
	const {toJson} = require('../helpers/xlsx')
	const json = toJson(argv.path)
	// const xml = toXml(json)
	console.log(json)
}
