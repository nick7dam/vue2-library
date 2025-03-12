# Run -> "npm install @vue/compat" in your vue3 project


# How to use in Vue 3 project
<template>
  <div ref="compatRoot"></div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { createApp, configureCompat } from '@vue/compat';
import {HelloWorld} from 'vue2-library-test';

export default defineComponent({
  name: 'CompatWrapper',
  props: {
    // Pass down props if needed
  },
  setup(props) {
    const compatRoot = ref(null);
    let compatApp = null;

    onMounted(() => {
      // Enable compat explicitly for this component only
      configureCompat({ MODE: 2 });

      compatApp = createApp(HelloWorld, { ...props });
      compatApp.mount(compatRoot.value);
    });

    onBeforeUnmount(() => {
      if (compatApp) {
        compatApp.unmount();
      }
    });

    return { compatRoot };
  },
});
</script>
