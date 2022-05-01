"use strict";
import {GitHubRepository} from './githubRepo.js';
let dummyCardName = "dummy head node";
let dummyCardDescription = "A circular doubly linked list eliminates special cases for insertion and deletion";
let dummyCardUrl = "#";
//dummy card 
const dummyCard = new GitHubRepository(dummyCardName, dummyCardDescription, dummyCardUrl);
//listHead references dummyCard; don't move it 
const listHead = dummyCard;
//another object called curr also references dummyCard; it will moving forward; can set it to reference listHead and it 
//would mean the same thing
let curr = dummyCard;
//let the dummy card's next and prev references point to itself when circular linked list is empty 
dummyCard.setNextRepository(dummyCard);
dummyCard.setPreviousRepository(dummyCard);
//test 
let objarray = [];
objarray.push(new GitHubRepository("repo1", "This is repo 1", "This is url1"));
objarray.push(new GitHubRepository("repo2", "This is repo 2", "This is url 2"));
//now loop the objarr and make the doubly circular linked list 
for (let i = 0; i < objarray.length; i++) {
    let aRepo = objarray[i];
    aRepo.setPreviousRepository(curr);
    curr.setNextRepository(aRepo);
    //using  exclamation mark or the non-null assertion operator in TypeScript to tell that the assign value 
    //is 100% not undefined in this case
    curr = curr.getNextRepository();
}
curr.setNextRepository(listHead);
listHead.setPreviousRepository(curr);
curr.convertToCard();
const nextBtn = document.createElement("button");
const previousBtn = document.createElement("button"); 
nextBtn.innerText = "See Next Project";
previousBtn.innerText = "See Previous Project";
nextBtn.className = "btn btn-primary";
previousBtn.className = "btn btn-primary";
nextBtn.addEventListener("click", function(){
    curr = curr.getNextRepository();
    curr.convertToCard();
});
previousBtn.addEventListener("click", function(){
    curr = curr.getPreviousRepository();
    curr.convertToCard();
});
document.getElementsByClassName("container")[0].appendChild(previousBtn);
document.getElementsByClassName("container")[0].appendChild(nextBtn);
