// d3.json("samples.json").then(function(data){
//     console.log(data);
// });


// show metadata for the first person in the set. object.entries puts all the
// information in arrays and for each applies the next step to all of those arrays
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});