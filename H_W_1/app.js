const apple = 15.6678;
const plam = 123.965;
const melon =90.2345;
console.log('MAX ' + Math.max(apple, plam, melon));
console.log('MIN '+ Math.min(apple,plam,melon));
let frut = apple+plam+melon;
console.log("Sum " + frut);
let apple_new = Math.floor(apple);
let plam_new = Math.floor(plam);
let melon_new = Math.floor(melon);
let fruts_new = apple_new+melon_new+plam_new;
console.log("Sum without " + fruts_new);

function MyRound(val) {
    return Math.ceil(val/100)*100
}


console.log(MyRound(fruts_new));

function Bul(test){
if (test%2==0){
    return true
    //console.log(true);
}
else{
    return false;
    //    console.log(false);
}
}
console.log(Bul(fruts_new));


let suma_reshti =500-frut;
console.log(suma_reshti);


console.log("Apple " + apple.toFixed(2));
console.log("PLam "+ plam.toFixed(2));
console.log("Melon " + melon.toFixed(2));

let serdne = (apple+plam+melon)/3
console.log('Seredne ' + serdne.toFixed(2));


let sail = (Math.random()*100).toFixed(0);
console.log("sail " + sail + "%");
let sail_$ = (frut * sail)/100;
let oplata = frut - sail_$;
console.log("oplata " + oplata.toFixed(2));

let pributok = (frut/2) - sail_$;
console.log("Pributok " + pributok.toFixed(2));


//////////////ADVENSE/////////////////////


console.log("Максимальне число: "+ Math.max(apple, plam, melon)+"\t" + "Мінімальне число: "+ Math.min(apple, plam, melon)+"\t" + "Вартість всіх товарів: " + frut +"\t"  + "Ціла частина вартості: "+ fruts_new +"\t"+ "Округлення до сотень:"+MyRound(fruts_new) +"\t" +"Булеве значення чи парна сума товарів: "+ Bul(fruts_new) +"\t"+ "Сума решти при оплаті 500 грн: "+suma_reshti + "\t" + "Середнє значення цін округлене: "+serdne.toFixed(2) + " \t" +"Знижка:" + "Сума до сплати:" +oplata.toFixed(2) +"Чистий прибуток: "+pributok.toFixed(2) );

