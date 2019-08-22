var SSDP = require( '..' )
var discovery = new SSDP.Discovery()
var interval = null

discovery.on( 'search', ( msg, rinfo, iface ) => {
  var addr = `${rinfo.address}:${rinfo.port}`
  console.log( `M-SEARCH from ${rinfo.address} for "${msg.headers.st}"`, msg )
})

discovery.on( 'notify', ( msg, rinfo, iface ) => {
  console.log( 'NOTIFY', msg )
})

discovery.on( 'message', ( msg, rinfo, iface ) => {
  console.log( 'MESSAGE', msg )
})

// discovery.on( 'warning', ( msg, iface ) => {
//   console.error( 'WARNING', msg )
// })

// var service = new SSDP.Service({
//   usn: 'uuid:00000000-0000-0000-0000-000000000000',
//   type: 'urn:dial-multiscreen-org:service:dial:1',
//   ipv4: 'http://192.168.1.231:8080/example.xml',
//   maxAge: 10,
// })

// discovery.publish( service )

discovery.listen(( error ) => {

  if( error ) {
    throw error
  }

  console.log( discovery )

  function search() {
    console.log( 'Searching...' )
    discovery.search({ st: 'ssdp:all' })
  }

  // interval = setInterval( search, 60000 )
  search()

})

process.on( 'SIGINT', () => {
  clearInterval( interval )
  discovery.close()
})
