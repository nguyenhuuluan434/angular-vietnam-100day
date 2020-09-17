import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter<number>();
  @Output() selectAuthor = new EventEmitter<Author>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleDelete() {
    this.deleteAuthor.emit(this.author.id);
  }

  select() {
    this.selectAuthor.emit(this.author);
  }
}
