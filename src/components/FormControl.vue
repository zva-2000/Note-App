<template>
  <form class="radioGroup">
    <slot />
  </form>
</template>

<style scoped lang="scss">
// @use 'src/styles/mixins';
.radioGroup {
  display: flex;
  border-radius: var(--border-radius-l);
  background-color: var(--color-secondary-98);
  align-items: center;
  height: 32px;
  margin-bottom: 24px;
}
</style>
