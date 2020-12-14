var counter = 0;

$("button").click(function(){
        $(".result").empty();
 var answer1 = $(".talkative").val().toLowerCase();
var answer2 =$(".gender").val().toLowerCase();
    
    if(answer1 > 5 && answer2 === "male") { 
        $(".result").append("<h1>Naruto Uzumaki</h1>");
        $(".result").append("<img class='charater' src='https://upload.wikimedia.org/wikipedia/en/9/9a/NarutoUzumaki.png'>"); 
          }
    
   else if(answer1 > 5 && answer2 === "female") {
        $(".result").append("<h1>Sakura Haruno</h1>");
       $(".result").append("<img class='charater' src='https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDcxMjI2NF9zY3JlZW5fMF8xNTEzNTEzMjU4XzA3NA/screen-0.jpg?fakeurl=1&type=.jpg'>"); 
          }
    
    else if(answer1 < 5 && answer2 === "female") {
        $(".result").append("<h1>Hyuuga Hinata</h1>");
        $(".result").append("<img class='charater' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO5t2-PbY8VLCkpUy11OyeXIlUmsoIt6jxULSWia58f6xOd1QuWg8MY2WA-igSRApm0IAUGdVFyMhatKqWD03ZvDGPd3IPvpe0w&usqp=CAU&ec=45732300'>"); 
          }
    
    else if(answer1 < 5 && answer2 === "male") {
        $(".result").append("<h1>Sasuke Uchiha</h1>");
        $(".result").append("<img class='charater' src='https://i.pinimg.com/originals/4a/50/e9/4a50e93c205e7f14ea5385fb792d1e49.png'>"); 
          }

      counter = counter +1;
    $(".counter").text("This quiz has been taken "+ counter + " times");
    
});


