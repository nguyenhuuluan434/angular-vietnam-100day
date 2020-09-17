Custom two-way binding base on **ngModule** and **ngModelChange**

@Input variableName:T
@Output variableNameChange = new EventEmitter<T>

@Input has name is **"name"** @Output = name of input suffix **"Change"**

```
ex:
@Input checked:boolean;
@Output checkedChange= new EventEmitter<boolean>;
```
