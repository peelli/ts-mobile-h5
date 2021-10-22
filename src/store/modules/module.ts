import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user'
export const UserStore = getModule(UserModule)
