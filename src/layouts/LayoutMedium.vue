<script setup>
import MediumAside from '@/components/templates/medium/MediumAside.vue'
</script>

<template>
  <div id="Medium">
    <header>
      <MediumAside />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#Medium {
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 100vh; 
  padding: 20px;
}

header{ 
  width: 15vh;
}

main {
  flex: 3;
  padding: 20px;
  width: 85vh;
  overflow-y: auto; 
}


</style> 