1) What is the difference between null and undefined?
   
Answer : 
undefined : variable is declared but has no value.
null : intentional no value assigned by the programmer.
 
1) What is the use of the map() function in JavaScript? How is it different from forEach()?

Answer:

map()
Purpose: Transforms each element of an array and returns a new array with the transformed values.
Returns: A new array of the same length.
Does not modify the original array.

forEach()

Purpose: Executes a function on each element of an array.
Returns: undefined (does not return a new array).
Used mainly for: Side effects like logging, updating DOM, or modifying existing array.

3) What is the difference between == and ===?
   
Answer:

== (Equality)

a. Checks value only.
b. Performs type coercion if types are different.

=== (Strict Equality)

a. Checks value AND type.
b. No type coercion.

4) What is the significance of async/await in fetching API data?

Answer: async/await is used in JavaScript to handle asynchronous operations (like fetching data from an API) in a more readable and synchronous-looking way.

5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Answer: 

a. Scope

Scope determines where a variable is accessible in your code. In JavaScript, there are mainly three types of scope:

b. Global Scope

Variables declared outside any function or block have global scope. Accessible anywhere in the code.

c. Function Scope

Variables declared inside a function are only accessible within that function. They cannot be accessed outside the function.