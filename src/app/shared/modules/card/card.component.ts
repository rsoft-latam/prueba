import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() typeCard: any;

  @Input() img: any = '../../../../assets/images/user.png';
  @Input() name: any;
  @Input() linkGithub: any;
  @Output() repositories = new EventEmitter<any>();

  @Input() description: any;
  @Input() issues: any;
  @Input() openIssues: any;
  @Input() forks: any;

  constructor() {
  }

  ngOnInit() {
  }

  viewRepositories() {
    this.repositories.emit({username: this.name});
  }
}
