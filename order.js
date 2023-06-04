const btn = document.getElementById("btn");
const image = document.getElementById("image");
let total = 0;
let rotation = 0;

var buy = document.getElementById("btn-buy")


btn.onclick = function () {
    
        rotation += 360;
        image.style.transform = `rotate(${rotation}deg)`;
        

        




        var choose = window.prompt("Are you sure do you want to order?");
        if (choose === "yes" || choose === "Yes" || choose === "YES") {
            

            if (document.getElementById("custom-select").value === "candy") {

                var newDiv = document.createElement("div");
                
                // Dodaj klasę "box" do nowego elementu div
                newDiv.classList.add("boxe");
                let sum = 10
                total += sum
                // Dodaj treść do nowego elementu div (opcjonalne)
                
                var newImg = document.createElement("img");
                var newSpan = document.createElement("span");
                newSpan.style = "font-size:20px;"
                newSpan.textContent = "Candy"

                var price = document.createElement("span");
                price.textContent = "Price: 10$"


                var description = document.createElement("span");
                description.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure incidunt officia quia esse consequatur odit impedit assumenda aperiam accusamus?";
  
                // Ustaw atrybut src dla elementu img
                newImg.src = "candy.png";
                
                newDiv.appendChild(newImg);
                newDiv.appendChild(newSpan);
                newDiv.appendChild(description);
                newDiv.appendChild(price);
                

               
                // Znajdź kontener, do którego chcesz dodać nowy element div
                var container = document.getElementById("ordered-snacks");
  
                 // Dodaj nowy element div do kontenera
                container.appendChild(newDiv);
                
            }





            if (document.getElementById("custom-select").value === "cakes") {

                var newDiv = document.createElement("div");
  
                // Dodaj klasę "box" do nowego elementu div
                newDiv.classList.add("boxe");
  
                // Dodaj treść do nowego elementu div (opcjonalne)
                
                var newImg = document.createElement("img");
                var newSpan = document.createElement("span");
                newSpan.style = "font-size:20px;"
                newSpan.textContent = "Cakes"

                var price = document.createElement("span");
                price.textContent = "Price: 15$"

                total +=15
                var description = document.createElement("span");
                description.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure incidunt officia quia esse consequatur odit impedit assumenda aperiam accusamus?";
  
                // Ustaw atrybut src dla elementu img
                newImg.src = "cake.png";
                
                newDiv.appendChild(newImg);
                newDiv.appendChild(newSpan);
                newDiv.appendChild(description);
                newDiv.appendChild(price);
                

               
                // Znajdź kontener, do którego chcesz dodać nowy element div
                var container = document.getElementById("ordered-snacks");
  
                 // Dodaj nowy element div do kontenera
                container.appendChild(newDiv);
                
            };


            if (document.getElementById("custom-select").value === "cookies") {

                var newDiv = document.createElement("div");
  
                // Dodaj klasę "box" do nowego elementu div
                newDiv.classList.add("boxe");
  
                // Dodaj treść do nowego elementu div (opcjonalne)
                
                var newImg = document.createElement("img");
                var newSpan = document.createElement("span");
                newSpan.style = "font-size:20px;"
                newSpan.textContent = "Cookie"

                var price = document.createElement("span");
                price.textContent = "Price: 5$"

                total +=5
                var description = document.createElement("span");
                description.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure incidunt officia quia esse consequatur odit impedit assumenda aperiam accusamus?";
  
                // Ustaw atrybut src dla elementu img
                newImg.src = "cookies.png";
                
                newDiv.appendChild(newImg);
                newDiv.appendChild(newSpan);
                newDiv.appendChild(description);
                newDiv.appendChild(price);
                

               
                // Znajdź kontener, do którego chcesz dodać nowy element div
                var container = document.getElementById("ordered-snacks");
  
                 // Dodaj nowy element div do kontenera
                container.appendChild(newDiv);
                
            };


            if (document.getElementById("custom-select").value === "party") {

                var newDiv = document.createElement("div");
  
                // Dodaj klasę "box" do nowego elementu div
                newDiv.classList.add("boxe");
  
                // Dodaj treść do nowego elementu div (opcjonalne)
                
                var newImg = document.createElement("img");
                var newSpan = document.createElement("span");
                newSpan.style = "font-size:20px;"
                newSpan.textContent = "Party"

                var price = document.createElement("span");
                price.textContent = "Price: 80$"

                total +=80
                var description = document.createElement("span");
                description.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure incidunt officia quia esse consequatur odit impedit assumenda aperiam accusamus?";
  
                // Ustaw atrybut src dla elementu img
                newImg.src = "party-hat.png";
                
                newDiv.appendChild(newImg);
                newDiv.appendChild(newSpan);
                newDiv.appendChild(description);
                newDiv.appendChild(price);
                

               
                // Znajdź kontener, do którego chcesz dodać nowy element div
                var container = document.getElementById("ordered-snacks");
  
                 // Dodaj nowy element div do kontenera
                container.appendChild(newDiv);
                
            };


        };
    
    
    

    
    document.getElementById("total").innerHTML = `Total: ${total}$`;

};



buy.onclick = function(){
    const buyChoose = window.prompt("Are you sure you want order?")
    if (buyChoose === "yes"){
        document.getElementById("total").innerHTML = `Ordered`;
        buy.textContent = "Back to page";
        var back = document.createElement("a");
        back.classList.add("back-btn");
        back.textContent = "Back to main page";
        back.href = "shop.html"
        document.getElementById("back").appendChild(back);
    }

}
