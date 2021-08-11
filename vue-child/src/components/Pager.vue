<template>
  <div class="Pager">
    <div class="Buttons">
      <router-link to="/page/1">
        <button :class="btnClasses1">Page 1</button>
      </router-link>
      <router-link to="/page/2">
        <button :class="btnClasses2">Page 2</button>
      </router-link>
      <router-link to="/page/3">
        <button :class="btnClasses3">Page 3</button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router';

export default {
  name: "Pager",
  setup() {
    const route = useRoute();

    const btnClasses1 = computed(() => {
      if (route.params.number === '1') {
        return 'active';
      }
      return '';
    });

    const btnClasses2 = computed(() => {
      if (route.params.number === '2') {
        return 'active';
      }
      return '';
    });

    const btnClasses3 = computed(() => {
      if (route.params.number === '3') {
        return 'active';
      }
      return '';
    });

    return {
      btnClasses1,
      btnClasses2,
      btnClasses3
    };
  }
}
</script>

<style scoped>
  .Pager {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Pager .Buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .Pager button {
    background-color: unset;
    border: 1px solid black;
  }

  .Pager button.active {
    background-color: orange;
  }
</style>