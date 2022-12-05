import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ip-address';
  ipAddress = '';
  
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
      this.getIPAddress();
  }
  
  getIPAddress()
  {
    this.http.get("http://54.163.117.127:8080").subscribe((res:any)=>{
      console.log(res);
    });
  }
}
