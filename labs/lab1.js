//Q1  --------------------------------------
function capitalizeFirst(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

console.log("Q1  --------------------------------------")
console.log(capitalizeFirst("the quick brown fox"))
console.log(capitalizeFirst("hello 123 abc"))
console.log(capitalizeFirst("aaaaaaaaaaaabbbbbbb cc"))
//Q2 --------------------------------------
function max(a, b, c){
    if (a>=b && a>=c){
        return a;
    }
    else if (b>=a && b>=c){
        return b;
    }
    else {
        return c;
        
    }
}

console.log("Q2  --------------------------------------")
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

//Q3  --------------------------------------
function three(str){
    if (str.length <= 3){
        return str;
    }
    
    var first_Section = str.slice(-3);
    var last_Three = str.slice(0, -3);
    
    return last_Three + first_Section;
}

console.log("Q3  --------------------------------------")
console.log(three("Python"));
console.log(three("JavaScript"));
console.log(three("Hi"));

//Q4  --------------------------------------
function angle_Type(angle){
    if (angle > 0 && angle < 90){
        return "Acute Angle";
    }
    else if (angle == 90){
        return "Right Angle";
    }
    else if (angle > 90 && angle < 180){
        return "Obtuse Angle"
    }
    else if (angle ==180){
        return "Straight Angle"
    }
    else{
        return "Invalid Angle"
    }
}

console.log("Q4  --------------------------------------")
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
//Q5  --------------------------------------
