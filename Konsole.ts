class Konsole {
    private Farbe: String;
    private Name: String;
    private Speicherplatz: number;
    private Betriebssystem: String;
    public aktiver_nutzer: Nutzer;
    public Controller: Controller;
    private Zustand: String;
    bibliothek: Array<Programm>;
    private Gast: Nutzer;

    constructor(Farbe: String, name: String, Speicherplatz: number, betriebssystem: String) {
        this.Farbe = Farbe;
        this.Name = name;
        this.Speicherplatz = Speicherplatz;
        this.Betriebssystem = betriebssystem;
        this.Zustand = "aus";
    }

    setzeZustand(zustand: String): void {
        this.Zustand = zustand;
    }
    gibFarbe(): String {
        return this.Farbe;
    }
    gibName(): String {
        return this.Name;
    }
    gibSpeicherplatz(): number {
        return this.Speicherplatz;
    }
    gibBetriebssystem(): String {
        return this.Betriebssystem;
    }
    anschalten(nutzer: Nutzer): void {
        this.Zustand = "idle";
        this.aktiver_nutzer = nutzer;
    }
    controller_verbinden(controller: Controller): void {
        if (controller.istAngeschaltet())
            this.Controller = controller;
    }
    installieren(app:Apps): void {
        
        this.Speicherplatz - app.gibGröße();
        if(this.Speicherplatz<0){
            console.log("Das Spiel konnte nicht installiert werden");
            this.Speicherplatz + app.gibGröße();
        }else{
        console.log("App!");
        console.log(app.gibName() + " wird installiert…\n" + "█▒▒▒▒▒▒▒▒▒ 10%");
        console.log(app.gibName() + " wird installiert…\n" + "████▒▒▒▒▒▒ 33%");
        console.log(app.gibName() + " wird installiert…\n" + "███████████ 100%");
        console.log("Verbleibender Speicherplatz: " + this.gibSpeicherplatz() + "GB");
    }
}
    installieren2(Spiel:Spiele): void {
        
        this.Speicherplatz - Spiel.gibGröße();
        if(this.Speicherplatz<0){
            console.log("Das Spiel konnte nicht installiert werden")
        }else{
        console.log("App!");
        console.log(Spiel.gibName() + " wird installiert…\n" + "█▒▒▒▒▒▒▒▒▒ 10%");
        console.log(Spiel.gibName() + " wird installiert…\n" + "████▒▒▒▒▒▒ 33%");
        console.log(Spiel.gibName() + " wird installiert…\n" + "███████████ 100%");
        console.log("Verbleibender Speicherplatz: " + this.gibSpeicherplatz() + "GB");
        }
    }
}