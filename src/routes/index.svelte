<script context="module" lang="ts">
  export const prerender = true;

  /**
   * TODO:
   *
   * - Create store for talking points
   * - on plus icon click add a new talking point to store as an array entry
   * - display entry on card inside the talking point column
   * - create a unique id for each entry
   *
   * - update ?????
   *
   * - Delete talking point from store
   * - on the cross icon on the talking point on pressed
   * - bring up a tooltip/modal to confirm the deletion
   * - if yes is selected
   * - removed talking point from store
   *
   * -
   * */
</script>

<svelte:head>
  <title>Lean coffee app</title>
</svelte:head>

<div class="grid grid-cols-3 gap-4">
  <!-- <div class="flex"> -->
  <h3 class="text-lg font-bold">
    Talking points
    <button><i class="ph-plus" /> </button>
  </h3>
  <h3 class="text-md font-bold">Current point</h3>
  <h3 class="text-md font-bold">Finished points</h3>
  <!-- </div> -->

  <!-- Create a talking point card button -->
  <div class="card bg-primary p-4">
    <div class="text-md font-bold">Create discussion point</div>
    <!-- plus icon -->
  </div>

  <!-- Create  -->
  <div class="card" />
</div>
