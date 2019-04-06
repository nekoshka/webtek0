var button = document.getElementById('gettext');
var input = document.getElementById('findThis');
var parentUl = document.getElementById('list');
input.addEventListener("keyup" ,function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById('gettext').click();
    }
});

function gettext() {
    fetch('https://api.edamam.com/api/food-database/parser?ingr='+input.value+'&app_id=aabfeda2&app_key=4876ff911a79e2817beadea9ef4c9828')
    .then((res) => res.json())
    .then((data) => {
        try {
            try {
                removeElem();
                getValue('Food: ' + data.text);
                getValue('Energy (Kcal): ' + data.parsed[0].food.nutrients.ENERC_KCAL);
                getValue('Fat: ' + data.parsed[0].food.nutrients.FAT);
                getValue('Protien: ' + data.hints[0].food.nutrients.PROCNT);
                getValue('Category: ' + data.parsed[0].food.category);
            }catch {
                getValue('Food: ' + data.text);
                getValue('Energy (Kcal): ' + data.parsed[0].food.nutrients.ENERC_KCAL);
                getValue('Fat: ' + data.parsed[0].food.nutrients.FAT);
                getValue('Protien: ' + data.hints[0].food.nutrients.PROCNT);
                getValue('Category: ' + data.parsed[0].food.category);
            }
        }catch {
            try {
                try {
                    removeElem();
                    getValue('Food: ' + data.text);
                    getValue('Energy (Kcal): ' + data.hints[0].food.nutrients.ENERC_KCAL);
                    getValue('Fat: ' + data.hints[0].food.nutrients.FAT);
                    getValue('Protien: ' + data.hints[0].food.nutrients.PROCNT);
                    getValue('Category: ' + data.hints[0].food.category);
                    getValue('Contents: ' + data.hints[0].food.foodContentsLabel);
                }catch {
                    getValue('Food: ' + data.text);
                    getValue('Energy (Kcal): ' + data.hints[0].food.nutrients.ENERC_KCAL);
                    getValue('Fat: ' + data.hints[0].food.nutrients.FAT);
                    getValue('Protien: ' + data.hints[0].food.nutrients.PROCNT);
                    getValue('Category: ' + data.hints[0].food.category);
                    getValue('Contents: ' + data.hints[0].food.foodContentsLabel);
                }
            }catch {
                getValue("What is That Food?")
            }
        }
    });
}
function getValue(type) {
    var li = document.createElement('li');
    var value = document.createTextNode(type);
    li.appendChild(value);
    parentUl.appendChild(li);
}

function removeElem() {
    for(var i = 0 ; i <= 5 ; i++) {
        parentUl.removeChild(parentUl.firstChild);
    }
}
