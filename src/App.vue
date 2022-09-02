<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

console.log(process.env.SECRET);
console.log(process.env.sass);
export default defineComponent({
  name: 'App',
});
</script>
