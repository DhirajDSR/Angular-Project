import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SonglistService {
  userdetailurl:string="http://localhost:3000/userdetails";
  //loginstatustrue = new BehaviorSubject('');
  songsearch = new BehaviorSubject('');
  //songalbum = new BehaviorSubject('');
  playlistArray = new BehaviorSubject([]);
  playlistName = new BehaviorSubject('');

  constructor( private songservice : HttpClient) { }

adduserservice(fname:string,lname:string,emailid:string,location:string,mobileno:number,password:string){ // add user
    var obj = {FirstName:fname, LastName:lname, Email:emailid, Location:location, MobileNo:mobileno, Password:password};
    const body=JSON.stringify(obj);
    return this.songservice.post('http://localhost:3000/userdetails',body,httpOptions);
}

addsongservice(sname:string, surl:string, iurl:string, url:string, singer:string, length:String, movie:string, genere:string){ //add song
  var obj = {Playlist:[], Name:sname, SongUrl:surl, ImgUrl:iurl, Singer:singer, Length:length, movie:movie, genere:genere  };
  const body=JSON.stringify(obj);
  return this.songservice.post(url,body,httpOptions);
}

deletesongservice(i:Number,surl){   //delete song
  const url=surl+i;
  return this.songservice.delete(url,httpOptions);
}


editsongdetails(playlist,name,songurl,imgurl,singer,length,movie,genere,id){    //edit song
  var obj={Playlist:playlist, Name:name, SongUrl:songurl, ImgUrl:imgurl, Singer:singer, Length:length, movie:movie, genere:genere };
  const body=JSON.stringify(obj);
  return this.songservice.put('http://localhost:3000/songlist/'+id,body,httpOptions);
}


addsongplaylistservice(edit){    //adding song to playlist
    var playlistName1:string = '';
    var playlist: String[];
    this.playlistName.subscribe(res=>playlistName1=res);
    this.playlistArray.subscribe(res=>playlist=res)
    playlist.push(playlistName1);
    edit.Playlist=playlist;
    var obj={Playlist:edit.Playlist, Name:edit.Name, SongUrl:edit.SongUrl, ImgUrl:edit.ImgUrl, Singer:edit.Singer, Length:edit.Length, movie:edit.movie, genere:edit.genere };
    const body=JSON.stringify(obj);
    return this.songservice.put('http://localhost:3000/songlist/'+edit.id,body,httpOptions);
}

editplaylistservice(edit){   //delete songs from playlist
    var playlistName1:string = '';
    var playlist: String[];
    this.playlistName.subscribe(res=>playlistName1=res);
    this.playlistArray.subscribe(res=>playlist=res)
    playlist = playlist.filter(item => item !==playlistName1)
    edit.Playlist=playlist;
    var obj={Playlist:edit.Playlist, Name:edit.Name, SongUrl:edit.SongUrl, ImgUrl:edit.ImgUrl, Singer:edit.Singer, Length:edit.Length, movie:edit.movie, genere:edit.genere };
    const body=JSON.stringify(obj);
    return this.songservice.put('http://localhost:3000/songlist/'+edit.id,body,httpOptions);
}

getdataservice(url){ //get data
  return this.songservice.get(url);
}

}
