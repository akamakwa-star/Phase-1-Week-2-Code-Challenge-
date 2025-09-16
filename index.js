fetch("http://localhost:5000/characters")
.then(response => response.json())
.then( (data) => console.log(data))