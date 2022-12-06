MODEL -- CONTROLLER -- VIEW 

fetch("http://localhost:9292/sweaters",{
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "",
    size: "",
    is_comfy: "",
    material: ""
  })
})
.then()
.then()



React               Internet Request  Sinatra/Ruby

Javascript Object   JSON              Ruby Hash





