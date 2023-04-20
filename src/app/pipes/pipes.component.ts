import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title='pipes';
  today=new Date();
  value=2233;
  money=200005;
  num=200;
name1="deepa";
name2="PAVI";
obj={
  name:"deepa",
  age:20
 
};
text="asmindstech";

name="V.Deepalakshmi";
from="Chromepet";
highestDegree="BE";
Degree:string="BE";
isdisable:boolean=false;
carname:string="car";
bus:string="51";
names="deepa";
clickme(){
  this.names="pavi";

  
}
regno:number=1;
myfunc(){
  this.regno=3;
}
myworld(){
window.alert("deepa");
} 
Name:string="deepa";
age:number=20;
}

