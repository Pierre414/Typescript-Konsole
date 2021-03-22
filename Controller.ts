class Controller {
    private Akkustand: number;
    private Angeschaltet: boolean;
    constructor(Akkustand: number, Angeschaltet: boolean) {
        this.Akkustand = Akkustand;
        this.Angeschaltet = Angeschaltet;
    }
    gibAkkustand(): number {
        return this.Akkustand;
    }
    anschalten(): void {
        if (this.gibAkkustand() <= 0) {
            console.log("Akku leer,kann nicht angeschaltet werden!");
            return;
        }

        this.Angeschaltet = true;
    }
    ausschalten(): void {
        this.Angeschaltet = false;
    }
    istAngeschaltet(): boolean {
        return this.Angeschaltet
    }
    setzeAkkustand(Akkustand: number): void {
        this.Akkustand = this.Akkustand;

    }
    Aufladen(): void {
    if(this.Akkustand==100){
        console.log("Der Controller ist schon bei 100%!");
        return;
    }
    this.Akkustand=100;
    console.log("Der Controller ist wieder bei 100%!")

    }
    abschalten():void{
        this.Angeschaltet=false;
    }
}