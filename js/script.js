// let name="Anjali";
// const roll =602;
// let developer=true;
// iD=100;


// console.log("Name:", name);
// console.log("roll no:", roll);
// console.log("developer:", developer);
// console.log("iD",iD);

// let a= 10
// let b= 5

// console.log("The multiplication is:", a*b);
// console.log("The substraction is:", b-a);
// console.log("The addtition is:", a+b);
// console.log("Division:", a/b);



// let students={
//     fullName : "Anjali",
//     roll_Num : 20,
//     iD : 100,
// }



//function to add two numbers

function addition(a,b) {
    return a+b;
}

//function to sub two numbers

function substraction(a,b) {
    return a-b;
}

//function to multipply 
function multiplication(a,b) {
    return a*b;
}

    //function to divide

    
function Division(a,b) {
        if (b===0) {
            return "error : division by zero is not allowed ";
            
        }
        return a/b;



    }

    





function calculator() {
    let num1 =parseFloat(prompt("enter the first number "));
    let num2 =parseFloat(prompt("enter the second number "));
    let operator = prompt("enter the operator ");

    let result;


    if (operator === "+"){
        result = addition(num1,num2);
        
    }
    
    else if (operator ==="-") {
        result = substraction(num1,num2);
        }
    else if(operator==="*"){
        result = multiplication(num1,num2);

    }
    else if(operator==="/"){
        result = Division(num1,num2);

    }
    else{
        console.log("Invalid operator. please try again.");
            return;
            
    }

    console.log(`The result of ${num1} ${operator} ${num2} is : ${result}`); 

    alert(`The result of ${num1} ${operator} ${num2} is : ${result}`);
}

calculator()

