<template>
    <div>
        <pre>
            这个页面主要展示了三个问题:
            1. countup 调用
            2. 父组件直接调用子组建方法
            3. ref的两种用法
        </pre>
        <count-to :end-val="endVal" ref="counter" @on-animation-end="end">
            <span slot="prepend">总金额： </span>
            <span slot="append">元</span>>
        </count-to>
        <button @click="getCurVal">得到当前值</button>
        <button @click="upVal">更新当前值</button>
    </div>
</template>

<script>
import CountTo from 'components/count-to'
export default {
    name: 'count-to-view',
    components: {
        CountTo
    },
    data () {
        return {
            endVal: 1000
        }
    },
    methods: {
        getCurVal () {
            /**
             * ref 的两种情况
             * 1.封装的组建上面使用ref， 获得的vue 实例
             * 2.原生的html 标签上面使用ref ,获得的是元素dom
             */
            let num = this.$refs.counter.getCount()
            console.log(num)
        },
        end (val) {
            console.log('动画结束了')
        },
        upVal () {
            this.endVal += Math.random() * 100 
        }

    }
}
</script>

<style>

</style>
