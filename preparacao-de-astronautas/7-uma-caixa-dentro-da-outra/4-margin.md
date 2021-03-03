## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div {
  /* shorthand */
  margin: 12px 16px 10px 4px;
  margin: 12px 16px 0;
  margin: 8px 16px;
  margin: 8px;
}
```

* Cuidado com margin collapsing (top se ajunta ao bottom, margens entre uma caixa em cima e em baixo é pego a maior, já margem entra caixas inline são somadas)

https://developer.mozilla.org/en-US/docs/Web/CSS/margin