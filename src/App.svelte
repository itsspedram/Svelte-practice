<script>
import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
  import Tabs from "./components/Tabs.svelte";
  import NewPollForm from "./components/newPollForm.svelte";
  import PollList from "./components/pollList.svelte";

  let items = ["Current polls", "Add New Poll"]
  let active ="Current polls"
  let polls = [{question:"what is your name",answerA:"what da",answerB:"helllll",voteA:12,voteB:55, id:1}]  
  const ChangeTab =(e)=>{
    active = e.detail
  }
  const handelAdd = (e)=>{
    const poll= e.detail
    polls = [poll,...polls]
    active = "Current polls"
  }
  const handelVote =(e)=>{
    const {answer,id} = e.detail
    const copiedPolls = [...polls]
    const poll = copiedPolls.find(p=>p.id===id)
    if(answer==="a"){
      poll.voteA++ 
    }
    if(answer==="b"){
      poll.voteB++
    }
    polls = copiedPolls
  }
</script>

<Header/>
<main>
  <Tabs {active} {items} on:ChangeTab={ChangeTab}/>
  {#if active==="Current polls"}
    <PollList {polls}  on:vote={handelVote}/>
    {:else if active==="Add New Poll"}
      <NewPollForm on:add={handelAdd}/>
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
