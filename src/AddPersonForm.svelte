<script>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    let name;
    let age ;
    let beltColor;
    let skills=[];
    const handleSubmit =()=>{
        const person = {
            name,
            age,
            beltColor,
            skills,
            id : Math.random()
        }

        dispatch("addPerson",person);
    }
</script>

<main>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="First Name" bind:value={name}>
        <input type="number" placeholder="age" bind:value={age}>
        <label>skills</label>
        <input type="checkbox" bind:group={skills} value="fighting">fighting<br/>
        <input type="checkbox" bind:group={skills} value="running">running<br/>
        <input type="checkbox" bind:group={skills} value="sneaking">sneaking<br/>

        <label> beltColor</label>

        <select bind:value={beltColor}>
            <option value="black">black</option>
            <option value="orange">orange</option>
            <option value="brown">brown</option>
            <option value="white">white</option>
          </select>

        <button>add peron</button>
        </form>
</main>

<style>

</style>