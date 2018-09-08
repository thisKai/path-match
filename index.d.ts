import Koa = require('koa')
import pathToRegexp = require('path-to-regexp')

export = KoaPathMatch

declare function KoaPathMatch(options?: pathToRegexp.RegExpOptions): KoaPathMatch.RouterFactory

declare namespace KoaPathMatch {
  export type RouterFactory = {
    (path: pathToRegexp.Path, fn: Koa.Middleware): Router
    (path: pathToRegexp.Path, fn: Koa.Middleware[]): Router
    (path: pathToRegexp.Path, ...fn: Koa.Middleware[]): Router
  }

  export type Router = Koa.Middleware & {
    [M in HTTPMethod]: (ctx: Koa.Middleware) => Router
  }

  export type HTTPMethod
    = 'acl'
    | 'ACL'
    | 'bind'
    | 'BIND'
    | 'checkout'
    | 'CHECKOUT'
    | 'connect'
    | 'CONNECT'
    | 'copy'
    | 'COPY'
    | 'delete'
    | 'DELETE'
    | 'get'
    | 'GET'
    | 'head'
    | 'HEAD'
    | 'link'
    | 'LINK'
    | 'lock'
    | 'LOCK'
    | 'm-search'
    | 'M-SEARCH'
    | 'merge'
    | 'MERGE'
    | 'mkactivity'
    | 'MKACTIVITY'
    | 'mkcalendar'
    | 'MKCALENDAR'
    | 'mkcol'
    | 'MKCOL'
    | 'move'
    | 'MOVE'
    | 'notify'
    | 'NOTIFY'
    | 'options'
    | 'OPTIONS'
    | 'patch'
    | 'PATCH'
    | 'post'
    | 'POST'
    | 'propfind'
    | 'PROPFIND'
    | 'proppatch'
    | 'PROPPATCH'
    | 'purge'
    | 'PURGE'
    | 'put'
    | 'PUT'
    | 'rebind'
    | 'REBIND'
    | 'report'
    | 'REPORT'
    | 'search'
    | 'SEARCH'
    | 'source'
    | 'SOURCE'
    | 'subscribe'
    | 'SUBSCRIBE'
    | 'trace'
    | 'TRACE'
    | 'unbind'
    | 'UNBIND'
    | 'unlink'
    | 'UNLINK'
    | 'unlock'
    | 'UNLOCK'
    | 'unsubscribe'
    | 'UNSUBSCRIBE'
}
