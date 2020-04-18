function myfunction(paremeter){
    let arrey=[];
    for(i=1;i<=paremeter;i++){
        if (i % 5===0 && i % 3 ===0 && i % 2===0 ){
            arrey.push("yu-gi-oh");
        } else if (i % 2===0 && i % 5===0){
            arrey.push("yu-oh");
        }
        else if (i % 3===0 && i % 5===0){
            arrey.push("gi-oh");
        }
        else if (i % 2===0 && i % 3===0){
         arrey.push ("yu-gi");
        }
        else if(i % 2===0){
            arrey.push("yu");
        }
        else if (i % 3===0){
            arrey.push("gi");
        }
        else if(i % 5===0){
            arrey.push("oh");
        }
        else {
            arrey.push(i);
        }
    }
    console.log(arrey);
}
myfunction(100);
myfunction(30);