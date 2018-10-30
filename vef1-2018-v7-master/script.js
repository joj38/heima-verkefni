/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
	var annar=true;
	alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
	while(annar){
	play();
	var annar=confirm("Spila annan leik?");	
	}
  villa;
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */


function play() {
	 var timer1=new Date();
	
	
	var rett=0;
	for(i=0; i<GAMES_TO_PLAY; i++){
		var a=ask();
		if(a===1){
			rett++;
		}
		else if(a===2){
			alert("Hætt í leik.");
			return;
		}
		
	}
	var timer2=new Date();
	var time=(timer2.getTime()-timer1.getTime())/1000
	var rt= Number(rett/time).toPrecision(3);
	var time= Number(time).toPrecision(3);
	alert("Þú svaraðir "+rett+" af 10 dæmum rétt á "+ time +" sekúndum \n meðalrétt svör á sekúndu eru "+rt)
	return;
}



/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
	
	var rand=randomNumber(1,4);
	if(rand===1){
		return plus();
	}
	if(rand===2){
		return minus();
	}
	if(rand===3){
		return sinum();
	}
	if(rand===4){
		return deiling();
	}
}

function plus(){
	var a=randomNumber(1,100);
	var b=randomNumber(1,100);
	var ans=a+b;
	var daemi = prompt("Hvað er "+a+" + "+b+"?", );
	if (daemi!=null){
	if(ans===parseInt(daemi)){
		return 1;
	}
	return 0;}
	return 2;
}

function minus(){
	var a=randomNumber(1,100);
	var b=randomNumber(1,100);
	if (b>a){
		var c=a;
		a=b;
		b=c;
	}
	var ans=a-b;
	var daemi = prompt("Hvað er "+a+" - "+b+"?", );
	if (daemi!=null){
	if(ans===parseInt(daemi)){
		return 1;
	}
	return 0;}
	return 2;
}

function sinum(){
	var a=randomNumber(1,10);
	var b=randomNumber(1,10);
	var ans=a*b;
	var daemi = prompt("Hvað er "+a+" * "+b+"?", );
	if (daemi!=null){
		
	if(ans===parseInt(daemi)){
		return 1;
	}
	return 0;}
	return 2;
}

function deiling(){
	var a=randomNumber(2,10);
	var c=randomNumber(2,10);
	var b=a*c; 
	var ans=a/b;
	var daemi = prompt("Hvað er "+a+" / "+b+"?", );
	if (daemi!=null){
	if(ans===parseInt(daemi)){
		return 1;
	}
	return 0;}
	return 2;
}



/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
