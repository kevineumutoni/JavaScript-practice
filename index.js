let name="Kevine"
console.log(name)
let cohort="Lovelace"
console.log(cohort)
cohort="AnitaB"
console.log(cohort)
cohort="Ada lab"
console.log(cohort)
console.log(2, "ABC", 3*5, "ABCDEF", 9*9)
console.log("the output of 32 is 10+11 ", 21)
console.log("Hello "+"I am Kevine "+ "I love myself " + "I believe in myself "+ "and God. ")
console.log(name + " is very beautiful")
// practicing numbers and integers in data types in JavaScript
let y = 1.2;
let x= 5;
console.log(x+y)
// practicing booleans in Javascript
let n=true;
let f= false;
console.log(n)
console.log(f)
//Let's try to convert from string to Int
let i="5.9";
let p=7
c=Number(i)
console.log(c)
//Let's try adding int and string
r= "34"
h=12
console.log(r+h)
q=[1,2,4,7,+ 3,4,6,7]
m="9,8,7"
console.log(q+m)
//Let's try to add String and Bool
x=true+" 12"
console.log(x)
d= false+" 23"
console.log(d)
u="10 "+ false
console.log(u)
s="98 " + true
console.log(s)
//lets try adding bool to Integers
e= 34;
g= true;
o=(e+g)
console.log(o)//the output is 35 because true means 1;
y= 56
b= false
w=(y+b)
console.log(w)//The output was 56 because false means 0


//let me practice addition.
j= 6;
l=56
console.log(j+l)  //the output is 35

//Let me practice subtraction
n= 98;
k= 56;
b=(n-k)
console.log(b) //the output is 56

//let me use var

var v=7
var w=45 
console.log(v+w)//the output was 52

//let me practice importing a valuable
let kevine="Umutoni"
var age=21
console.log(`My name is ${kevine} I am ${age}`)

//let me practice adding numbers in square brackets and not in square brackets

var fh= [1,23]
var u=67
console.log(fh+u)

//experimentation to find the type of our data

var num = 23
console.log(num)
var mun = "23"
console.log(mun)
console.log(typeof(mun))
console.log(typeof(num))

//Another practice of knowing conversion

let tax= 400
let price="500"
let uui=Number(tax)+Number(price)
console.log(uui)
//Lets try comparison of numbers
console.log(90==90)
console.log(90>=80)
console.log(90>80)
console.log(90<80)
console.log(90<=80)
console.log(90!=60)
//Let's try comparison of strings
console.log("ABC" == "ABC")
console.log("ABC" == "abc")
console.log("ABC" == "CBA")
//lets try comparison with Booleans
console.log(true== 1)
console.log(false==1)
console.log(true== 0)
//important insights when you use one equal sign there will be a big error, so use 2 okay!!.

//let's practice Strings 

let school = "AkiraChix organisation";
let citizens = String("I love my community");//string literal 
let number1=Number(23);
let success = Boolean(true)
console.log(number1);
console.log(school);
console.log(citizens);
console.log(success)


 // We use .length to know the length of the string 

let str1 = "Hello AkiraChix"
console.log(str1.charAt(0))// we are accessing the first character in our string
console.log(str1.slice(-1)) // we are accessing the last character in  the string
console.log(str1.charAt(11))
console.log(str1.indexOf("C"))

let makerere = "All AkiraChix students will become the presidents of their nations in Jesus name Amen!!"
//log the first and last number and state the index of f and the length of the string.
console.log(makerere.charAt(0));
console.log(makerere.slice(-1));
console.log(makerere.length -1);
console.log(makerere. charAt(20));
console.log(makerere[2]);
console.log(makerere[20]);
console.log(makerere[86]);
console.log(makerere[0]);
console.log(makerere.charAt(35));
console.log(makerere.length -3)
console.log(makerere.slice(2, 20))

