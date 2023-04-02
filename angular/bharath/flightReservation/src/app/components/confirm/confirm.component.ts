import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  reservationId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reservationId = Number.parseInt(this.route.snapshot.params['id']);
  }
}
