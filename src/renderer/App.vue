<script>
    import Table from './components/Table.vue'
    import appConfig from './config'
    // TODO: figure out how to import window config
    // import { windowConfig } from './../../config'
    import getWindowHeightToFitContent from './utils/size'

    export default {

        data() {
            return {
                table: [],
                // TODO: uncomment once figured out how to import window config
                // currentPos: windowConfig.initialPos
                currentPos: "right-lower",
            }
        },

        components: {
            Table
        },

        methods: {
            async updateApp() {

                const updateTable = async() => {
                    const fetchTable = async() => {
                        const url = appConfig.fetchTableUrl
                        const res = await fetch(url)
                        return await res.json()
                    }
                    this.table = await fetchTable()
                }

                const adjust = () => {
                    const height = getWindowHeightToFitContent(this.table)
                    const currentWidth = window.outerWidth
                    window.electronAPI.adjust(currentWidth, height)
                }

                await updateTable()
                adjust()
            },
        },

        async mounted() {
            await this.updateApp()
            setInterval(async () => await this.updateApp(), appConfig.fetchInterval)
        }
    }
</script>

<template>
	<Table :items="table" />
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>