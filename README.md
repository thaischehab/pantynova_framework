# Pantynova · Quadro de pendências

Kanban de acompanhamento do projeto StartU + Insight com a Pantynova: tarefas, acessos, documentos e perguntas em aberto.

## Estrutura

* `index.html`: o quadro (HTML, CSS e JS em um arquivo, sem build).
* `cards.js`: a base de cards que o quadro carrega.
* `.nojekyll`: faz o GitHub Pages servir os arquivos como estão.

## Como atualizar a base

1. No quadro, clique em **Exportar JSON**.
2. Abra `cards.js`, substitua a lista depois de `window.PANTYNOVA_CARDS =` pelo conteúdo exportado e faça o commit.
3. Quem já tinha editado localmente clica em **Restaurar base** para carregar a versão nova.

Conteúdo de uso interno StartU + Insight.
