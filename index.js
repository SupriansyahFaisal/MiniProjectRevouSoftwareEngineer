function Segitiga() {
    const element = document.getElementById("segitiga");
    element.scrollIntoView();
  }
function JajarGenjang() {
    const element = document.getElementById("JajarGenjang");
    element.scrollIntoView();
  }

  function hitungLuasSegitiga() {
    var alas = parseInt(document.getElementById("alasSeg").value);
    var tinggi = parseInt(document.getElementById("tinggiSeg").value);

    var output = "Cara penjumlahan:\n" +" 0.5 x alas x tinggi = \n " + "0.5" + " x " + alas + "  x " + tinggi +" = \n ";
    var luas = 0.5 * alas * tinggi;
    var hasilElem = document.getElementById("hasilluasseg");
    hasilElem.value = output + luas;
}
function hitungKelilingSegitiga() {
    var SisiAT = parseInt(document.getElementById("SegA").value);
    var SisiBT = parseInt(document.getElementById("SegB").value);
    var SisiCT = parseInt(document.getElementById("SegC").value);

    var output = "Cara penjumlahan:\n" +" Sisi A + sisi B + sisi C = \n " + SisiAT + " + " + SisiBT + " + " + SisiCT +" = \n ";
    var keliling = SisiAT+SisiBT+SisiCT;
    var hasilElem = document.getElementById("hasilkelilingseg");
    hasilElem.value = output + keliling;
}








function hitungLuasJajargenjang() {
    var alas = parseInt(document.getElementById("AlasG").value);
    var tinggi = parseInt(document.getElementById("TinggiG").value);

    var output = "Cara penjumlahan:\n" +" alas x tinggi = \n " + alas + "  x " + tinggi +" = \n ";
    var luas = alas * tinggi;
    var hasilElem = document.getElementById("hasilluasjar");
    hasilElem.value = output + luas;
}
function hitungKelilingJajarGenjang() {
    var sisiA = parseInt(document.getElementById("jajarA").value);
    var sisiB = parseInt(document.getElementById("jajarB").value);
    var sisiC = parseInt(document.getElementById("jajarC").value);
    var sisiD = parseInt(document.getElementById("jajarD").value);


    var output = "Cara penjumlahan:\n" +"Sisi A + sisi B + sisi C + sisi D = \n " + sisiA + " + " + sisiB + " + " + sisiC + " + " + sisiD + " +  = \n ";
    var keliling = sisiA+sisiB+sisiC+sisiD;
    var hasilElem = document.getElementById("hasilkelilingjar");
    hasilElem.value = output + keliling;
}