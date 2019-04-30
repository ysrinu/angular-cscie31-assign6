import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputertypeService {

  // hardcoded computer types
  computertypeList = [
    {"id": 1, "description": "Laptop", "createdon": new Date().toLocaleString(), "updatedon": ""},
    {"id": 2, "description": "Desktop", "createdon": new Date().toLocaleString(), "updatedon": ""},
    {"id": 3, "description": "Tablet", "createdon": new Date().toLocaleString(), "updatedon": ""},
    {"id": 4, "description": "Mini-Tower", "createdon": new Date().toLocaleString(), "updatedon": ""},
    {"id": 5, "description": "Server", "createdon": new Date().toLocaleString(), "updatedon": ""}
  ];

  constructor() {
  }

  // Get all computer types
  listComputerTypes() {
    console.log("dates");
    console.log(this.computertypeList);
    return this.computertypeList;
  }

  // Get a computer type by id
  getComputertype(id) {
    return this.computertypeList.find((item) => {
      return item.id == id;
    });
  }
}
