{/* <li class = box>
    <div class ="heading">
        <img src=""
            alt="">
        <h2>
            Name              
        </h2> 
    </div> 
    <p>
        description
    </p>  
    <button>
        Learn More!
    </button>
</li> */}

let ul = document.querySelector('li');

got.houses.forEach((house) => {
    let li = document.createElement('li');
    li.classList.add('box');
    let div = document.createElement('div');
    div.classList.add('heading');
    let img = document.createElement('img');
    img.src = people.image;
    img.alt = people.name;
    let h2 = document.createElement('h2');
    h2.innerText = person.name;
    let p = document.createElement('p');
    p.innerText = person.description;
    let button = document.createElement('button');
    button.textContent = "Learn More";
    button.append(a);
    div.append(img,h2);
    li.append(div,p,button);
    ul.append(li);
})

let ul = document.querySelector("li");
got.houses.forEach((house) => {
    let li = document.createElement("li");
    li.classList.add("box");
    let div  = document.createElement("div");
    div.classList.add("heading");
    let img = document.createElement("img");
    img.src = people.image;
    img.alt = people.name;
    let h2 = document.createElement("h2");
    h2.innerText = person.name;
    div.append(img,h2);
    let p = document.createElement("p");
    p.innerText - people.description;
    let a = document.createElement("a");
    a.href = person.wikiLink;
    let button = document.createElement("button");
    button.textContent = "Learn more";
    a.append(button);
    div.append(img,h2);
    li.append(div,p,a);
    ul.append(li);
    });
});