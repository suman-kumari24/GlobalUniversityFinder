//  TO PRINT LIST OF COLLEGES OF A COUNTRY 
let url = "http://universities.hipolabs.com/search?name=";
let btn =document.querySelector("button");
btn.addEventListener("click",async()=>{
let country = document.querySelector("input").value;
console.log( country); 
let colleges = await getcolleges(country);
console.log(colleges);
show(colleges);
} );
function show(colleges){
  let list = document.querySelector("#list");

  for( college of colleges){
    console.log(college.name);
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}

async function getcolleges(country){
try{
  let res = await axios.get(url+country);
  return res.data;
}catch(err){
  console.log("errorrrr....",err);
  return[];
}
}