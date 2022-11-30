<template>
  <q-page class="row items-center justify-evenly"> {{ counter }} </q-page>
</template>

<script lang="ts">
import useAppStore from 'src/stores/app';
import { defineComponent } from 'vue';

type CustomData = {
  counter: number;
};
export default defineComponent<any, any, CustomData>({
  setup() {
    return {};
  },
  data() {
    return {
      counter: 1,
      test: 2,
    };
  },
  watch: {},
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted', this);
  },
  updated() {
    console.log('updated');
  },
  unmounted() {
    console.log('unmounted');
  },
});
</script>
