function generateCat(){
    var img = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    img.src = "http://thecatapi.com/api/images/get?fomat=src&type=gif&size=small";
    div.appendChild(img);
}

