<template>
  <div>
    <div v-if="history.length === 0" class="app-history-no-records">Records not found</div>
    <table v-else class="app-history">
      <thead>
        <tr>
          <td>#</td>
          <td>The first fraction</td>
          <td>Procedure / Operation</td>
          <td>Second fraction</td>
          <td>Result</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in history" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.left | toFraction}}</td>
          <td>{{ operations[item.operation] }}</td>
          <td>{{item.right | toFraction}}</td>
          <td>{{item.result | toFraction}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td align="right" colspan="5">
            <button type="button" class="app-history-button" @click="$store.commit('clearHistory')">Clear</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Fraction from 'fraction.js'
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'HistoryPage',
  filters: {
    toFraction: value => new Fraction(value).toFraction()
  },
  computed: {
    ...mapGetters(['history']),
    ...mapState(['operations'])
  }
}
</script>
<style>
.app-history {
  margin-top: 100px;
}
.app-history tr {
  font-size: 20px;
  height: 50px;
  border-bottom: 1px solid #ececec;
}
.app-history-no-records {
  font-size: 40px;
}
.app-history-button {
  border: 1px solid #ececec;
  padding: 10px;
  font-size: 20px;
}
</style>
