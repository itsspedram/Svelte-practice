<script>
 let showModal = false

let people = [
    { name: 'yoshi', beltColour: 'black', age: 25, id: 1 },
    { name: 'mario', beltColour: 'orange', age: 45, id: 2 },
    { name: 'luigi', beltColour: 'brown', age: 35, id: 3 }
  ];
  const deleteClick = (id)=>{
    people = people.filter((person)=>person.id !=id )
  }
  import Modal from "./Modal.svelte";

  const handleClick =()=>{
    showModal = !showModal
  }

</script>

<main>
  <button on:click={handleClick}>show modal</button>
  <Modal message="Im a props value" isPromo={true} {showModal} on:click={handleClick} />
{#each people as person (person.id) }
  <h3>{person.name}</h3>
  {#if person.beltColour ==="black" }
    <strong>He IS A MASTER</strong>
    {:else if person.beltColour=== "brown"}
<strong>HE IS NOT A NOOB</strong>
{:else}
<small>we got a noob here</small>
  {/if}
  <h4>{person.age} years old with {person.beltColour} belt</h4>
  <button on:click={()=>deleteClick(person.id)}>delete </button>
  {:else}
  <h1>its empty :))</h1>
{/each}
</main>

<style>

</style>
