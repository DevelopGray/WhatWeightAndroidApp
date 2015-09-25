/* Created by DevelopGray on 9/23/2015. */

function calculateORM(){
    var weight = parseInt(document.getElementById("weight").value,10);
    var reps = parseInt(document.getElementById("reps").value,10);
    var orm = Math.round(((weight * reps ) * 0.033) + weight);
    document.getElementById("orm").innerHTML = orm;
    document.getElementById("orm").style.color = '#48C6D4';
}

function calculateWeight() {
    var ormax = parseInt(document.getElementById("ormax").value, 10);
    var coEfficientArray = new Array();
    coEfficientArray[0] = "1";
    coEfficientArray[1] = "0.943";
    coEfficientArray[2] = "0.906";
    coEfficientArray[3] = "0.881";
    coEfficientArray[4] = "0.856";
    coEfficientArray[5] = "0.831";
    coEfficientArray[6] = "0.807";
    coEfficientArray[7] = "0.786";
    coEfficientArray[8] = "0.765";
    coEfficientArray[9] = "0.744";
    coEfficientArray[10] = "0.723";
    coEfficientArray[11] = "0.703";
    coEfficientArray[12] = "0.688";
    coEfficientArray[13] = "0.675";
    coEfficientArray[14] = "0.662";
    coEfficientArray[15] = "0.650";
    coEfficientArray[16] = "0.638";
    coEfficientArray[17] = "0.627";
    coEfficientArray[18] = "0.616";
    coEfficientArray[19] = "0.606";

    for (var i = 0; i < 21; i++) {
        var x = i+1;
        var title = "ormax"+x;
        document.getElementById(title).innerHTML = Math.round(coEfficientArray[i]*ormax);
        document.getElementById(title).style.color = '#666';
        document.getElementById(title).style.fontWeight = 'bold';
    }
}