  function myFunction(pri,id) {
    var prix = parseFloat(document.getElementById(id).innerHTML) + pri;
    document.getElementById(id).innerHTML = prix ;
    }

    function soustraction(pri,id) {
        var prix = parseFloat(document.getElementById(id).innerHTML) - pri;
        document.getElementById(id).innerHTML = prix<0?0:prix ;
        }

 function suppression(pri,id) {
            document.getElementById(id).innerHTML = pri ;
 }

 function add(pri1,pri2) {
    return pri1 + pri2;
  }