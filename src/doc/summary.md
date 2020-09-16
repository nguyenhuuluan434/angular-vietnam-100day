attribute directive chỉ thay đổi cách hiển thị (style) của DOM element

- Class binding [class.className]: dùng để thay đổi một số class tùy vào điều kiện

- Nhìn qua thì nó là property binding với giá trị bên trong expression là truthy thì class trong clasName
 trong [] sẽ được hiển thị, ngươc falsy sẽ bị xóa đi 


- class binding

[class.ten-class]
ex: [class.red-border]="isDanger"

[class]="variable"
ex: let classes = 'box red-border yellow-background'; <p [class]="classes"></p>

[class]="object" 
ex: <p class="box" [class]="{'red-border':!isDanger,'yellow-background':!isWarning}"></p>




- style binding

[style.tenStyle]="value" [style.color]="'red'"

[style.ten-style]="value" [style.background-color]="isDanger ?'yellow':'black'"

[style.tenStyle.unit]="value" [style.fontSize.rem]="2"

[style.css-variable] <p [style.--text-color]="isDanger?'red':'blue'" [style]="{color:'var(--text-color)',backgroundColor:'yellow'}">
