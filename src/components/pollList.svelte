<script>
    export let polls = []
    import PollDetails from "./pollDetails.svelte";

</script>
<div class="poll-list">
    {#each polls as poll}
        <div>
            <h3>{poll.question}</h3>
            <PollDetails {poll}/>

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