<script>
    import { ref } from 'vue'

    const title = ref("Hello, Vue")

    export default {
        data() {
            return {
                title: title
            }
        },
        methods: {
            updateTitle: () => {
                const api = window.electronAPI
                const newTitle = title.value
                api.setTitle(newTitle)
            }
        }
    }
</script>

<template>
    Title: <input v-model="title"/>
    <button @click="updateTitle">Update</button>
</template>