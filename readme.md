# Using Vue 2 Components in Vue 3 (Localized Compatibility Mode)

This guide explains how to selectively apply Vue's compatibility mode (`@vue/compat`) to integrate Vue 2 components/plugins in a Vue 3 project without enabling compatibility mode globally.

---

## ✅ Installation

In your Vue 3 project, run:

```bash
npm install @vue/compat
```

---

## ✅ Usage Example

Create a wrapper component in your Vue 3 project to locally isolate Vue 2 components:

### 📌 `CompatWrapper.vue`

```vue
<template>
  <div ref="compatRoot"></div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { createApp, configureCompat } from '@vue/compat';
import { HelloWorld } from 'vue2-library-test';

export default defineComponent({
  name: 'CompatWrapper',
  props: {
    // Pass down props if needed
  },
  setup(props) {
    const compatRoot = ref(null);
    let compatApp = null;

    onMounted(() => {
      // Enable compatibility mode explicitly for this component
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
```

---

## ✅ Integration into your Vue 3 App

Use this wrapper component just like any other Vue 3 component:

```vue
<template>
  <CompatWrapper />
</template>

<script setup>
import CompatWrapper from './components/CompatWrapper.vue';
</script>
```

---

## ✅ Benefits

- **Isolated compatibility**: Does not affect global Vue 3 settings.
- **Clean integration**: Clearly separates Vue 2 and Vue 3 contexts.
- **Performance**: Minimal overhead, applying compatibility only where required.

---

Enjoy seamlessly using Vue 2 components in your Vue 3 projects!

