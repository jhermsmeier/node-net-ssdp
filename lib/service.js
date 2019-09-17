class Service {

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

module.exports = Service
