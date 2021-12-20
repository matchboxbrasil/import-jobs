const xml = {
    buscojobs: {
        jobs: []
    }
}

const obj = {
    'job': {
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
}

exports.toXml = function (array) {
    const {toXml} = require('../helpers/xml')

    for (let i = 0; i < array.length; i++) {
        const newObj = Object.assign({}, obj)
        
        const index = array[i]
        newObj['job']['title'] = index['Título']
        newObj['job']['content'] = index['Conteúdo']
        newObj['job']['city'] = index['Cidade']
        newObj['job']['region'] = index['Estado']
        newObj['job']['salary_numeric'] = index['Salário']
        newObj['job']['company'] = index['Empresa']
        newObj['job']['channels']['channel'] = index['Área']
        newObj['job']['date'] = new Date()
        newObj['job']['time'] = new Date()

        xml.buscojobs.jobs[i] = newObj
    }
    return toXml(xml)
}