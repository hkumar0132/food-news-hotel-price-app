import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
      <h3>You selected department with id = {{departmentId}}</h3>      
      <p>
        <button (click) = "showOverview()">Overview</button>
        <button (click) = "showContact()">Contact</button>         
      </p>
      <p>      
        <button (click) = "goPrevious()">Previous</button>
        <button (click) = "goNext()">Next</button>
      </p>
      <p><button (click) = "gotoDepartments()">Back</button></p>
      <router-outlet></router-outlet>
      <h3><b>{{display}}</b></h3>
  `,
  styles: []
})

export class DepartmentDetailComponent implements OnInit {

  public departmentId : number = 0;
  public display : string = "";

  constructor(private route : ActivatedRoute, private router : Router) { }



  ngOnInit(): void {
    //The drawback of snapshot method is that the new id 
    //is retrieved on clicking previous/next button but the ngOnInit 
    //method is not called again
    //Hence, the component is not reinitialized so we don't see 
    //changed id on the screen but only on the search tab
    
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    //Hence we use paraMap.subscribe method
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let id = this.departmentId - 1;
    if(id >= 1)
      this.router.navigate(['/department-list', id]);
    else
      this.display = "No previous departments";
  }

  goNext() {
    let id = this.departmentId + 1;
    if(id <= 5)
      this.router.navigate(['/department-list', id]);
    else  
      this.display = "No next departments";
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //Absolute routing -> 
    // this.router.navigate(['/departments', {id : selectedId, test : "abc"}]);
    //Drawback is that if we change the path in app-routing module, we must change it everywhere in
    //the code
    //Relative routing -> 
    this.router.navigate(['../', {id : selectedId}], {relativeTo : this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo : this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo : this.route});
  }

}
