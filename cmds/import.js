exports.command = '$0'
exports.desc = 'Create an new xml to import in a job site rss'
exports.builder = {
  dir: {
    default: '.'
  }
}
exports.handler = function (argv) {
  console.log('import called for sheet', argv.dir)
}