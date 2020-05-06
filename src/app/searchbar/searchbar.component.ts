// import { Component,OnInit } from '@angular/core';

// import { Router } from '@angular/router';
// import { SearchService } from '../search.service';
// import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
// const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;
// @Component({
//   selector: 'app-searchbar',
//   templateUrl: './searchbar.component.html',
//   styleUrls: ['./searchbar.component.css']
// })
// export class SearchbarComponent implements OnInit {
//   model: NgbDateStruct;
//   // time = {hour: 13, minute: 30};
//   // meridian = true;

//   // toggleMeridian() {
//   //     this.meridian = !this.meridian;
//   // }

//   // fromModel(value: string| null): NgbTimeStruct | null {
//   //   if (!value) {
//   //     return null;
//   //   }
//   //   const split = value.split(':');
//   //   return {
//   //     hour: parseInt(split[0], 10),
//   //     minute: parseInt(split[1], 10),
//   //     second: parseInt(split[2], 10)
//   //   };
//   // }

//   // toModel(time: NgbTimeStruct | null): string | null {
//   //   return time != null ? `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}` : null;
//   // }
//   // time: '13:30:00';  


//   // public selectedId: any;
//   public query: any;
//   public data: any = [];
//   public filteredData: any = [];

//   constructor(
//     private searchSvc: SearchService,
//     private router: Router
//     ) { }

//   ngOnInit(): void {
//     this.searchSvc
//     .search()
//     .subscribe(
//       (data => {
//         console.log(data);
//         this.data = data;
//       }),
//       (error) => { console.log(error);}
//     );
//   }

//   onSelect(item: any){
//     this.router.navigate(['/functionhall', JSON.stringify(item)]);
//   }

//   onSearch(){
//     if(this.query.length < 3) {
//       this.filteredData = [];
//       return;
//     }

//     this.data.forEach(element => {
//       let keys = Object.keys(element);
//       keys.forEach(k => {
//         let item;
//         if(element[k].toString().toLowerCase().includes(this.query.toLowerCase())){
//           console.log(element);
//           item = element;
//         }
//         if(item != null) this.filteredData.push(item);
//       });
//     });
//   }

// }




import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { halls } from '../functionhall/models/halls';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  // public selectedId: any;
  public query: string;
  public test:string  ;
  public functionHalls: any = [];
  public filteredData: any = [];
   //Functionhalls : halls[]
  constructor(
    private searchSvc: SearchService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    debugger
    this.searchSvc.getAllFunctionHalls()
    .subscribe( Response => {
      console.log("Functionhalls")
      this.functionHalls = Response["functionHalls"]  
  },(error) => { console.log(error);})
  }

  onSelect(item: any){
    this.router.navigate(['/functionhall', JSON.stringify(item)]);
  }

  onSearch(){
    debugger
    if(this.query.length < 3) {
      this.filteredData = [];
      return;
    }

    this.functionHalls.forEach(element => {
      let keys = Object.keys(element);
      keys.forEach(k => {
        let item;
        if(element[k].toString().toLowerCase().includes(this.query.toLowerCase())){
          console.log(element);
          item = element;
        }
        if(item != null) this.filteredData.push(item);
      });
    });
  }

}




