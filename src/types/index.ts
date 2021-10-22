import { RouteConfig } from 'vue-router'

export interface IIBaseResType<T> {
    code: number
    message: string
    data: T
}
// 自定义路由配置类型
export type TCustomRouteConfig = RouteConfig & {
    hideInMenu?: boolean
    hideChildrenInMenu?: boolean
}
