<script lang="ts">
  import { page } from "$app/stores";
</script>

<header class="flex justify-between py-6 px-10">
  <div class="flex">
    <div class="flex items-center mr-4">
      <a href="https://kit.svelte.dev">
        <svg
          role="img"
          aria-labelledby="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="21"
          viewBox="0 0 45 21"
          ><title id="logo">Ableton Homepage</title><path
            d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
          /></svg
        >
      </a>
    </div>
    <nav class="flex justify-center">
      <ul class="flex">
        <li class:active={$page.path === "/"}>
          <a class="link" sveltekit:prefetch href="/">Live</a>
        </li>
        <li class:active={$page.path === "/about"}>
          <a class="link" sveltekit:prefetch href="/push">Push</a>
        </li>
        <li class:active={$page.path === "/link"}>
          <a class="link" sveltekit:prefetch href="/link">Link</a>
        </li>
        <li class:active={$page.path === "/shop"}>
          <a class="link" sveltekit:prefetch href="/shop">Shop</a>
        </li>
        <li class:active={$page.path === "/packs"}>
          <a class="link" sveltekit:prefetch href="/packs">Packs</a>
        </li>
        <li class:red={$page.path === "/help"}>
          <a class="link" sveltekit:prefetch href="/help">Help</a>
        </li>
        <!-- TODO: Add plus svg/setup state for dropdown -->
        <li class:active={$page.path === "/todos"}>
          <a class="link" sveltekit:prefetch href="/help">More</a>
        </li>
      </ul>
    </nav>
  </div>

  <ul class="flex items-center">
    <li class:active={$page.path === "/"}>
      <a sveltekit:prefetch href="/">Try Live for free</a>
    </li>
    <li class:active={$page.path === "/about"}>
      <a sveltekit:prefetch href="/push">Log in or register</a>
    </li>
  </ul>
</header>
<div class="h-0 border-t-2 border-gray-200 w-full" />
