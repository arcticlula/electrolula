<script setup lang="ts">
</script>

<template>
  <n-card >
    <n-thing>
      <template #header>
        <slot name="header"></slot>
      </template>
      <template #header-extra>
        <b><slot name="headerExtra"></slot></b>
      </template>
      <template #description>
        <slot name="description"></slot>
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </n-thing>
  </n-card>
</template>

<style scoped lang="sass">

</style>
