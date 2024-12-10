<script setup>
import SmallMenu from '@/components/templates/small/SmallAside.vue'
</script>
<template>
    <div id="small">
        <main>
            <RouterView />
        </main>
        <footer>
            <SmallMenu />
        </footer>
    </div>
</template>

<style scoped>



main {
    font-family: "Inter", sans-serif;
    font-size: xx-large;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #3C0250;
}


footer {
    position: fixed;
    bottom: 0;
}
</style>
