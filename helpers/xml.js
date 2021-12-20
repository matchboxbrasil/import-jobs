exports.toXml = function (json) {
    const {XMLBuilder} = require('fast-xml-parser');
    const options = {
        ignoreAttributes: false,
        preserveOrder: true,
        allowBooleanAttributes: true,
        suppressBooleanAttributes: true
    };
    const builder = new XMLBuilder(options);
    return builder.build(json);
}