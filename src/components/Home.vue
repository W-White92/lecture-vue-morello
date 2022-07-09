<template>
    <div>
        Home
        <div>
            Board List:
            <div v-if="loading">Loading...</div>
                <div v-else>Api result: 
                    <!-- <pre>{{apiRes}}</pre> -->
                    <!-- <pre>{{boards}}</pre> -->
                    <div v-for="b in boards" :key="b.id">
                        {{b}}
                    </div>
                </div>
                <!-- <div v-if="error">Error:
                    <pre>{{error}}</pre>
                </div> -->
            <ul>
                <li>
                    <router-link to="/b/1">Board 1</router-link>
                </li>
                <li>
                    <router-link to="/b/2">Board 2</router-link>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            boards: [],
            // error:''
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
    fetchData() {
        this.loading = true
        axios.get('http://localhost:3000/boards')
            .then(res => {
                this.apiRes = res.data
            })
            .catch(res => {
                // this.error = res.response.data
                this.$router.replace('login')
            })
            .finally(_=> {
                this.loading = false
            })

        // const req = new XMLHttpRequest()

        // req.open('GET', 'http://localhost:3000/health')

        // req.send()

        // req.addEventListener('load', () => {
        //     this.loading = false
        //     this.apiRes = {
        //         status : req.status,
        //         statusText: req.statusText,
        //         response: JSON.parse(req.response)
        //     }
        // })

        }
    }
}
</script>

<style>

</style>