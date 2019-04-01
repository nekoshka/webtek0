//var food = document.getElementById("food");
function callFood () {
    loadJSON('https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=aabfeda2&app_key=4876ff911a79e2817beadea9ef4c9828',gotData,jsonp);

}
function gotData(data) {
    println(data    )
}