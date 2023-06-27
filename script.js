var name;
var students = [];
var operation;
var input = prompt("would you like to start the web app? Y/N");

function initPrompt(){
    operation = prompt("What operation to perform? add,remove,display,quit");

    switch(operation){
        case "display":
            display();
            break;
    
        case "add":
            addName();
            break;

        case "remove":
            removeName();
            break;

        case "quit":
            Exit();  
            break;  
        
        default:
            alert("Invalid Input!");
            initPrompt();
            break;
     
    
    }
}

function display(){
    console.log("Displaying array........");
    for(var i=0; i<students.length; i++){
        console.log(students[i]);

    }
    initPrompt();

}

function addName(){
    name = prompt("Enter the name to add: ");
    students.push(name);
    initPrompt();
}

function removeName(){
    name = prompt("Enter the name to remove: ");
    students.pop(name);
    initPrompt();
}

if(input=="Y"){

    initPrompt();   
    
}

else{
    Exit();
}


