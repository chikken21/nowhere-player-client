import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { FormControl, FormGroup } from '@angular/forms';
import { GameSession } from 'src/assets/GameSession';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class GameSessionService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({        
    gameSession: new FormControl('')
  })

  // getGameSession(code: string): any { 
  //   console.log(code);
  //   return 
  //    this.firestore
  //    .collection("gameSessions", ref => ref.where('gameSession.code', '==', code)).snapshotChanges();
  // }

  getGameSession(): Observable<any> {
    return this.firestore.collection("gameSessions").snapshotChanges();
  }
  
  updateGameSession(data) {
    return new Promise<any> ((resolve, reject) => {
      this.firestore
      .collection("gameSessions")
      // .doc(data.payload.doc.id)
      .doc(data.payload.doc.data().gameSession.code)
      .set({ players: data.payload.doc.data().gameSession.players[0] });
    })
  }

  createGameSession(data) {
    console.log("CREATING GAME SESSION: ", data);
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("gameSessions")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }
 
}
