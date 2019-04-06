document.getElementById('gettext').addEventListener('click',gettext);
var input = document.getElementById('findThis');

function gettext() {
    fetch('https://api.edamam.com/api/food-database/parser?ingr='+input.value+'&app_id=aabfeda2&app_key=4876ff911a79e2817beadea9ef4c9828')
    .then((res) => res.json())
    .then((data) => {
        try {
            getValue('Energy (Kcal) ' + data.parsed[0].food.nutrients.ENERC_KCAL);
            getValue('Fat ' + data.parsed[0].food.nutrients.FAT);
            getValue('Protien ' + data.hints[0].food.nutrients.PROCNT);
            getValue('Category ' + data.parsed[0].food.category);
        }catch {
            try {
                getValue('Energy (Kcal) ' + data.hints[0].food.nutrients.ENERC_KCAL);
                getValue('Fat ' + data.hints[0].food.nutrients.FAT);
                getValue('Protien ' + data.hints[0].food.nutrients.PROCNT);
                getValue('Category ' + data.hints[0].food.category);
                getValue('Contents ' + data.hints[0].food.foodContentsLabel);
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
    document.getElementById('list').appendChild(li);   
}