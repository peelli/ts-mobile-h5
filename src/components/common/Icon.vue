<template>
    <i>
        <svg
            class="icon"
            aria-hidden="true"
            :style="{ fill: color, fontSize: size, width: size, height: size }"
        >
            <use :xlink:href="typeFormat"></use>
        </svg>
    </i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    components: {}
})
export default class Icon extends Vue {
    @Prop({ required: true }) type!: string
    @Prop({ default: '14px' }) size!: string
    @Prop() color!: string

    get typeFormat() {
        return `#${this.type}`
    }
}
</script>
