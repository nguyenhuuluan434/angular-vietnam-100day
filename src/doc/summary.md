contructor
ngOnchanges ko có input thì hàm này ko call
ngOnInit

để parent component có thể listen event from child sử dụng @Output

```
child component fire event 
<button (click)="handleDelete()">Delete</button>
                ||
                ||
call internal function (handleDelete()) of child component để emit event to EventEmitter<T>
@Output() deleteAuthor = new EventEmitter<Author>();
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
                ||
                ||
parent component sử dụng binding để listen event and call a function to handle event 
(deleteAuthor)="handleRemoveAuthor($event)
  handleRemoveAuthor(author: Author) {
    this.authors = this.authors.filter(item => item.id !== author.id);
  }
```
