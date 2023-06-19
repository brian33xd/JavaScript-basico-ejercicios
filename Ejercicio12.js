 function fibonacci(limite) {
    const array= [1,2];
for (let i= 2; i<= limite; i++)
{
    array.push(array[i-1] + array[i-2]);
}
    return array
 }
 

 const array = fibonacci(6)
 console.log(array)