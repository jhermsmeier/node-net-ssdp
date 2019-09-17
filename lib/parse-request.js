module.exports = function parseRequest( buffer ) {

  var eod = buffer.indexOf( '\r\n\r\n' )
  var header = buffer.toString( 'utf8', 0, eod )
    .split( /\r\n/g )

  var [ method, path, protocol ] = header.length ?
    header.shift().split( /\s/g ) : []

  var message = {
    protocol: protocol.split( '/' ).shift().toLowerCase(),
    version: protocol.split( '/' ).pop(),
    method,
    path,
    headers: Object.create( null ),
  }

  for( var i = 0; i < header.length; i++ ) {
    eod = header[i].indexOf( ':' )
    let k = header[i].slice( 0, eod ).toLowerCase()
    let v = header[i].slice( eod + 1 ).trim()
    message.headers[k] = message.headers[k] != null ?
      message.headers[k] + ', ' + v : v
  }

  return message

}
