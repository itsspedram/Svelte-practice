import { writable } from "svelte/store";

const pollStore = writable(
    [{question:"what is your name",answerA:"what da",answerB:"helllll",voteA:12,voteB:55, id:1}]  
);

export default pollStore;