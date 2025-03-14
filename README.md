# Toast Service - Angular 6

Um toast service, para angular 6 que você pode baixar, customizar e implementar no seu projeto.

Incluir o arquivo _toast.scss no styles.scss via @import ou incluir no angular.json;

Como o `/toast` é um módulo, eu recomendo incluir diretamente no `imports: []` do app.module.ts. Isso serve para o angular renderizar o html correspondente, de forma apropriada.

Para usar o toast, é bem simples. Inclua ele no `constructor(private toast: toastService) {}` e pronto, já pode usar.

Exemplo de uso:

```typescript
...
export class SomeComponent implements OnInit {

  constructor(private toast: ToastService) {}

  ngOnInit(): void {
    this.toast.success('Toast de sucesso');
    this.toast.error('Toast de erro');
  }
}
```

# Requer o `ngx-toastr` na versão correspondente do angular 6
