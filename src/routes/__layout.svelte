<script lang="ts">
  import "../app.css";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Header />

<main class="container mx-6">
  <slot />
</main>

<Footer />
