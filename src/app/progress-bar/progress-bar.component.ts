import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() progress = 0;
  @Input() backgroundColor: '#9e9e9e';
  @Input() progressColor: '#2e8b57';

  /*chạy khi component được tạo*/
  constructor() {
    //console.log(this.progress , this.backgroundColor, this.progressColor);
  }

  /*chạy sau contructor và các input đã được binding*/
  ngOnInit(): void {
    console.log(this.progress , this.backgroundColor, this.progressColor);
  }

  /*sẽ được chạy sau mỗi lần input bị thay đổi*/
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.progress , this.backgroundColor, this.progressColor);
    if (!('progress' in changes)) {
      return;
    }
    const value = changes.progress.currentValue;
    if (typeof value !== 'number') {
      return;
    }
    if (Number.isNaN(value)) {
      this.progress = 0;
      return;
    }
    this.progress = value;
  }
}
