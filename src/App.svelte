<script>

let people = [
    { name: 'yoshi', beltColour: 'black', age: 25, id: 1 },
    { name: 'mario', beltColour: 'orange', age: 45, id: 2 },
    { name: 'luigi', beltColour: 'brown', age: 35, id: 3 }
  ];
  const handleClick = (id)=>{
    people = people.filter((person)=>person.id !=id )
  }

</script>

<main>
{#each people as person (person.id) }
  <h3>{person.name}</h3>
  <h4>{person.age} years old with {person.beltColour} belt</h4>
  <button on:click={()=>handleClick(person.id)}>delete </button>
  {:else}
  <h1>its empty :))</h1>
{/each}
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
