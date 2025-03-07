<script>
    import {onMount, onDestroy} from "svelte"
  import pollStore from "../store/store"

    export let polls = []
    import PollDetails from "./pollDetails.svelte";


    const unsub = pollStore.subscribe(value=>{
        polls = value
    })

    onDestroy(()=>{
        unsub()
    })
</script>
<div class="poll-list">
    {#each polls as poll}
        <div>
            <h3>{poll.question}</h3>
            <PollDetails {poll} on:vote/>

        </div>
    {/each}

</div>
<style> 
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>