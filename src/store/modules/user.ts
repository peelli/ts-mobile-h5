import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import store from '../index'

@Module({
    dynamic: true,
    name: 'user',
    store,
    preserveState: localStorage.getItem('diy_mobile') !== null
})
class User extends VuexModule {
    userId = 'name'
    userName = ''
    token = ''

    @Mutation
    setUsername(name: string) {
        this.userName = name
    }

    @Mutation
    setToken(token: string) {
        this.token = token
    }
}

export default User
