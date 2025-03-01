<script>
  import {createEventDispatcher} from "svelte";
import Button from "./Button.svelte";

let fields= {question:"",answerA:"",answerB:""}
let errors= {question:"",answerA:"",answerB:""}
let isValid = false

let dispatch = createEventDispatcher()

const submitHandler = ()=>
{
  isValid = true
  if(fields.question.trim().length < 5)
  {
    errors.question = "question should be at least 5 characters long"
    isValid = false
  } else {
    errors.question = ""
  }
  if(fields.answerA.trim().length<1)
  {
    errors.answerA = "answer A should be at least 1 character long"
    isValid = false
  } else {
    errors.answerA = ""
  }
  if(fields.answerB.trim().length<1)
  {
    errors.answerB = "answer B should be at least 1 character long"
    isValid = false
  } else {
    errors.answerB = ""
  }
  if(isValid)
  {
    let poll = {...fields , voteA:0,voteB:0,id:Math.random()}
    dispatch("add",poll)
  }
}
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>

    </div>
    <div class="form-field">
        <label for="answer-b">Answer b</label>
        <input type="text" id="answer-b"  bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>

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
  .error{
    color: red;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
</style>