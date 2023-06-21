<script>
    import Table from './components/Table.vue'
    import appConfig from './config'
    // TODO: figure out how to import window config
    // import { windowConfig } from './../../config'
    import getNextPos from './utils/pos'
    import getWindowHeightToFitContent from './utils/size'

    export default {

        data() {
            return {
                table: [],
                // TODO: uncomment once figured out how to import window config
                // currentPos: windowConfig.initialPos
                currentPos: "right-lower",
                changePosButtonHeight: appConfig.changePosButtonHeight
            }
        },

        components: {
            Table
        },

        methods: {
            // Run it if you want to update table based on new data
            async updateApp() {

                const updateTable = async() => {
                    const fetchTable = async() => {
                        const url = appConfig.fetchTableUrl
                        const res = await fetch(url)
                        return await res.json()
                    }
                    this.table = await fetchTable()
                }

                const updateWindowSize = () => {
                    const height = getWindowHeightToFitContent(this.table)
                    const currentWidth = window.outerWidth
                    window.electronAPI.setSize(currentWidth, height)
                }

                await updateTable()
                updateWindowSize()
            },

            changePos() {
                const nextPos = getNextPos(this.currentPos)
                window.electronAPI.setPos(nextPos)
                this.currentPos = nextPos
            }
        },

        mounted() {
            this.updateApp()
        }
    }
</script>

<template>
	<button class="changePosButton" @click="changePos">Change Position</button>
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
    .changePosButton {
        height: v-bind('changePosButtonHeight');
    }
</style>