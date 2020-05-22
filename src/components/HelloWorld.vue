<template>
  <div class="hello">
    <h1>{{ asyncComputedMethod }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AsyncComputed from "vue-async-computed-decorator";

@Component
export default class HelloWorld extends Vue {
  showChild: boolean = true;

  @Prop() private msg!: string;

  @AsyncComputed() async asyncComputedMethod() {
    return new Promise(resolve => setTimeout(() => resolve("resolve"), 1000));
  }
}
</script>

<style scoped>
</style>
