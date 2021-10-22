import HttpClient from './HttpClient'
import { IAlarmItemType } from '../types/test'
import { IBaseResType } from '../types/index'

class UtilApi extends HttpClient {
    // 后端的接口地址是：/api/v1/realtime/alarms/queryByAlarmId/alarmIdc7e9bd47
    //需要提供两个类型
    public getAlarmById = (id: string) =>
        this.instance.get<IAlarmItemType, IBaseResType<IAlarmItemType>>(
            `/realtime/alarms/queryByAlarmId/${id}`
        )
}

export const UTIL_API = new UtilApi()
