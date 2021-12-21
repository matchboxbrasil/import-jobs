exports.toXml = function (json) {
    const Parser = require('fast-xml-parser').j2xParser
    const defaultOptions = {
        attributeNamePrefix : '@_',
        attrNodeName: '@',
        textNodeName : '#text',
        ignoreAttributes : true,
        cdataTagName: '__cdata',
        cdataPositionChar: '\\c',
        format: false,
        indentBy: '  ',
        suppressEmptyNode: false,
        rootNodeName: 'element'
    }
    const parser = new Parser(defaultOptions)
    return parser.parse(json)
}