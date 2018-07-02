let add=function(...arr)
{   
    let sumRest=0;

    for(let i=0;i<arr.length;i++)
    {
        sumRest+=arr[i];
    }

    return sumRest;
}

console.log(add(1,2,3,4,5));
console.log(add(...[1,2,3,4]));
console.log(add(1,2,3,4,...[1,2,3]));
console.log(add(...[1,2,3,4],...[1,2,3,4]));
console.log(add(...[1,2,3,4],1,1,1));
