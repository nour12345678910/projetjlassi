import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from './commentaire';
import { Voyage } from './voyage';
import { Voyageur } from './voyageur';
const URL="http://localhost:3000/lesvoyages";
@Injectable({
  providedIn: 'root'
})
export class AgenceService {


  lesvoyages:Voyage[]=[
    new Voyage(1,"Istanbul(Turquie)","assets/istanbul.PNG",1797,true,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("assil",new Date(2021,2,12),"c'est innoubliable!","assets/b.jpg"),new Commentaire("Nermine",new Date(2021,2,15),"super voyage","assets/d.jpg")]),
    new Voyage(2,"Madrid(Espagne)","assets/madrid.PNG",1100,false,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("amir",new Date(2021,2,12),"c'etais bien passée","assets/i.jpg"),new Commentaire("Salim",new Date(2021,5,14),"destination parfaite","assets/a.jpg")]),
    new Voyage(3,"Belgrade(Serbie)","assets/belgrade.PNG",1630,false,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("wiem",new Date(2021,2,12),"vraiment ! c'est amusant","assets/c.jpg"),new Commentaire("Sophie",new Date(2021,7,20),"super","assets/h.jpg")]),
    new Voyage(4,"Sharm el sheikh(Caire)","assets/caire.PNG",1900,false,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("salma",new Date(2021,2,12),"moyenne","assets/d.jpg"),new Commentaire("Fedi",new Date(2021,2,9),"c'est innoubliable!","assets/f.jpg")]),
    new Voyage(5,"Antalya(Turquie)","assets/antalya.PNG",2500,true,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("kinza",new Date(2021,2,12),"les destinations sont wow","assets/e.jpg"),new Commentaire("Maycen",new Date(2021,8,22),"super","assets/d.jpg")]),
    new Voyage(6,"Cancun(Mexique)","assets/cancun.PNG",4500,true,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("rami",new Date(2021,2,12),"une semaine innoubliable","assets/f.jpg"),new Commentaire("Fares",new Date(2021,9,10),"une semaine innoubliable","assets/i.jpg")]),
    new Voyage(7,"iles Maldives(Maldives)","assets/maldive.PNG",4300,false,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("salim",new Date(2021,2,12),"destination parfaite","assets/i.jpg"),new Commentaire("Celine",new Date(2021,11,25),"j'eetais bien relaxée et amusée","assets/b.jpg")]),
    new Voyage(8,"iles Maurices(Maurice)","assets/maurice.PNG",4800,true,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("salsabil",new Date(2021,2,12),"voyage bien équipé","assets/h.jpg"),new Commentaire("Skander",new Date(2021,10,1),"je vais faire un autre voyage car vraiment j'ai passé des bon moments au cours de cette voyage et je veux les réperter encore une fois et merci pour votre organisation  ","assets/a.jpg")]),
    new Voyage(9,"Seychelles(Seychelles)","assets/seychelles.PNG",4990,true,new Date(2021,10,11),new Date(2021,10,20),40,[new Commentaire("rayen",new Date(2021,2,12),"voyage innoubliable"),new Commentaire("Amal",new Date(2021,12,2),"c'est génial vraiment ","assets/d.jpg")]),
    ]
  constructor(private http:HttpClient) { }
public getvoyage()
{return this.lesvoyages;}



getbyid(id:number){
   return this.lesvoyages.find(l=>l.id==id)
    }
  lesvoyageurs:Voyageur[]=[];  

           public getvoyageur()
          {return this.lesvoyageurs;}


        getvoyages():Observable<Voyage[]>{
           return this.http.get<Voyage[]>(URL);               }


        addvoyage(voyage:Voyage):Observable<Voyage>{
           return this.http.post<Voyage>(URL, voyage);}

        updatevoyage(id:number, voyage:Voyage):Observable<Voyage>{
            return this.http.put<Voyage>(URL+"/"+ id, voyage);
            }
            deletevoyage(id:number){
              return this.http.delete(URL+"/"+ id);
              }
getvoyagebyid(id:number):Observable<Voyage>{

  return this.http.get<Voyage>(`${URL}/${id}`);
}
getvoyagebyname(name:string):Observable<Voyage>
{return this.http.get<Voyage>(`${URL}/?name=${name}`);}











  }

  