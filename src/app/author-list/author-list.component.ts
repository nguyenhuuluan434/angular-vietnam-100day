import {Component, OnInit} from '@angular/core';
import {Author, authors} from '../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors = authors;
  // @ts-ignore
  currentAuth: authors[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleRemoveAuthor(id: number) {
    this.authors = this.authors.filter(author => author.id !== id);
    if (this.currentAuth.id === id) {
      this.currentAuth = this.authors[0];
    }
  }

  onSelected(author: Author) {
    this.currentAuth = author;
  }
}
