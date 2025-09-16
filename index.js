//we are declaring animalList and animalDetails
const animalList = document.getElementById("animal-list")
const animalDetails = document.getElementById("animal-details")

// fetching data from db.json then getting the response
fetch("http://localhost:3000/characters")
.then(response => response.json())
.then( (data) => console.log(data))

//we want to perform a function that loops through arrays
function seeAnimals(animals){
    // we will loop through each element using array method
    animals.forEach(animal => {
    //we want to create an element within the html document using the DOM manipulation
    const li = document.createElement('li')
        //we want to listen this element as we click it through
        li.addEventListener('click', () => animaldetail(animal))
        // we want to add the li element 
        animalList.appendChild('li') 

    });
}