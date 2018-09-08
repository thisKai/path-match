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
    | 'bind'
    | 'checkout'
    | 'connect'
    | 'copy'
    | 'delete'
    | 'get'
    | 'head'
    | 'link'
    | 'lock'
    | 'm-search'
    | 'merge'
    | 'mkactivity'
    | 'mkcalendar'
    | 'mkcol'
    | 'move'
    | 'notify'
    | 'options'
    | 'patch'
    | 'post'
    | 'propfind'
    | 'proppatch'
    | 'purge'
    | 'put'
    | 'rebind'
    | 'report'
    | 'search'
    | 'source'
    | 'subscribe'
    | 'trace'
    | 'unbind'
    | 'unlink'
    | 'unlock'
    | 'unsubscribe'
}
