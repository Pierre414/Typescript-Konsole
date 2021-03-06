import { Console } from "node:console";


let Netflix = new Apps(0, "Netflix", "Netflix US Ltd.", 5.75);
let Youtube: Apps = new Apps(0, "Youtube", "Youtube US", 6);
let PrimeVideo: Apps = new Apps(0, "Prime Video", "Amazon.com, Inc.", 2.4);
let Spotify: Apps = new Apps(0, "Spotify", "Spotify Technology S.A.", 1.2);
let Crunchyroll: Apps = new Apps(0, "Crunchyroll", "Crunchyroll, Inc.", 3);
let InternetBrowser: Apps = new Apps(0, "Internet Browser", "Sony Corporation", 1);

// Spiele initialisieren: Altersvorgabe, Preis, Pass, Name, Hersteller, Speicherplatz 
let CandyCrush = new Spiele(0, 0, false, "Candy Crush Saga", "King Studio", 10.5);
let CoD = new Spiele(18, 100, true, "Killerspiel 5000", "Treyarch Studios", 90.5);
let FallGuys: Spiele = new Spiele(0, 9.99, false, "Fall Guys", "Mediatonic", 11);
let Minecraft: Spiele = new Spiele(0, 19.99, true, "Minecraft", "Mojang Studios", 15);
let GTA: Spiele = new Spiele(18, 29.99, false, "Grand Theft Auto V", "Rockstar Games", 80);
let Cyberpunk2077: Spiele = new Spiele(18, 59.99, false, "Cyberpunk 2077", "CD Projekt RED", 90);
let Assassinscreed: Spiele = new Spiele(18, 49.99, true, "Assassin’s Creed Valhalla", "Ubisoft Montreal", 70);
let FarCry6: Spiele = new Spiele(18, 39.99, false, "Far Cry 6", "Ubisoft Toronto", 95);
let ResidentEvil: Spiele = new Spiele(18, 59.99, true, "Resident Evil Village", "Capcom", 50);
let NfS: Spiele = new Spiele(0, 39.99, false, "Need for Speed Heat", "Ghost Games", 60);

let verfuegbar:Array<Programm>  = new Array<Programm>();

verfuegbar.push(PrimeVideo);
verfuegbar.push(Spotify);
verfuegbar.push(Crunchyroll);
verfuegbar.push(InternetBrowser);
verfuegbar.push(Youtube);
verfuegbar.push(Netflix);
verfuegbar.push(CandyCrush);
verfuegbar.push(CoD);
verfuegbar.push(FallGuys);
verfuegbar.push(Minecraft);
verfuegbar.push(GTA);
verfuegbar.push(Cyberpunk2077);
verfuegbar.push(Assassinscreed);
verfuegbar.push(FarCry6);
verfuegbar.push(ResidentEvil);
verfuegbar.push(NfS);

let C1 = new Controller(100, true);
let C2 = new Controller(90, true);
let C3 = new Controller(100, true);

// Konsolen initialisieren: Farbe, Name, Speicherplatz, Betriebssystem
let PS5 = new Konsole("Weiß", "Playstation 5 Digital", 500.00, "Android 8.0"); // Was hat die Playstation für ein Betriebssystem? Habe einfach mal Android eingetragen

// Nutzer initialisieren: String Name, boolean Pass, int Alter, String Geburtsdatum, String Passwort
// Gast-Nutzer initialisieren, damit man auch unangemeldet spielen kann
let Martin = new Nutzer("Martin Ott", true, 21, "20.09.1999", "pw1234");
let Pierre = new Nutzer("Pierre Pötter", true, 18, "27.12.2002", "pwabcde");
let Gast = new Nutzer("Gast", false, 0, " ", "");
console.log("1. Martin");
console.log("2. Pierre");
console.log("3. Gast (Kein Passwort benötigt)");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('"Auf welchem Account möchten sie sich einloggen ?" ', (answer) => {
    rl.close();
    //switch-case zum einloggen
    switch (answer) {
        case 1:
            console.log("Passwort von Martin:");
            let pw = rl.nextLine();
            if (pw.equals(Martin.gibPasswort())) {
                console.log("Willkommen, Martin!");
                PS5.aktiver_nutzer = Martin;
                PS5.controller_verbinden(C1);
            } else {
                console.log("Falsches Passwort. Sie werden nun als Gast eingeloggt.");
                console.log("Willkommen, Gast!");
                PS5.aktiver_nutzer = Gast;
                PS5.controller_verbinden(C3);
            }

            break;
        case 2:
            console.log("Passwort von Pierre:");
            pw = rl.nextLine();
            if (pw.equals(Pierre.gibPasswort())) {
                console.log("Willkommen, Pierre!");
                PS5.aktiver_nutzer = Pierre;
                PS5.controller_verbinden(C2);
            } else {
                console.log("Falsches Passwort. Sie werden nun als Gast eingeloggt.");
                console.log("Willkommen, Gast!");
                PS5.aktiver_nutzer = Gast;
                PS5.controller_verbinden(C3);
            }
            break;
        case 3:
            console.log("Willkommen, Gast!");
            PS5.aktiver_nutzer = Gast;
            PS5.controller_verbinden(C3);
            break;
        default:
            console.log("Falsche Eingabe!");
            process.exit(0);
            break;
    }
});



