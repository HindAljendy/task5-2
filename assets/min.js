const result=fetch('https://dummyjson.com/products?limit=6').then(function(result){
    return result.json();
}).then(function(result){
    displayData(result.products);
})

function displayData(arr){
    arr.forEach(function(item) {
        const wrapper =document.querySelector(".wrapper"); 
        const left_arrow =document.querySelector(".fa-chevron-left");
        const ul =document.querySelector(".slider");
        const card=document.createElement("li");
        card.classList='card';
        const div1=document.createElement("div");
        div1.classlist='img_card';
        const image=document.createElement("img");
        image.classList='card-img-top';
        image.src=item.images[0];
        const div2=document.createElement("div");
        div2.classList='card-body text-center';
        const h5=document.createElement("h5");
        h5.classList='card-title';
        h5.innerText=item.title;
        const p=document.createElement("p");
        p.classList='card-text text-secondary';
        p.innerHTML=item.description;
        const right_arrow =document.querySelector(".fa-chevron-right");

        
        div2.append(h5);
        div2.append(p);
        card.append(div1);
        div1.append(image)
        card.append(div2);
        ul.append(card);
        wrapper.append(ul);
        wrapper.append(left_arrow);
        wrapper.append(right_arrow);
        });

}

