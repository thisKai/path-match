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

interface Router extends Koa.Middleware {
  acl: RouterMethod
  bind: RouterMethod
  checkout: RouterMethod
  connect: RouterMethod
  copy: RouterMethod
  delete: RouterMethod
  get: RouterMethod
  head: RouterMethod
  link: RouterMethod
  lock: RouterMethod
  'm-search': RouterMethod
  merge: RouterMethod
  mkactivity: RouterMethod
  mkcalendar: RouterMethod
  mkcol: RouterMethod
  move: RouterMethod
  notify: RouterMethod
  options: RouterMethod
  patch: RouterMethod
  post: RouterMethod
  propfind: RouterMethod
  proppatch: RouterMethod
  purge: RouterMethod
  put: RouterMethod
  rebind: RouterMethod
  report: RouterMethod
  search: RouterMethod
  source: RouterMethod
  subscribe: RouterMethod
  trace: RouterMethod
  unbind: RouterMethod
  unlink: RouterMethod
  unlock: RouterMethod
  unsubscribe: RouterMethod
}
