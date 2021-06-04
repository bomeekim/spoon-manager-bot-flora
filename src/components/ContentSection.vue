<template>
  <v-list
    class="rounded-lg"
    flat
  >
    <v-subheader v-if="!!title">
      {{ title }}
    </v-subheader>
    <v-card
      v-if="!removeDefaultCard"
      :class="{ 'default-v-card': !removeDefaultCss }"
      elevation="0"
    >
      <slot name="card" />
    </v-card>
    <slot
      v-else
      name="card"
    />
  </v-list>
</template>

<script>
export default {
  name: 'ContentSection',

  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },

    removeDefaultCss: {
      type: Boolean,
      required: false,
      default: false,
    },

    removeDefaultCard: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>
