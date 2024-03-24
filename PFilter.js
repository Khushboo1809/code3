let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image:"white-shirt.jpeg",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image:"short-skirt.jpeg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image:"watch.jpeg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "149",
            image:"black-jacket.jpg",
        },
        {
            productName: "Stylish Pink Trouser",
            category: "Bottomwear",
            price: "169",
            image:"pink-pants.jpg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "149",
            image:"brown-jacket.jpg",
        },
        {
            productName: "Comfy Grey Pants",
            category: "Bottomwear",
            price: "139",
            image:"comfy-pants.jpg",
        },
    ],
};

for (let i of products.data){
    // create card
    let card = document.createElement("div");
    // card should have a category
    card.classList.add("card",i.category,"hide");

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container= document.createElement("div");
    container.classList.add("container");

    // product name
    let name = document.createElement("h5");
    name.classList.add("productname");
    name.innerText= i.productName.toUpperCase();
    container.appendChild(name);

    // price
    let price = document.createElement("h6");
    price.innerText= "$"+i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

// parameter passed from button (parameter same as category)
function filterProduct(value){
    // button class code
    let buttons = document.querySelectorAll(".btnGroup");
    buttons.forEach((buttons) => {
        // check if value equals innerText
        if (value.toUpperCase() == buttons.innerText.toUpperCase()){
            buttons.classList.add("active");
        }
        else{
            buttons.classList.remove("active");
        }   
        }
        
   
    )};

// select all cards
let elements = document.querySelectorAll(".card");
// loop through all cards
elements.forEach((element) => {
    // display all cards on 'all' button click
    if(value == "all"){
        element.classList.remove("hide");
    }
    else{
        // check if element contains category class
        if(element.classList.contains(value)){
            // display element based on category
            element.classList.remove("hide");
        }
        else{
            // hide other elements
            element.classList.add("hide");
        }
    }
});

document.getElementById("search").addEventListener("click", () =>{
    let searchInput =document.getElementById("SearchInput").value;
    let element = document.querySelectorAll(".productName");
    let card =document.querySelectorAll(".card"); 
    console.log(element);
    console.log(card);
    element.forEach((element, index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            card[index].classList.remove("hide");
        }
        else{
            card[index].classList.add("hide"); 
        }
    });

    window.onload = () => {
        filterProduct("Watch");  
    };

});

