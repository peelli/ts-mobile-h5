<template>
    <section>
        <div>
            <HomeHeader></HomeHeader>
            {{ userId }}
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { UserStore } from '../../store/modules/module'
import HomeHeader from './components/HomeHeader.vue'

@Component({
    components: { HomeHeader }
})
export default class Home extends Vue {
    get userId() {
        console.log(UserStore)
        return UserStore.userId
    }
}
</script>
<style lang="less" scoped>
div {
    width: 3.75rem;
    border: 1px solid #333;
}
</style>
