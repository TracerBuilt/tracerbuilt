<script>
  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style global>
  @import "../styles/global.scss";
</style>
