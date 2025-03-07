<script>
    import {onMount, onDestroy} from "svelte"
  import pollStore from "../store/store"

    import PollDetails from "./pollDetails.svelte";


</script>
<div class="poll-list"> 
    {#each $pollStore as poll}
        <div>
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