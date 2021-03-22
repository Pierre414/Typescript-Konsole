class Nutzer{
    private Name:String;
    private static ID_zähler:number=1;
    public ID:number;
    private Pass:boolean;
    private Alter:number;
    private Geburtsdatum:String;
    private Passwort:String;
    private Online:boolean;

    constructor(Name:String,Pass:boolean,Alter:number,Geburtsdatum:String,Passwort:String){
    this.Name=Name;
    this.Pass=Pass;
    this.Alter=Alter;
    this.Geburtsdatum=Geburtsdatum;
    this.Passwort=Passwort;
    this.ID=Nutzer.ID_zähler++
    }
    gibName():String{
        return this.Name;
    }
    gibID():number{
        return this.ID;
    }
    hatPass():boolean{
        return this.Pass;
    }
    gibAlter():number{
        return this.Alter;
    }
    gibGeburtsdatum():String{
        return this.Geburtsdatum;
    }
    gibPasswort():String{
        return this.Passwort
    }
    setzeOnline():void{
        this.Online=true;
    }
    setzeOffline():void{
        this.Online=false;
    }
    
}