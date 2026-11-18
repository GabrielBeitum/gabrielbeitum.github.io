# gabrielbeitum.github.io

Site do **Gabriel Beitum · Automações com IA** (@gabrielbeitum.ai), publicado pelo GitHub Pages em https://gabrielbeitum.github.io.

O site apresenta o trabalho com automações e IA para negócios e traz as páginas públicas do app **Gabrielbeitum.ai**, que responde os comentários e as mensagens do perfil @gabrielbeitum.ai no Instagram.

## Páginas

| Página | Link | Arquivo |
|---|---|---|
| Início | https://gabrielbeitum.github.io/ | `index.html` |
| Política de Privacidade | https://gabrielbeitum.github.io/privacidade.html | `privacidade.html` |
| Exclusão de dados | https://gabrielbeitum.github.io/exclusao-de-dados.html | `exclusao-de-dados.html` |
| Termos de Uso | https://gabrielbeitum.github.io/termos-de-uso.html | `termos-de-uso.html` |

## Estrutura

| Pasta ou arquivo | O que é |
|---|---|
| `index.html` | Página inicial |
| `privacidade.html`, `exclusao-de-dados.html`, `termos-de-uso.html` | Páginas legais do app. Os endereços não podem mudar, porque estão cadastrados no app da Meta |
| `img/` | Imagens do site (ícone, favicon e figuras das páginas) |
| `midia/` | Pasta temporária. Imagens e vídeos ficam aqui só durante a publicação no Instagram e são apagados em seguida |
| `.nojekyll` | Faz o GitHub Pages servir os arquivos como estão, sem processar nada |

## Como atualizar

### Pelo navegador (mudanças pequenas)

1. Abra o arquivo no GitHub e clique no lápis (**Edit this file**).
2. Faça a mudança e clique em **Commit changes**, direto na `main`.
3. Em 1 ou 2 minutos o site atualiza sozinho. Acompanhe na aba **Actions**: o processo "pages build and deployment" fica verde quando termina.
4. Abra o site e confira. Se ainda aparecer a versão antiga, atualize a página com `Ctrl + F5`.

### Pelo computador (mudanças maiores)

```bash
git clone https://github.com/GabrielBeitum/gabrielbeitum.github.io
cd gabrielbeitum.github.io
# edite os arquivos e abra o index.html no navegador para conferir
git pull --rebase origin main
git add .
git commit -m "Descreva a mudança"
git push origin main
```

O `git pull --rebase` antes do push é importante: as publicações do Instagram também usam este repositório.

### Depois de cada atualização, confira

- A página inicial abre bem no computador e no celular.
- As 3 páginas legais continuam abrindo: privacidade, exclusão de dados e termos.
- Os botões de WhatsApp e Instagram levam aos endereços certos.

### Imagens

- Use PNG ou JPG otimizados, com até ~300 KB cada, e guarde em `img/`.
- Nomes em minúsculas, sem acentos e com hífens (ex.: `fluxo-clinica.png`).

## Cuidados

- O repositório é **público**: nunca coloque aqui senhas, tokens, chaves de API nem dados de clientes.
- Não renomeie nem apague as páginas legais.
- Não use a pasta `midia/` para arquivos do site, porque ela é esvaziada a cada publicação.

## Contato

Gabriel Marcello Beitum · CNPJ 69.541.013/0001-74 · Quatá/SP
WhatsApp: https://wa.me/5518996786028 · Instagram: https://www.instagram.com/gabrielbeitum.ai/ · gabrielbeitum944.work@gmail.com
