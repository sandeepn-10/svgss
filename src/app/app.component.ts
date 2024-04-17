import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'svgss';
  files : any

readfiles(e: any) {
  console.log(e.target.files[0])
   const reader = new FileReader()
   reader.readAsDataURL(e.target.files[0])
   
   reader.onload = (event:any)=>{
    console.log(event.target)

    this.files = event.result
   }

   reader.onloadend = function(){
    console.log(reader.result)
  }
}
  
  
}
