<template>
  <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  props:['type', 'modelValue'],
}
</script>

<style>
input {
    height: 30px;
}
</style>