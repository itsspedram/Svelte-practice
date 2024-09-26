<script>
import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
  import Tabs from "./components/Tabs.svelte";

  let items = ["Current polls", "Add New Poll"]
  let active ="Current polls"

  const ChangeTab =(e)=>{
    active = e.detail
  }
</script>

<Header/>
<main>
  <Tabs {active} {items} on:ChangeTab={ChangeTab}/>
  {#if active==="Current polls"}
    <div>I am the Current</div>
    {:else if active==="Add New Poll"}
    <div>I am other</div>
  {/if}
</main>
<Footer/>

<style>
    	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
