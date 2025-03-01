<script>
    export let polls = []

</script>
<div class="poll-list">
    {#each polls as poll}
        <div>
            <h3>{poll.question}</h3>
            <div>
                <span>{poll.answerA}</span>
                <span>{poll.voteA}</span>
            </div>
            <div>
                <span>{poll.answerB}</span>
                <span>{poll.voteB}</span>
            </div>
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