let university = "Actually there a bunch of schools in Rwanda  but guess the number one school is AkiraChix"
console.log(university.charAt(2));
console.log(university.charAt(0));
console.log(university.charAt(10));
console.log(university.length -1)
console.log(university.length);
console.log(university.indexOf("q"));
console.log(university.slice(3, 16));
console.log(university.slice(1))// for slice if you don't specify you will not know where to stop
console.log(university.charAt("A"));
console.log(university.slice(-5));
console.log(university.toUpperCase());
console.log(university.toLowerCase());
console.log(university.indexOf("A"));
console.log(university[23])

let newWord = "  Kevine";
console.log(university.concat(newWord))
let beauty = "I am Rwandan, but I am not afraid to say that Rwanda is the beautiful country in the world"
console.log(university.concat(beauty))
let heavy = "luggage to Kenya"
console.log(beauty.concat(heavy))

//let's practice slicing clearly, we use slicing to extract substrings from the string and also copy the string 
let hyperbole = "I love my president Paul Kagame may God bless him till the end may he long live."
console.log(hyperbole.slice(0, 20));
console.log(hyperbole.endsWith(w));
console.log(hyperbole.startsWith("M"))
console.log(hyperbole.endsWith(10))
console.log(hyperbole.endsWith("q"))
console.log(hyperbole.startsWith(m))
console.log(hyperbole.endsWith("."))
console.log(hyperbole.indexOf("I define beauty."))
console.log(hyperbole[12])
console.log(hyperbole.slice(20))
console.log(hyperbole.toUpperCase())
console.log(hyperbole.toLowerCase())
console.log(hyperbole.slice())
console.log(hyperbole.length)
console.log(hyperbole.replace("beauty", "Kevine"))
console.log(hyperbole.indexOf("y"))
console.log(hyperbole.length)

let sleep = "Good morning my beautiful Rwanda you rock!"
console.log(sleep.indexOf("m"))//I am trying to know the index position of m in the string
console.log(sleep.indexOf("k!"))//I am trying to know the index position of k in the string
console.log(sleep.indexOf("morning"))// I am trying to know the index of morning in the string
console.log(sleep.indexOf("Good morning"))//I am trying to know the index of "Good morning"
console.log(sleep.slice(6))//I am trying to extract the substrings from position 6
console.log(sleep.indexOf("beautiful"))//I am trying to know the index of "beautiful" in the string
console.log(sleep.slice(16, sleep.length -2))// I am trying to extract the string starting from index  16 to the whole length to the previous character.
console.log(sleep.slice(16, sleep.length -9))// I am trying to extract the string starting from index 16 to the whole length minus 9 characters.
console.log(sleep.replace("Good", "Hello"))//i am trying to replace hello by Good
console.log(sleep.toUpperCase());//here I am converting to uppercase
console.log(sleep.toLowerCase());
console.log(sleep.length);// I am trying to know the length of the String
console.log(sleep.indexOf("!"));// I am trying to know the indexOf ! in the string
console.log(sleep.charAt(42));// I am trying to know the character at index position 42
console.log(sleep.charAt(44));//I am trying to know the character at index position 44
console.log(sleep.charAt(0));
let herty = " "+ "I love you!";
console.log(sleep.concat(herty));

//Let's go to string which returns array of substrings , It is used to split arrays.
//split divides the string into multiple substrings
console.log(sleep.split(""));
console.log(sleep.split(" "))//it will split based on the blank space and return an array of substrings separated by the blank space, every word in its single quotes because it is an array.
console.log(sleep.split("o"))//It will split from where letter "o is located"
let alphaBet = "ABCDEFGHIKJLMOPQRSTUVWXYZ"
console.log(alphaBet.split("O"))//It will split based where the character is spliting is located then the string with no specified character that is needed will have single quotes with a comma ''.
console.log(alphaBet.split("A"))//The splitted word will be in replaced by '', then the rest will still be grouped together.
console.log(alphaBet.split("Z"));//[ 'ABCDEFGHIKJLMOPQRSTUVWXY', '' ] thats the output its separated from the splitted word 
let pharmacy = "aabbccddeeffjjgghhiikkkkllmmnnooppqqrrssttuuvvwwxxyyzz";
let pharmac = pharmacy.split("k")
console.log(pharmac);
let newPharmacy = pharmacy.split("");
console.log(newPharmacy);
let heryuu= newPharmacy.reverse();
console.log(heryuu);
let flip = heryuu.join();
console.log(flip);

