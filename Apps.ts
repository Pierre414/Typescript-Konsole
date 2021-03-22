class Programm{
    protected Name:String;
    protected Hersteller:String;
    protected Größe:number;
    protected Altersfreigabe:number;
    protected Nutzungsdauer:number;
    constructor(Name:String,Hersteller:String,Größe:number){
        this.Name=Name;
        this.Hersteller=Hersteller;
        this.Größe=Größe;
        this.Nutzungsdauer=0;
    }
    gibName():String{
        return this.Name 
    }
    gibGröße():number{
        return this.Größe;
    }
    gibAltersfreigabe():number{
        return this.Altersfreigabe;
    }
    gibNutzungsdauer():number{
        return this.Nutzungsdauer
    }
    Nutzungsdauer_erhöhen():void{
        this.Nutzungsdauer++;

    }

}


class Apps extends Programm{
private Abo_Kosten:number;
constructor(Abo_Kosten:number,name:String, Hersteller:String, Größe:number){
    super(name,Hersteller,Größe)
    this.Abo_Kosten=Abo_Kosten;
    this.Altersfreigabe=0;
    this.Nutzungsdauer=0;
}
gibAbo_Kosten():number{
    return this.Abo_Kosten;
}
gibHersteller():String{
    return this.Hersteller;
}
gibname():String{
    return this.Name;
}
gibGröße():number{
    return this.Größe;
}


}

class Spiele extends Programm{
private Altersvorgabe:number;
private Preis:number;
private Pass:boolean;
constructor(altersfreigabe:number, Preis:number, Pass:boolean, name:String, Hersteller:String, Größe:number){
    super(name,Hersteller,Größe)
     this.Altersfreigabe=altersfreigabe;
     this.Preis=Preis;
     this.Pass=Pass;
     this.Nutzungsdauer=0;     
}
gibAltersfreigabe():number{
    return this.Altersfreigabe
}
gibPreis():number{
    return this.Preis;
}

gibPass():boolean{
    return this.Pass;
}
setgröße(Größe:number):void{
  this.Größe=Größe;
}
setHersteller(Hersteller:String):void{
    this.Hersteller=Hersteller;
    
}





}
