function convertToRoman(originalNum){

  var valueLeft = originalNum;
  var resultingRoman = "";
  while (valueLeft>0) {

      //is num larger than 1000?
      while (valueLeft >= 1000){
        valueLeft = valueLeft - 1000;
        resultingRoman += "M";
      }
      //is num larger than 500?
      while (valueLeft >= 500){
        valueLeft = valueLeft - 500;
        resultingRoman += "D";
      }
      //is num larger than 100?
      while (valueLeft >= 100){
        valueLeft = valueLeft - 100;
        resultingRoman += "C";
      }
      //is num larger than 50?
      while (valueLeft >= 50){
        valueLeft = valueLeft - 50;
        resultingRoman += "L";
      }
      //is num larger than 10?
      while (valueLeft >= 10){
        valueLeft = valueLeft - 10;
        resultingRoman += "X";
      }
      //is num larger than 5?
      while (valueLeft >= 5){
        valueLeft = valueLeft - 5;
        resultingRoman += "V";
      }
      //is num larger than 1?
      while (valueLeft >= 1){
        valueLeft = valueLeft - 1;
        resultingRoman += "I";
      }
      //special case replacements
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

  console.log("The number", originalNum, " when converted to Roman numerals is: ", resultingRoman);
}

//test cases for numbers that are tricky
console.log(convertToRoman(2349));
console.log(convertToRoman(2000));
console.log(convertToRoman(2017));
console.log(convertToRoman(4));
console.log(convertToRoman(9));
console.log(convertToRoman(14));
