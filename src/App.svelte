<script>

  let name = "esi"
  let counter = 0

  const countUp = ()=>{
    counter++;
  }
</script>

<main>
<h1>Hello my name is {name}</h1>
<input type="text" bind:value={name}>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
