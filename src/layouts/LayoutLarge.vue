<script setup>
import LargeMenu from '@/components/templates/large/LargeMenu.vue'
</script>
<template>
    <div id="large">

        <header>
            <LargeMenu />
        </header>
        <main>
            <RouterView />
        </main>
        <footer>
            © Popped .
        </footer>
        
    </div>
</template>

<style scoped>

#large {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
header {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: "Noto Sans Thai", sans-serif;
}


main {
    font-family: "Inter", sans-serif;
    font-size: xx-large;
    width: 100%;
    flex: 1;
    /* min-height: calc(100vh - 100px); */
    /* margin-top: 50px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #3C0250;
}


footer {
    width: 100%;
    height: 50px;
    color: #f0f0f0;
    background-color: #888689;
    font-family: "Inter", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
