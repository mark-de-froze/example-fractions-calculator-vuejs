<template>
  <div>
    <form class="app-calculator" @submit.prevent="onInput">
      <div class="app-calculator-inner">
        <div class="app-calculator-left">
          <div class="app-calculator-numerator"><input type="number" min="1" v-model.number="left.n"></div>
          <div class="app-calculator-denominator"><input type="number" min="1" v-model.number="left.d"></div>
        </div>
        <div class="app-calculator-sign">
          <div>{{operation}}</div>
        </div>
        <div class="app-calculator-right">
          <div class="app-calculator-numerator"><input type="number" min="1" v-model.number="right.n"></div>
          <div class="app-calculator-denominator"><input type="number" min="1" v-model.number="right.d"></div>
        </div>
        <div class="app-calculator-sign">
          <div>=</div>
        </div>
        <div class="app-calculator-right">
          <div class="app-calculator-numerator"><input readonly type="number" min="1" v-model.number="result.n"></div>
          <div class="app-calculator-denominator"><input readonly type="number" min="1" v-model.number="result.d"></div>
        </div>
      </div>
      <div class="app-calculator-operations">
        <button type="button" class="app-calculator-sign" v-for="(sign, _operation) in operations" :key="_operation" @click="$store.commit('changeOperation', _operation)">{{sign}}</button>
        <button type="submit" class="app-calculator-sign">=</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'IndexPage',
  // data () {
  //   return {
  //     left: {
  //       n: 1,
  //       d: 2
  //     },
  //     right: {
  //       n: 1,
  //       d: 3
  //     }
  //   }
  // },
  watch: {
    'left.n': 'onInput',
    'left.d': 'onInput',
    'right.n': 'onInput',
    'right.d': 'onInput',
    'operation': 'onInput'
  },
  computed: {
    ...mapGetters(['operation']),
    ...mapState(['left', 'right', 'result', 'operations'])
  },
  methods: {
    onInput () {
      this.$store.dispatch('calculate', { left: this.left, right: this.right })
    }
  }
}
</script>
<style>
.app-calculator-inner {
  display: flex;
  justify-content: center;
}
.app-calculator-sign {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}
.app-calculator-left, .app-calculator-right {
  width: 100px;
}
.app-calculator-numerator, .app-calculator-denominator  {
  padding: 20px 10px;
}
.app-calculator-denominator {
  border-top: 1px solid #ececec;
}
.app-calculator input, .app-calculator select {
  border: 1px solid #ececec;
  background-color: #fff;
  color: #666;
  text-align: center;
  font-size: 40px;
  width: 75px;
  height: 75px;
}
.app-calculator-operations {
  display: flex;
  color: #fff;
  background: linear-gradient(to right, #f4cbc7, #90a9d2);
}
.app-calculator-operations > button {
  height: 100px;
  background-color: transparent;
  border: none;
  color: inherit;
  font-family: inherit;
}
.app-calculator-operations > button:hover {
  opacity: 0.5;
  background-color: rgba(255,255,255, 0.3);
  cursor: pointer;
}
</style>
