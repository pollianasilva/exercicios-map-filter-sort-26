4) Fazer uma função que retorne um array de objetos:
```javascript
  [
      { 
          nome: String , 
          media: Number, 
          aprovada: Boolean 
      }
  ] 
```
Exemplo

Entrada:
```javascript
  [
      { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
      { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
      { nome: "Samantha", prova: { p1: 3, p2: 6.2, p3: 6 } }
  ]
```

Saída:
```javascript
  [
      { nome: "Ashley", media: 7.1, aprovada: true },
      { nome: "Sabrina", media: 7.9, aprovada: true },
      { nome: "Samantha", media: 5.0, aprovada: false }
  ]
```