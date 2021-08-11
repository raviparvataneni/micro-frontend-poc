<template>
  <div class="Page">
    <h3>Page {{ number }}</h3>
  </div>
</template>

<script>

import {useRoute} from 'vue-router';
import {computed} from 'vue';

export default {
  name: "Page1",
  setup(props) {
    const route = useRoute();

    const number = computed(() => route.params.number);

    return {
      number
    };
  }
}
</script>

<style scoped>
  .Page > h3 {
    color: orange;
  }
</style>