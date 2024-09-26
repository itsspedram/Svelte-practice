<script>
export let active;
export let items;
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

</script>

<div class="tabs">
    <ul>{#each items as item }
        <li  class:active={item === active} on:click={()=> dispatch("ChangeTab",item)} >{item} </li>
    {/each}
    </ul>

</div>

<style>
.tabs{
    margin-bottom: 40px;
}
ul{
    display: flex;
    justify-content: center;
    list-style: none;
}
li{
    margin: 0 16px;
    color: #666;
    cursor: pointer;
}
 .active { 
    color: #d91b42;
    border-bottom: 1px solid #d91b42;
 }
</style>