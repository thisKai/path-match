import Koa = require('koa')
import pathToRegexp = require('path-to-regexp')

export = KoaPathMatch

declare function KoaPathMatch(options?: pathToRegexp.RegExpOptions): RouterFactory

type RouterFactory = {
  (path: pathToRegexp.Path, fn: Koa.Middleware): Router
  (path: pathToRegexp.Path, fn: Koa.Middleware[]): Router
  (path: pathToRegexp.Path, ...fn: Koa.Middleware[]): Router
}
type RouterMethod = (ctx: Koa.Middleware) => Router

type HTTPMethod
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

type Router = Koa.Middleware & {
  [M in HTTPMethod]: (ctx: Koa.Middleware) => Router
}
