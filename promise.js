//pending , fullfilled, rejected
const p1 = fetch("https://api.github.com/users?per_page=20");
const p2 =p1.then((response)=>{
  return response.json();
})

p2.then ((data)=>{
  console.log(data);
})


fetch("https://api.github.com/users?per_page=20")
.then ((reponse)=>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})

