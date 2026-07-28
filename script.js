function sayfaAc(id){

    let sayfalar = document.querySelectorAll("section");

    sayfalar.forEach(sayi => {
        sayi.classList.add("gizli");
    });

    document.getElementById(id).classList.remove("gizli");

}
