<script>
let fields= {question:"",answerA:"",answerB:""}
import Button from "./Button.svelte";
</script>

<form on:submit|preventDefault={()=>console.log("oops")}>
    <div class="form-field">
        <label for="question">question</label>
        <input type="text" id="question">
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input type="text" id="answer-a">
    </div>
    <div class="form-field">
        <label for="answer-b">Answer b</label>
        <input type="text" id="answer-b">
    </div>
        <Button type='secondary' flat={true} inverse={true}>add poll</Button>
</form>

<style>
  form{
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field{
    margin: 18px auto;
  }
  input{
    width: 100%;
    border-radius: 6px;
  }
  label{
    margin: 10px auto;
    text-align: left;
  }
</style>