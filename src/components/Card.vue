<template>
  <div>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>cid : {{cid}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cid: 0,
            loading: false
        }
    },
    watch:{
        // '$route'() {
            // this.cid = this.$route.params.cid
            // this.fetchData() // cid 변경될때마다 백엔드 호출 
            // route객체 감시하면서 fetchData()
        // }
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    // created() {
    //     this.fetchData() // 컴포넌트 생성시 fetchData()
    // },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid;
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>