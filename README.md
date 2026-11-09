# Pantynova · Quadro de pendências

Kanban de acompanhamento do projeto StartU + Insight com a Pantynova: tarefas, acessos, documentos e perguntas em aberto.

Base inicial: pendências de 05/11/2026 cruzadas com a reunião Financeiro, Tributário e Importação de 06/11/2026.

## Estrutura

* `index.html`: o quadro (HTML, CSS e JS em um arquivo, sem build).
* `data/cards.js`: a base de cards que o quadro carrega.
* `.nojekyll`: faz o GitHub Pages servir os arquivos como estão.

## Como usar

Abra `index.html` no navegador ou pela URL do GitHub Pages. Arraste os cards entre colunas, use o seletor de status ou clique no título para editar.

As edições ficam salvas no navegador de quem editou. Para todo mundo ver a mesma versão:

1. Clique em **Exportar JSON**.
2. Abra `data/cards.js` no GitHub, substitua a lista depois de `window.PANTYNOVA_CARDS =` pelo conteúdo exportado e faça o commit.
3. Quem já tinha editado localmente clica em **Restaurar base** para carregar a versão nova.

## Fontes

* Q05: doc "Pantynova · Perguntas, respostas e pendências" (05/11/2026).
* R06: anotações e ata da reunião de 06/11/2026.

Conteúdo de uso interno StartU + Insight.
