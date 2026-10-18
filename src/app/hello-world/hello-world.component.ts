import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnChanges {
  @Input() firstName: string;
  @Output() firstNameChange = new EventEmitter<string>();

  primes = [1, 3 , 5, 7, 9];

  textChanged(/*newValue: string*/) {
    // this.firstName = newValue;
    console.log('In child : ', this.firstName);
    this.firstNameChange.emit(this.firstName);
  }

  constructor() { }



  ngOnInit() {
    console.log('OnItit');
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.firstName as SimpleChange).firstChange) {
      console.log('Youhouuu');
    }
    console.log('OnChanges', changes);
  }

}
