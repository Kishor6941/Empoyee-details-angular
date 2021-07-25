import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-crud-emp',
  templateUrl: './crud-emp.component.html',
  styleUrls: ['./crud-emp.component.scss']
})
export class CrudEmpComponent implements OnInit {
newEmployeeClicked : boolean =  false;
color : any;
model:any = {};
model2:any = {};
myValue : any;
employees = [ 
  {name : 'Kishor', position :'Front-End Developer'},
  {name : 'Sunil', position :'Youtuber'},
  {name : 'Harshad', position :'Designer'},
]

  constructor() { }

  ngOnInit(): void {
  }
addEmployee(){
  this.employees.push(this.model);
  this.model = {}
}
deleteEmployee(id : any) {
  this.employees.splice(id,1)
  console.log(id);
}

editEmployee(editEmpInfo : any) {
this.model2.name = this.employees[editEmpInfo].name;
this.model2.position = this.employees[editEmpInfo].position;
this.myValue = editEmpInfo;
}

updateEmployee() {
  let editEmpInfo = this.myValue;
  for(let i = 0; i< this.employees.length; i++) {
    if(i == editEmpInfo) {
      this.employees[i] = this.model2;
      this.model2 = {}
    }
  }
}
addNewEmployeeBtn() {
this.newEmployeeClicked = !this.newEmployeeClicked;
}

changeColorOne() {
  this.color = !this.color;
  if(this.color) {
    return `#fff`
  }
  else {
    return `#f6f6f6`
  }
}
}
