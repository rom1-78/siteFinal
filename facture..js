date=new Date();
    var jour=date.getDate();
    var mois=date.getMonth()+1;
    var an=date.getFullYear();
    var date=(jour+"/"+mois+"/"+an);
    document.write('<input type="text" readonly value="'+ date + '"/>');
    
function calculate() {
    // Prix
    var p1 = parseInt(document.getElementById('p1').value);
    var p2 = parseInt(document.getElementById('p2').value);
    var p3 = parseInt(document.getElementById('p3').value);
    var p4 = parseInt(document.getElementById('p4').value);
    var p5 = parseInt(document.getElementById('p5').value);
    var p6 = parseInt(document.getElementById('p6').value);
    var p7 = parseInt(document.getElementById('p7').value);
    var p8 = parseInt(document.getElementById('p8').value);
    var p9 = parseInt(document.getElementById('p9').value);
    var p10 = parseInt(document.getElementById('p10').value);
    const prix = p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    // Quantité
    var q1 = parseInt(document.getElementById('q1').value);
    var q2 = parseInt(document.getElementById('q2').value);
    var q3 = parseInt(document.getElementById('q3').value);
    var q4 = parseInt(document.getElementById('q4').value);
    var q5 = parseInt(document.getElementById('q5').value);
    var q6 = parseInt(document.getElementById('q6').value);
    var q7 = parseInt(document.getElementById('q7').value);
    var q8 = parseInt(document.getElementById('q8').value);
    var q9 = parseInt(document.getElementById('q9').value);
    var q10 = parseInt(document.getElementById('q10').value);
    const qte = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
    // Total
    var t1 = parseInt(document.getElementById('t1').value=p1*q1);
    var t2 = parseInt(document.getElementById('t2').value=p2*q2);
    var t3 = parseInt(document.getElementById('t3').value=p3*q3);
    var t4 = parseInt(document.getElementById('t4').value=p4*q4);
    var t5 = parseInt(document.getElementById('t5').value=p5*q5);
    var t6 = parseInt(document.getElementById('t6').value=p6*q6);
    var t7 = parseInt(document.getElementById('t7').value=p7*q7);
    var t8 = parseInt(document.getElementById('t8').value=p8*q8);
    var t9 = parseInt(document.getElementById('t9').value=p9*q9);
    var t10 = parseInt(document.getElementById('t10').value=p10*q10);
    const total = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10; 

    // Remise
    const remise = parseInt(document.getElementById('r1').value);
    // Sous-Total
    const sousTotal = parseInt(document.getElementById('st1').value=prix*qte);
    // Sous-Total sans les remises
    const sT_r = parseInt(document.getElementById('st_r1').value=sousTotal-(remise/100));
    // Taux d'impots
    const tauxImpots = parseInt(document.getElementById('ti1').value);
    // Taxe totale
    const totalTaxe = parseInt(document.getElementById('tt1').value=Math.round(sousTotal*(tauxImpots/100)));
    // Solde
    const solde = parseInt(document.getElementById('solde').value=sT_r+totalTaxe);
    // Frais exp
    const fraisexp = parseInt(document.getElementById('e_m1').value);
}
function access(){
            var username=prompt("Identifiant :");
            var password=prompt("Mot de passe :");
        if (username==="Admin_GSB" && password==="admin"){
            document.location.href="lien.html";
        }
        else
            { alert("Identifiant ou mot de passe incorrects")}
        }