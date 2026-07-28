function sayfaAc(id){

    let sayfalar = document.querySelectorAll(".sayfa");


    sayfalar.forEach(function(sayfa){

        sayfa.classList.add("gizli");

    });


    document.getElementById(id).classList.remove("gizli");

}
