import type { RouteRecordRaw } from 'vue-router'

export type MyRouteType = RouteRecordRaw & { key?: string }

export type MyApiConfig = { host?: string; port?: string; path?: string }
