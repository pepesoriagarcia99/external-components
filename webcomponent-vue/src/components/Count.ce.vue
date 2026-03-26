<template>
  <div class="box">
    <h2>HOLA SOY UN CONTADOR EN VUE</h2>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{}>();

const count = ref(0);

const increment = () => {
  count.value++;
};

const setData = (newData: any) => {
  console.log("Setting data vue:", newData);
  increment();
};

defineExpose({
  setData,
});
</script>

<style>
.box {
  border: 1px solid #ccc;
  padding: 10px;
  display: block;
}
</style>
