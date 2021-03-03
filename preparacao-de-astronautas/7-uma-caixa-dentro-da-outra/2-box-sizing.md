## box-sizing

Como será calculado o tamanho total da caixa?

- content-box | border-box

```css
div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;

  box-sizing: border-box;  
  /*Faz com que o width seja contado das bordas, e não somente do conteúdo, ou seja desta maneira de borda a borda tem realmente 100px, se não tivesse esta propriedade, seria 140px*/
}
```