import Vue from 'vue'
import Vuex from 'vuex'
import Fraction from 'fraction.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
    operations: {
      'plus': '+',
      'minus': '-',
      'multiply': '×',
      'divide': '÷'
    },
    operation: 'plus',
    left: {
      n: 1,
      d: 1
    },
    right: {
      n: 1,
      d: 1
    },
    result: {
      n: 1,
      d: 1
    }
  },
  getters: {
    operation: (state) => state.operations[state.operation],
    history: (state) => state.history
  },
  mutations: {
    changeOperation (state, payload) {
      state.operation = payload
    },
    setResult (state, payload) {
      state.result = payload
    },
    setLeft (state, payload) {
      state.left = payload
    },
    setRight (state, payload) {
      state.right = payload
    },
    addToHistory (state) {
      state.history.push({
        left: Object.assign({}, state.left),
        right: Object.assign({}, state.right),
        operation: state.operation,
        result: state.result
      })
    },
    clearHistory (state) {
      state.history = []
    }
  },
  actions: {
    calculate ({commit, state}, { left, right }) {
      commit('setLeft', left)
      commit('setRight', right)

      const leftFloat = new Fraction(state.left).valueOf()
      const rightFloat = new Fraction(state.right).valueOf()

      const operation = state.operation
      let result = 0
      switch (operation) {
        case 'plus':
          result = leftFloat + rightFloat
          break
        case 'minus':
          result = leftFloat - rightFloat
          break
        case 'multiply':
          result = leftFloat * rightFloat
          break
        case 'divide':
          result = leftFloat / rightFloat
          break
      }
      result = new Fraction(result)
      commit('setResult', result)
      commit('addToHistory')
    }
  }
})
