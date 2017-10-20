    function check_prime() {
          var input = document.getElementById("enteredNumber").value;
              var number = parseInt(input);
                    

            if (isNaN(number)) {
           alert("Oops! Please enter a valid number.");
                document.getElementById("enteredNumber").value="";
                document.getElementById("answer").innerHTML =  "";
                document.getElementById("enteredNumber").focus();
                
            }
                     
            else if (input.length === 0) {
      alert("Please enter a valid input");
                document.getElementById("enteredNumber").focus();
               
            }
           
           else if (!isNaN(number)) {
                            var divisors = is_perfect(number);
                            if (divisors) {
                                document.getElementById("answer").innerHTML = "Congratulations! " + number + " is a perfect number.";
                          alert("Congratulations! " + number + " is a perfect number. The divisors are: " + divisors.toString() + ".") ;

                               
                            }
                            else {
                                document.getElementById("answer").innerHTML = "I'm sorry! " + number + " is not a perfect number."
                            }
                        }
                        else {
                            document.getElementById("answer").innerHTML = "Please enter a number.";
                        }
                    }
                   
                   
function is_perfect(number) {
    var temp = 0;
    var divisors = [];
    for(var i=1;i<=number/2;i++) {
        if (number%i === 0) {
            divisors.push(i);
            temp += i;
        }
    }  

    return temp === number ? divisors : null;
 }

      
        
        function clear_textbox(){
          document.getElementById("answer").innerHTML =  "";
          document.getElementById("enteredNumber").value="";
          document.getElementById("enteredNumber").focus();
         
        }
    
