## border (e outline)

As bordar da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
  - style: solid | dotted | dashed | double | groove | ridge | inset | outset
  - width: `<length>`
  - color: `<color>`

  ```css
  div {
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;

  }
  ```
  ### E outline?

  - diferente em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agent para acessibilidade

    https://developer.mozilla.org/en-US/docs/Web/CSS/padding