<template>
  <div>
    Board
    <div>bid: {{bid}}</div>
    <!-- /데이터 로딩 완료시 출력하도록 -->
    <div v-if="loading">loading board...</div>
    <div v-else>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
    </div>
    <!-- /데이터 로딩 완료시 출력하도록 -->
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,
            loading: false
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
      fetchData() {
        this.loading = true
        setTimeout(() => {
          this.bid = this.$route.params.bid
          this.loading = false
        }, 500)
      }// 백엔드 호출하는 함수
    }
}
</script>

<style>

</style>