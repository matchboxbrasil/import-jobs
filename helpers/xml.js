exports.toXml = function (json) {
    const Parser = require('fast-xml-parser').j2xParser
    //default options need not to set
    const defaultOptions = {
        attributeNamePrefix : '@_',
        attrNodeName: '@', //default is false
        textNodeName : '#text',
        ignoreAttributes : true,
        cdataTagName: '__cdata', //default is false
        cdataPositionChar: '\\c',
        format: true,
        indentBy: '  ',
        suppressEmptyNode: false,
        // tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),// default is a=>a
        // attrValueProcessor: a=> he.encode(a, {isAttributeValue: isAttribute, useNamedReferences: true}),// default is a=>a
        rootNodeName: 'element'
    }
    const parser = new Parser(defaultOptions)
    return parser.parse(json)
}