let bag = "I have a lot of books and many different things so most of the times I miss my bag a lot"
let temu = bag.split(" ")
console.log(temu)
let teru = temu.reverse()
console.log(teru)
console.log(teru.join())

console.log(bag.split(", "))
console.log(bag.slice(0, bag.length))
console.log(bag.slice(2, 20))
console.log(bag.slice(10))
console.log(bag.slice(0))
console.log(bag.slice(-1))

//Zaharah 's practice

let come = "lets go to have tea break"
// let zs = come.indexOf("r");
// console.log(zs);
let zs = come.charAt(11);
console.log(zs);
console.log(come.slice(-1))
let tired = "boredom"
let night = String("Hello Kigali")
console.log(night.concat(tired))
//we use charAt and [] e.g 
console.log(tired.charAt(2))
console.log(tired.charAt(6))
console.log(tired.charAt(4))
console.log(tired.slice(-1))
console.log(tired[2])

//we can compare strings  using if statements 
const stringOnes= "ABC"
const stringTwo = "abc"

if (stringOnes < stringTwo){
    console.log("I love JavaScript language")

}
else if(stringOnes > stringTwo){
    console.log("I don't love JavaScript language")

}

else{
    console.log("JavaScript is a  bit hard")
}

//we can also compare some numbers too
 const numeric1 = 80;
 const numeric2 = 80;

 if (numeric1>numeric2){
    console.log("This is  easy bruv")
 }
else if(numeric1<numeric2){
    console.log("I love my nation")
}
else{
    console.log("I am in Kenya Nairobi")
}
console.log(stringTwo.toUpperCase())
//Good job Kevine practice makes perfect.
//let me practice comparing strings are strictly equal to

const strictlyEqualTo = "I love JavaScript"
const strictlyNotEqualTo = "I love drill music"

if (strictlyEqualTo===strictlyNotEqualTo){
    console.log("We did good")
}
else if (strictlyEqualTo!==strictlyNotEqualTo){
    console.log("not that much")
}
else{
    console.log("Okay")
}

// we can use this way to print a string.

const authentication = String(100)
const authentic = String(true)

console.log(typeof authentic)
console.log(authentic)
console.log(typeof authentication)
console.log(authentication)




//objects can store data and has  properties and it can have functions, that's when we call them methods
//we use new then String to create an Object.
const authenticity = new String("electricity")
console.log(typeof authenticity)//its an Object
const stringNew = new String("2 +2");
const stringNew1 = String("2+2");
const newString1 = ("2+2")
const nwString = "4"
const any = 69

// console.log(eval(newString));
//we use eval to execute or evaluate a String
//Instead of converting to  a Number we can use eval function to evaluate the Strings or numbers

console.log(eval(stringNew));
console.log(eval(stringNew1))//it will output 4
console.log(stringNew1);
console.log(newString1)
console.log(Number(newString1))
console.log(Number(nwString))//It returned NaN (not a number)
console.log(String(any))//it brought a String output
//Good job Kevine

//let's go to string templates we use backtick `` characters instead of "" 
console.log("string text line 1\n" + "string text line 2");
//we use \n to log on a new line

//let's try using string interpolation

let abyy = 45;
let yyba = 45;
console.log("I love mathematics "+(abyy+yyba)+" so much")
console.log(`i love coding so much ${abyy+yyba} sometimes`)

