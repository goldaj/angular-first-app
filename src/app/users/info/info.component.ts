import { Component, OnInit, Input } from '@angular/core';
import { TimeServiceService } from 'src/app/services/time-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() prefix: string;
  today: Date;

  constructor(private timeService: TimeServiceService) {
    this.today = timeService.now();
   }

  ngOnInit() {
  }

}
