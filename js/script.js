

function convertToRoman(originalNum){
  var Romans = ["M","D","C","L","X","V","I"];
  var RomanAmounts =[1000,500,100,50,10,5,1];

  var valueLeft = originalNum;
  var resultingRoman = ""
  while (valueLeft>0) {

      //is num larger than 1000?
      while (valueLeft >= 1000){
        //if so, subtract 1000 from valueLeft
        valueLeft = valueLeft - 1000;
        //add M to resultingRoman
        resultingRoman += "M";
      }
      //is num larger than 500?
      while (valueLeft >= 500){
        //if so, subtract 500 from valueLeft
        valueLeft = valueLeft - 500;
        //add D to resultingRoman
        resultingRoman += "D";
      }
      //is num larger than 100?
      while (valueLeft >= 100){
        //if so, subtract 100 from valueLeft
        valueLeft = valueLeft - 100;
        //add C to resultingRoman
        resultingRoman += "C";
      }
      //is num larger than 50?
      while (valueLeft >= 50){
        //if so, subtract 50 from valueLeft
        valueLeft = valueLeft - 50;
        //add L to resultingRoman
        resultingRoman += "L";
      }
      //is num larger than 10?
      while (valueLeft >= 10){
        //if so, subtract 10 from valueLeft
        valueLeft = valueLeft - 10;
        //add X to resultingRoman
        resultingRoman += "X";
      }
      //is num larger than 5?
      while (valueLeft >= 5){
        //if so, subtract 5 from valueLeft
        valueLeft = valueLeft - 5;
        //add V to resultingRoman
        resultingRoman += "V";
      }
      //is num larger than 1?
      while (valueLeft >= 1){
        //if so, subtract 1 from valueLeft
        valueLeft = valueLeft - 1;
        //add I to resultingRoman
        resultingRoman += "I";
      }
      debugger;
      resultingRoman = resultingRoman.replace("XIIII","XIV");
      resultingRoman = resultingRoman.replace("VIIII","IX");
      resultingRoman = resultingRoman.replace("IIII","IV");
      resultingRoman = resultingRoman.replace("LXXXX","XC");
      resultingRoman = resultingRoman.replace("CXXXX","CXL");
      resultingRoman = resultingRoman.replace("XXXX","XL");
      resultingRoman = resultingRoman.replace("MCCCC","MCD");
      resultingRoman = resultingRoman.replace("DCCCC","CM");
      resultingRoman = resultingRoman.replace("CCCC","CD");

  } // end of while

  console.log("start:", originalNum, "results to:", resultingRoman);
}

console.log(convertToRoman(2349));
console.log(convertToRoman(4));
console.log(convertToRoman(9));
console.log(convertToRoman(14));