let products = "Google Pixel phones because they are very top notch phones"
console.log(`I love ${products.at(-1)}`)//we use at to know the character located at that number we input.
console.log(`I love ${products.slice(-2, -1)}`)//we use slice to extract substrings.
console.log(`I love ${products.indexOf("G")}`);//it will tell me the index position of the character inputed

const story = "The quick brown fox jumps over the lazy dog";
const newStory= story.toLowerCase();
const newUpdatedStory = newStory.split("the").length -1
console.log(newUpdatedStory)
//the input we put in the split brackets is called delimiter()
console.log(products.charAt(10))
console.log(products.at(-4))
console.log(products.charCodeAt("P"))
//NaN means not a number
let concat1 = "Hello world I love you"
let concat2 = "World"
let concat3 = "Hello"
console.log(concat1.concat(" ",concat2 ))
console.log(concat1.startsWith("H"))
console.log(concat2.endsWith("d"))
console.log(concat1.endsWith("f"))
console.log(concat1.includes("d"))
console.log(concat1.includes("l"))
console.log(concat1.indexOf("H"))
console.log(concat1.lastIndexOf("y"))
console.log(concat1.lastIndexOf("Hello"))
console.log(concat1.localeCompare(concat3))
console.log(concat2.localeCompare(concat3))

//padEnd add more spaces at the end
const concat5 = "done"

console.log(concat5.padStart(50, "food"))
console.log("Hello World".padEnd(50, "hello beauty"))
console.log(concat1.repeat(5))
const county = "Kisumu"
console.log(county.replace("Kisumu", "Kenya"))
console.log(concat1.replace("Hello", "Hi"))
//the first is the old value then the next is the new value
console.log(concat1.substr(0,1))
console.log(county.substr(2))
console.log(county.search("s"))
console.log(county.search("K"))

//lets's practice splitting one more time

const reversedString = "Hello"
let splitString = reversedString.split("")
console.log(splitString)
let newReversedString = splitString.reverse()
console.log(newReversedString)
let newJoinString = newReversedString.join()
console.log(newJoinString)
console.log(reversedString.split("").reverse().join())

//Let's use the for loop method 

let forLoop = "Hello Kevine Umutoni" // the name of our string
let looping = ""//It will hold the reversed string 
for (let i = forLoop.length -1; i>=0; i--){
    looping += forLoop[i]
    console.log(looping)
}
console.log(forLoop.length -1)


const DAS = "Hello beautiful Rwanda we miss you!";
let DAAS = ""; // it's better if we use let not const okayy

for (let i = DAS.length - 1; i >= 0; i--) {
    DAAS += DAS[i]; 
    console.log(DAAS);
}

//lets use for loop

let Queen = "Keza Queen";// my variable 
let Keza = "";

for (let k = Queen.length -1; k>=0; k--) {
    Keza += Queen[k]
    console.log(Keza)
}

let newQueen = Queen.split("")
let newKeza = newQueen.reverse()
let newKezaQueen = newKeza.join()
console.log(newKezaQueen)

//reversing using split, join, and reverse

let remote = "UMUTONI"
let etomer= "" // it will hold the new reversed variable

for (let z= remote.length -1; z>=0; z--){
    etomer += remote[z]
    console.log(etomer)
}
let sweetness = "Kigali"
let sweet = ""
for (let u= sweetness.length -1; u>=0; u--){
    sweet += sweetness[u]
    console.log(sweet)
}

for (let s = 0; s<=sweetness.length; s++){
    sweet += sweetness[s]
    console.log(sweet)
}
let getHelp = "My name is \"Kevine\""
let studentNew = "I love my new school \"AkiraChix\""
console.log(studentNew)
console.log(getHelp)

var myNAME;
console.log(typeof myNAME)

let push = ["hello", "world", "!"]
push.push("okay")
console.log(push)
//GOOD JOB KEVINE

//let's go to practicing questions

