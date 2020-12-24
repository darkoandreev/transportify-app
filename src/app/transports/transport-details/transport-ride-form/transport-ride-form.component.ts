import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transport-ride-form',
  templateUrl: './transport-ride-form.component.html',
  styleUrls: ['./transport-ride-form.component.scss'],
})
export class TransportRideFormComponent implements OnInit {
  rideForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.init();
  }

  ngOnInit() {}

  private init(): void {
    this.rideForm = this.fb.group({
      cityFrom: [{ value: '', disabled: true }],
      cityTo: [{ value: '', disabled: true }],
      numberOfSeats: 1,
    });
  }
}
