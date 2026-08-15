#!/usr/bin/env node

// text(): node's built-in stream consumer, which replaces the abandoned
// simple-concat. It resolves to a utf8 string, which is what acorn wants
// anyway — simple-concat handed us a Buffer that acorn had to stringify.
var text = require('node:stream/consumers').text
var undeclared = require('./')

if (arg('--help') || arg('-h')) {
  console.log('usage: undeclared-identifiers [--identifiers] [--properties] < source.js')
  process.exit(0)
}

text(process.stdin).then(function (src) {
  var r = undeclared(src)
  var i = arg('--identifiers') || arg('-i')
  var p = arg('--properties') || arg('-p')

  if (!i && !p) i = p = true

  if (i) r.identifiers.forEach(log)
  if (p) r.properties.forEach(log)
}, function (err) {
  throw err
})

function arg (s) {
  return process.argv.indexOf(s) !== -1
}
function log (n) {
  console.log(n)
}
