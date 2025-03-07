<script>
  import pollStore from "../store/store"
  import {slide,fade, scale} from "svelte/transition"
  import {flip} from "svelte/animate"

    import PollDetails from "./pollDetails.svelte";


</script>
<div class="poll-list"> 
    {#each $pollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
            <h3>{poll.question}</h3>
            <PollDetails {poll} />

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