module.exports = function parseResponse( buffer ) {

  var eod = buffer.indexOf( '\r\n\r\n' )
  var header = buffer.toString( 'utf8', 0, eod )
    .split( /\r\n/g )

  var status = header.shift()

  var message = {
    protocol: '',
    version: '',
    statusCode: '',
    statusMessage: '',
    headers: Object.create( null )
  }

  eod = status.indexOf( '/' )

  message.protocol = status.slice( 0, eod ).toLowerCase()
  message.version = status.slice( eod + 1, eod = status.indexOf( ' ', eod + 1 ) )
  message.statusCode = parseInt( status.slice( eod + 1, eod = status.indexOf( ' ', eod + 1 ) ), 10 )
  message.statusMessage = status.slice( eod + 1 )

  for( var i = 0; i < header.length; i++ ) {
    eod = header[i].indexOf( ':' )
    let k = header[i].slice( 0, eod ).toLowerCase()
    let v = header[i].slice( eod + 1 ).trim()
    message.headers[k] = message.headers[k] != null ?
      message.headers[k] + ', ' + v : v
  }

  return message

}
