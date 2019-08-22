# net-ssdp
[![npm](https://img.shields.io/npm/v/net-ssdp.svg?style=flat-square)](https://npmjs.com/package/net-ssdp)
[![npm license](https://img.shields.io/npm/l/net-ssdp.svg?style=flat-square)](https://npmjs.com/package/net-ssdp)
[![npm downloads](https://img.shields.io/npm/dm/net-ssdp.svg?style=flat-square)](https://npmjs.com/package/net-ssdp)
[![build status](https://img.shields.io/travis/jhermsmeier/node-net-ssdp/master.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-net-ssdp)

Simple Service Discovery Protocol (SSDP)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save net-ssdp
```

## Usage

```js
var SSDP = require( 'net-ssdp' )
```

```js
var discovery = new SSDP.Discovery({
  reuseAddr: true,
  interfaces: { ... }
})
```

```js
discovery.announce( service[, interfaces][, callback] )
discovery.publish( service[, interfaces][, callback] )
```

## References

