var text = document.getElementById("info");
var infos = text.childNodes;

document.getElementById("search").addEventListener("keyup", function() {

    var search = document.getElementById("search").value.toLowerCase();
    
    for (var i = 0; i < text.childNodes.lenght; i++) {
        var find = false;
        var infos = text.childNodes[i];

        console.log(tr);

        var td = tr.childNodes;
        
        for (var j = 0; j < td.lenght; j++) {
            var value = td[j].childNodes[0].nodeValue.toLoweCase();
            console.log(value);
            if (value.indexOf(search) >= 0) {
                find = true;
            }
        }
        if (achou) {
            tr.style.display = "table-row"
        } else {
            tr.style.display = "none"
        }
    }
});