const xml = {
    buscojobs: {
        jobs: {
        }
    }
}

const obj = {
    'title': '',
    'content': '',
    'city': '',
    'region': '',
    'salary_numeric': '',
    'company': '',
    'date': '',
    'time': '',
    channels: {
        'channel': ''
    }
}

exports.toXml = function (json) {
    const {toXml} = require('../helpers/xml')
    const result = toXml(xml)
    const {writeFileSync} = require('fs')
    writeFileSync('sample-result-buscojobs.xml', result)
}