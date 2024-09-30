import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue';

export function useLayoutShop() {
  const layoutShop = shallowRef();

  const updateLayout = () => {
    const width = window.innerWidth;
    if (width < 768) {
      layoutShop.value = defineAsyncComponent(() =>
        import('@/layouts/LayoutSmallShop.vue'),
      );
    } else if (width < 1200) {
      layoutShop.value = defineAsyncComponent(() =>
        import('@/layouts/LayoutMediumShop.vue'),
      );
    } else {
      layoutShop.value = defineAsyncComponent(() =>
        import('@/layouts/LayoutLargeShop.vue'),
      );
    }
  };

  onMounted(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout);
  });

  return { layoutShop };
}