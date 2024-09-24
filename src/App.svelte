<script>
  import Modal from "./Modal.svelte";
  import AddPersonForm from "./AddPersonForm.svelte";


 let showModal = false

let people = [
    { name: 'yoshi', beltColor: 'black', age: 25, id: 1 },
    { name: 'mario', beltColor: 'orange', age: 45, id: 2 },
    { name: 'luigi', beltColor: 'brown', age: 35, id: 3 }
  ];
  const deleteClick = (id)=>{
    people = people.filter((person)=>person.id !=id )
  }

  const handleClick =()=>{
    showModal = !showModal
  }

  const addPerson =(e)=>{
   const person = e.detail;
   people = [...people,person];
   showModal = false
  }

</script>

<main>
  <button on:click={handleClick}>add person</button>
  <Modal  isPromo={true} {showModal} on:click={handleClick} >
<h3 slot="title">add a new person</h3>

   <AddPersonForm on:addPerson={addPerson}/>
  </Modal>
{#each people as person (person.id) }
  <h3>{person.name}</h3>
  {#if person.beltColor ==="black" }
    <strong>He IS A MASTER</strong>
    {:else if person.beltColor=== "brown"}
<strong>HE IS NOT A NOOB</strong>
{:else}
<small>we got a noob here</small>
  {/if}
  <h4>{person.age} years old with {person.beltColor} belt</h4>
  <button on:click={()=>deleteClick(person.id)}>delete </button>
  {:else}
  <h1>its empty :))</h1>
{/each}
</main>

<style>
main{
  margin: 10% auto !important;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
