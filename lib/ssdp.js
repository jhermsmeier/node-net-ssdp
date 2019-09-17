var SSDP = module.exports

SSDP.IPv6_LINK = 'FF02::C'
SSDP.IPv6_SITE = 'FF05::C'
SSDP.IPv6_ORGANIZATION = 'FF08::C'
SSDP.IPv6_GLOBAL = 'FF0E::C'
SSDP.IPv6 = SSDP.IPv6_SITE

SSDP.IPv4_SITE = '239.255.255.250'
SSDP.IPv4 = SSDP.IPv4_SITE

SSDP.PORT = 1900
SSDP.TTL = 255
SSDP.MULTICAST_TTL = 10

SSDP.PACKET_TYPE = 'MAN'
SSDP.SERVICE_TYPE = 'ST'
SSDP.WAIT_TIME = 'MX' // -> seconds to delay response
SSDP.LOCATION = 'LOCATION'
SSDP.NOTIFICATION_TYPE = 'NT'
SSDP.NOTIFICATION_SUB_TYPE = 'NTS'
SSDP.UNIQUE_SERVICE_NAME = 'USN'

SSDP.DEFAULT_MX = 1

SSDP.NOTIFY_STATUS = {
  ALIVE: 'ssdp:alive',
}

SSDP.METHODS = [
  'NOTIFY',
  'M-SEARCH',
]

SSDP.Discovery = require( './discovery' )

SSDP.Service = class Service {
  constructor( options ) {

    options = options || {}

    this.type = options.type || ''
    this.usn = options.usn || ''
    this.uuid = options.uuid || ''
    this.location = {
      ipv4: options.ipv4 || '',
      ipv6: options.ipv6 || '',
    }

    this.maxAge = parseInt( options.maxAge, 10 ) || 1800

  }
}

SSDP.parseResponse = require( './parse-response' )
SSDP.parseRequest = require( './parse-request' )
