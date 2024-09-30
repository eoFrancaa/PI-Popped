<script setup>
  import { useLayoutShop } from '@/composables/layoutShop';
  const { layoutShop } = useLayoutShop();
</script>
<template>
  <component :is="layoutShop" />
</template>