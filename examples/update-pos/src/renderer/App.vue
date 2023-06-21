<script>
    const updatePos = (pos) => {
        const api = window.electronAPI
        api.updatePos(pos)
    }
    export default {
        methods: {
            updatePos: updatePos
        }
    }
</script>

<template>
    <button type="button" @click="updatePos('left-upper')">Left Upper</button>
    <button type="button" @click="updatePos('right-upper')">Right Upper</button>
    <br>
    <button type="button" @click="updatePos('right-lower')">Right Lower</button>
    <button type="button" @click="updatePos('left-lower')">Left Lower</button>
</template>