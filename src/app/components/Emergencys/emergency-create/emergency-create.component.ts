import { Component, OnInit } from '@angular/core';
import { Emergency } from '../../../Models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-create',
  templateUrl: './emergency-create.component.html',
  styleUrl: './emergency-create.component.css'
})
export class EmergencyCreateComponent implements OnInit {

  public model!: Emergency;


  constructor(private Service: EmergencyService, private router: Router) {

  }
  ngOnInit(): void {
    this.model = new Emergency();
  }


  OnSubmit() {
    alert(JSON.stringify(this.model));
    this.Service.SaveEmergency(this.model).subscribe({
      next: () => {
        this.router.navigate([""]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
