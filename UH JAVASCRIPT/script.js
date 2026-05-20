function checkNilai() {
    let nilai = document.getElementById("input").value;
    
    if (nilai >= 80) {
        document.getElementById("result").innerHTML = "Grade: A - Lulus";
    } else if (nilai >= 79) {
        document.getElementById("result").innerHTML = "Grade: B - Lulus";
    } else {
        document.getElementById("result").innerHTML = "Grade: C - Tidak Lulus";
    }
}

function resetNilai() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
}

function checkBilangan() {
    let angkaPertama = parseFloat(document.getElementById("angkaPertama").value);
    let angkaKedua = parseFloat(document.getElementById("angkaKedua").value);
    let result = document.getElementById("resultBilangan") ;

    if (angkaPertama == 50) {
        result.innerHTML = true;
    } else if (angkaKedua == 50) {
        result.innerHTML = true;
    } else if (result.innerHTML == 50) {
        result.innerHTML = true;
    } else if (angkaPertama + angkaKedua == 50) {
        result.innerHTML = true;
    }
    else {
        result.innerHTML = false;
    }
}

function resetBilangan() {
    document.getElementById("angkaPertama").value = "";
    document.getElementById("angkaKedua").value = "";
    document.getElementById("resultBilangan").innerHTML = "";
}