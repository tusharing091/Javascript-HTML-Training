var obj1={
    name:"Tushar",
    id:"IO979",
    type:"Dev",
    eid:978,
       
}

var obj2={
    name:"XYZ",
    id:"IO---",
    type:"Tester",
    eid:979
}
var counter=0;
if(Object.keys(obj1).length>=Object.keys(obj2).length)
{
    checkSame(obj1,obj2,Object.keys(obj1).length);
}
else{
    checkSame(obj2,obj1,Object.keys(obj2).length);
}

function checkSame(obj1,obj2,length)
{
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            counter++;
            
        }
    }
    if(length===counter)
    {
          console.log("YAY! Same object");  
    }
    else{
        console.log("Not the same object");
    }

}


