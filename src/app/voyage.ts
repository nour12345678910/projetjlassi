import { Commentaire } from "./commentaire";

export class Voyage {

    constructor(

    public id?:number,
    public nom?:string,
    public photo?:string,
    public prix?:number,
    public enpromotion?:boolean,
    public datedepart?:Date,
    public dateretour?:Date,
    public nbrejour?:number,
    public commentaires?:Commentaire[],

){}
}
