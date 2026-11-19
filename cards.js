// Base de cards do quadro. Edite aqui ou exporte pelo botão Exportar JSON e cole o conteúdo.
// Desde 19/11: uma tarefa por frente, com subtarefas no campo subtasks ({t, dono, prazo, nota, ok}).
window.PANTYNOVA_CARDS = [
  {
    "id": "t01",
    "title": "Baseline D0: retrato dos dados de hoje para o comparativo de 6 meses",
    "tipo": "Análise",
    "status": "todo",
    "frente": "Baseline D0",
    "dono": "StartU",
    "lado": "Grupo",
    "prioridade": "alta",
    "prazo": "2026-12-04",
    "fonte": "Pedido do time 12/11",
    "onde": "Retrato dos indicadores atuais para comparar em abril de 2027. Corte sugerido: 31/10/2026. Cada frente levanta seus dados, sem travar as outras.",
    "subtasks": [
      {
        "t": "Definir indicadores e data de corte",
        "dono": "Todos (StartU + Insight)",
        "prazo": "2026-11-20",
        "nota": "",
        "ok": false
      },
      {
        "t": "Vendas, ecommerce e marketing (Shopify, GA4, Google Ads)",
        "dono": "StartU",
        "prazo": "2026-11-27",
        "nota": "parte já veio na apresentação de 19/11: conversão 1,36%, ticket R$ 329, abandono 60%",
        "ok": false
      },
      {
        "t": "Financeiro e fiscal (planilha da Dani e DRE reprocessado)",
        "dono": "Edu + Marcelo",
        "prazo": "2026-11-27",
        "nota": "",
        "ok": false
      },
      {
        "t": "Operação, estoque e marca",
        "dono": "Grupo",
        "prazo": "2026-11-27",
        "nota": "",
        "ok": false
      },
      {
        "t": "Consolidar e congelar num documento único no projeto",
        "dono": "StartU",
        "prazo": "2026-12-04",
        "nota": "",
        "ok": false
      },
      {
        "t": "Comparativo D0 x D180 (corte em 30/04/2027)",
        "dono": "StartU + Insight",
        "prazo": "2027-05-14",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t02",
    "title": "Acessos aos sistemas e dados base da operação",
    "tipo": "Acesso",
    "status": "doing",
    "frente": "Acessos e dados base",
    "dono": "Derek",
    "lado": "Pantynova",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · R12",
    "onde": "Acessos principais liberados. Falta o organograma formal com papéis e horas.",
    "subtasks": [
      {
        "t": "Shopify, incluindo CRM e automações de email",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "GA4 e Google Ads",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "ERP Tiny para o Marcelo, todos os CNPJs",
        "dono": "Derek",
        "prazo": "",
        "nota": "validado em 13/11",
        "ok": true
      },
      {
        "t": "Arquivos do tema para o Pedro",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Planilha financeira compartilhada com o time",
        "dono": "Iza",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Organograma, papéis, histórico de tentativas e horas por semana",
        "dono": "Pantynova",
        "prazo": "",
        "nota": "parcial: 2 CLT e 8 PJ, folha de cerca de R$ 38 mil",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t03",
    "title": "Regime especial: renovação e conformidade do estoque 003",
    "tipo": "Análise",
    "status": "doing",
    "frente": "Fiscal e tributário",
    "dono": "Marcelo",
    "lado": "Key for Taxes",
    "prioridade": "alta",
    "prazo": "",
    "fonte": "R06 · E17",
    "onde": "O RE 45.000037062-49 produzia efeitos até 30/09/2026, e o diferimento de ICMS da importação 2027 depende da renovação. Contadores externos: Muracioli (regime) e Carlos (apurações).",
    "subtasks": [
      {
        "t": "Cópia do regime especial recebida",
        "dono": "Dani",
        "prazo": "",
        "nota": "17/11",
        "ok": true
      },
      {
        "t": "Confirmar a emissão da renovação (protocolo e status)",
        "dono": "Financeiro / Muracioli",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Revisar o RE e a conformidade do estoque da conta 003",
        "dono": "Marcelo",
        "prazo": "",
        "nota": "o excedente fica no 003 em vez de zerar no dia",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t04",
    "title": "Fiscal: acessos, apurações e cadastro de produtos",
    "tipo": "Documento",
    "status": "doing",
    "frente": "Fiscal e tributário",
    "dono": "Marcelo",
    "lado": "Key for Taxes",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06",
    "onde": "Base da revisão fiscal depois da virada para o modelo industrial.",
    "subtasks": [
      {
        "t": "Acesso ao ERP da matriz (0001) e das lojas SP e BH",
        "dono": "Lola",
        "prazo": "",
        "nota": "confirmado em 13/11",
        "ok": true
      },
      {
        "t": "Acesso ao e-CAC para o Marcelo",
        "dono": "Financeiro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Apurações das filiais (ICMS, PIS/COFINS, IR)",
        "dono": "Financeiro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Revisar ST, IPI e origem dos produtos (CST 4 ou 5) no ERP",
        "dono": "Financeiro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Agendar ponto de controle com o contador Carlos",
        "dono": "Marcelo",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t05",
    "title": "DRE reprocessado e fluxo de caixa até 2027",
    "tipo": "Análise",
    "status": "doing",
    "frente": "Financeiro e caixa",
    "dono": "Marcelo + Edu",
    "lado": "Grupo",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · E17",
    "onde": "Marcelo monta o DRE a partir do fluxo de caixa da Dani (13/11). Contexto: 9 parcelamentos (2 federais, 7 de DIFAL), empréstimos em dia, CMV consolidado de 20% a 26%.",
    "subtasks": [
      {
        "t": "Planilhas financeiras e fluxo de caixa projetado",
        "dono": "Dani",
        "prazo": "",
        "nota": "links reenviados em 17/11",
        "ok": true
      },
      {
        "t": "Reprocessar o DRE de janeiro a outubro com os XMLs",
        "dono": "Marcelo",
        "prazo": "",
        "nota": "em andamento",
        "ok": false
      },
      {
        "t": "Fluxo de caixa até 2027 e DRE operacional, com despesas financeiras e parcelamentos à parte",
        "dono": "Marcelo",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Modelo de indicadores semanais",
        "dono": "Marcelo + Edu",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t06",
    "title": "Importação 2027: decidir estrutura e financiamento",
    "tipo": "Decisão",
    "status": "doing",
    "frente": "Importação e estoque",
    "dono": "Edu + Marcelo",
    "lado": "Grupo",
    "prioridade": "alta",
    "prazo": "",
    "fonte": "Q05 · R12 · E17",
    "onde": "Compra de R$ 616.642. A análise da Dani recomenda importação integral com FGI de R$ 300 mil; plano B é o cenário 3. Lead time da China de 3 a 4 meses.",
    "subtasks": [
      {
        "t": "Estudo de importação recebido",
        "dono": "Dani",
        "prazo": "",
        "nota": "17/11",
        "ok": true
      },
      {
        "t": "Validar premissas e decidir: integral com FGI ou cenário 3",
        "dono": "Edu + Marcelo",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Condições do FGI com o banco (uso parcial, amortização, CET, IOF)",
        "dono": "Dani",
        "prazo": "",
        "nota": "CET de referência 25,69% em 24x",
        "ok": false
      },
      {
        "t": "Outros investimentos no horizonte",
        "dono": "Dani",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Giro e cobertura por SKU e rupturas",
        "dono": "Pantynova",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Alternativa para carga de lítio (contêiner, frete e montagem no Brasil)",
        "dono": "Marcelo + Rodrigo",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t07",
    "title": "Lojas SP e BH: DRE direto e decisão",
    "tipo": "Decisão",
    "status": "doing",
    "frente": "Lojas físicas",
    "dono": "Grupo",
    "lado": "Grupo",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · R19",
    "onde": "SP fez R$ 12 mil em outubro contra R$ 17 mil projetados, com aluguel de cerca de R$ 7 mil. BH também abaixo do piso. O regime do ecommerce impede vender do site para a loja.",
    "subtasks": [
      {
        "t": "DRE de cada loja sem rateio",
        "dono": "Grupo",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Verificar se ainda há crédito de ICMS da operação de SP",
        "dono": "Lola",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Decidir o futuro de SP e BH",
        "dono": "Grupo",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t08",
    "title": "Margem, ticket e campanhas: fechar os números",
    "tipo": "Análise",
    "status": "doing",
    "frente": "Ticket e margem",
    "dono": "Derek + Marcelo",
    "lado": "Grupo",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · R12 · R19",
    "onde": "Em 2026: ticket médio de R$ 329 e conversão de 1,36% (1,99% em 2025). ROAS: collabs 12,0x, email 7,7x, Google 5,7x (3,1x em setembro).",
    "subtasks": [
      {
        "t": "Custo médio de frete do varejo por região e itens por pedido",
        "dono": "Pantynova",
        "prazo": "",
        "nota": "faixas de frete grátis já mapeadas",
        "ok": false
      },
      {
        "t": "Desconto efetivo e margem por campanha",
        "dono": "Derek",
        "prazo": "",
        "nota": "promoções 2026 e ROI por canal já recebidos",
        "ok": false
      },
      {
        "t": "Medir o impacto do novo contrato com a fornecedora Alessandra",
        "dono": "Marcelo + StartU",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Reunião técnica para automatizar a visão de margem",
        "dono": "Edu, Yuri, Marcelo e Forjaz",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t09",
    "title": "Taxas de cartão e checkout",
    "tipo": "Documento",
    "status": "doing",
    "frente": "Adquirência",
    "dono": "Dani",
    "lado": "Pantynova",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R12 · R19",
    "onde": "Mercado Pago e PagBrasil, prazo D14, taxa média de 4,76%. Chargeback zerado desde agosto com o antifraude novo.",
    "subtasks": [
      {
        "t": "Email para a Dani sobre custos e volumetria",
        "dono": "StartU + Iza",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Antecipação, volumetria por meio e última renegociação",
        "dono": "Dani",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Checar se o antifraude aumentou as recusas",
        "dono": "Pantynova",
        "prazo": "",
        "nota": "marco 1 do plano de Meta",
        "ok": false
      },
      {
        "t": "Avaliar o checkout AppMax",
        "dono": "Pedro + Edu",
        "prazo": "",
        "nota": "R$ 1,50 a R$ 2,00 por carrinho recuperado; não é prioridade agora",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t10",
    "title": "Shopify: custo dos apps e volta ao Plus",
    "tipo": "Análise",
    "status": "doing",
    "frente": "Ecommerce e Shopify",
    "dono": "StartU",
    "lado": "StartU",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · R12",
    "onde": "Plano Advanced, com CRM nativo no lugar de Klaviyo e RD Station. Já cortaram até R$ 40 mil em apps. Ideia: trocar apps por desenvolvimento com IA e reinvestir no Plus.",
    "subtasks": [
      {
        "t": "Mapear o custo de cada app e as taxas por venda",
        "dono": "StartU",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Avaliar a volta ao Shopify Plus",
        "dono": "StartU",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t11",
    "title": "Meta Ads: destravar e testar o Limão (marco 1, semanas 1 a 4)",
    "tipo": "Decisão",
    "status": "doing",
    "frente": "Marketing e mídia",
    "dono": "Pedro + Derek",
    "lado": "Grupo",
    "prioridade": "alta",
    "prazo": "",
    "fonte": "R12 · R19",
    "onde": "Monoproduto Limão: teste de 1 a 2 semanas com verba baixa e vídeo, régua de ROAS acima de 4,5x antes de escalar. Plano B: Pix. Hoje a Meta roda cerca de R$ 1.000 por semana em Black Friday.",
    "subtasks": [
      {
        "t": "Assinar a WeTracked e conectar pixel e API de conversões",
        "dono": "Derek",
        "prazo": "2026-11-19",
        "nota": "o pixel sai do compartilhamento de dados do Shopify",
        "ok": false
      },
      {
        "t": "Convidar o Pedro na BM e na conta de anúncios",
        "dono": "Derek",
        "prazo": "",
        "nota": "confirmar se a conta é CA3 ou CA6",
        "ok": false
      },
      {
        "t": "Conectar o gerenciador de anúncios à WeTracked",
        "dono": "Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Enviar a pasta de materiais brutos do Limão",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Primeira leva de criativos do Limão com IA",
        "dono": "Pedro",
        "prazo": "",
        "nota": "base de 2.728 criativos da Hello Nancy já classificada",
        "ok": false
      },
      {
        "t": "Sugerir roteadores de modelos para imagem e vídeo",
        "dono": "Pedro",
        "prazo": "",
        "nota": "não contratar Higgsfield",
        "ok": false
      },
      {
        "t": "Colocar 3 a 4 links na bio do Instagram",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Subir as campanhas do Limão",
        "dono": "Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "BM aquecida, só se as contas atuais não rodarem",
        "dono": "Pedro",
        "prazo": "",
        "nota": "cerca de R$ 6 mil",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t12",
    "title": "Site: página do Limão e melhorias de conversão",
    "tipo": "Análise",
    "status": "doing",
    "frente": "Ecommerce e Shopify",
    "dono": "Derek + Pedro",
    "lado": "Grupo",
    "prioridade": "alta",
    "prazo": "",
    "fonte": "R12 · R19",
    "onde": "Tema proposto, simulações e design system entregues. Kits do Lemon: R$ 239,04, R$ 280,90 (marcado) e R$ 314,50. Derek aplica o que couber sem arriscar o que já converte.",
    "subtasks": [
      {
        "t": "Layouts, tema proposto e design system entregues",
        "dono": "Pedro",
        "prazo": "",
        "nota": "ver doc Materiais Pedro pós 19-11",
        "ok": true
      },
      {
        "t": "Pop-up de saída no WisePops",
        "dono": "Derek",
        "prazo": "",
        "nota": "roleta no ar desde 12/11",
        "ok": true
      },
      {
        "t": "Página do Limão com 3 kits (produtos ocultos)",
        "dono": "Derek + Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Aplicar melhorias: módulo de compra, WhatsApp e tipografia",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Trocar textos do admin e preencher o número do WhatsApp",
        "dono": "Derek",
        "prazo": "",
        "nota": "tirar \"potente\" do Lemon e \"75% mais intensa\" da Mel",
        "ok": false
      },
      {
        "t": "Compartilhar o acesso ao ambiente do Claude com o time",
        "dono": "Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Teste de frete grátis para tudo (marco 2)",
        "dono": "Pedro + Edu",
        "prazo": "",
        "nota": "no 11/11 a conversão foi a 2,5%",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t13",
    "title": "CRM: WhatsApp, recompra e pesquisa com a base",
    "tipo": "Análise",
    "status": "doing",
    "frente": "CRM e recompra",
    "dono": "Yuri + Derek",
    "lado": "Grupo",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R12 · R19",
    "onde": "A recuperação manual da Gabi fez 14 vendas em 64 mensagens numa semana. Abandono perto de 60%. O fluxo do Shopify só alcança 3 meses após a compra; o lubrificante dura 6.",
    "subtasks": [
      {
        "t": "Piloto sem custo de recuperação de carrinho com IA via Leavo",
        "dono": "Yuri",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "API oficial do WhatsApp (Leavo ou Gupshup)",
        "dono": "Yuri + Derek",
        "prazo": "",
        "nota": "suporte da Gupshup ainda sem dono",
        "ok": false
      },
      {
        "t": "Carrinhos abandonados por mês, base com consentimento e intervalo de recompra",
        "dono": "StartU",
        "prazo": "",
        "nota": "entra no Baseline D0",
        "ok": false
      },
      {
        "t": "Hipóteses e perguntas da pesquisa de público (1º tri 2027)",
        "dono": "Derek + Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t14",
    "title": "Influência, conteúdo e Google Ads (marco 2 e paralelos)",
    "tipo": "Análise",
    "status": "todo",
    "frente": "Marketing e mídia",
    "dono": "Pedro",
    "lado": "StartU",
    "prioridade": "",
    "prazo": "",
    "fonte": "R12 · R19",
    "onde": "Nano influência só depois de validar a Meta: Conty e Inbazz, cupom por creator e coorte de 30 a 180 dias. Blog decidido: 1 artigo por semana.",
    "subtasks": [
      {
        "t": "Opções de plataformas de influência",
        "dono": "Pedro",
        "prazo": "",
        "nota": "Conty e Inbazz",
        "ok": true
      },
      {
        "t": "Contatar a Inbazz e enviar o site ao Derek",
        "dono": "Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Blog automático no Outrank com o playbook",
        "dono": "Pedro + Derek",
        "prazo": "",
        "nota": "previsão de 2 a 3 semanas",
        "ok": false
      },
      {
        "t": "Formatos de conteúdo para o YouTube",
        "dono": "Pedro",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Compartilhar o acompanhamento de performance do Google Ads",
        "dono": "Derek",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t15",
    "title": "Novos canais: Mercado Livre, maleta, Drops e caixa presenteável",
    "tipo": "Decisão",
    "status": "todo",
    "frente": "Novos canais",
    "dono": "Grupo",
    "lado": "Grupo",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · R12",
    "onde": "Ideias na fila. Sem urgência enquanto a Meta é a prioridade.",
    "subtasks": [
      {
        "t": "Decidir o que fazer com o Mercado Livre",
        "dono": "Grupo",
        "prazo": "",
        "nota": "faturamento baixo e guerra de preço",
        "ok": false
      },
      {
        "t": "Piloto de maleta em despedida de solteira",
        "dono": "Grupo",
        "prazo": "",
        "nota": "falta dono e data",
        "ok": false
      },
      {
        "t": "Motéis Drops e vendas antecipadas",
        "dono": "Grupo",
        "prazo": "",
        "nota": "",
        "ok": false
      },
      {
        "t": "Foto da caixa presenteável",
        "dono": "Lola",
        "prazo": "",
        "nota": "",
        "ok": false
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  },
  {
    "id": "t16",
    "title": "Reuniões e atas até 19/11",
    "tipo": "Reunião",
    "status": "done",
    "frente": "Governança",
    "dono": "StartU",
    "lado": "StartU",
    "prioridade": "",
    "prazo": "",
    "fonte": "Q05 · R06 · R12 · R19",
    "onde": "Rituais: quinzenal financeiro e fiscal às sextas, 14h30; ecommerce com o Derek sob demanda.",
    "subtasks": [
      {
        "t": "Respostas consolidadas até 05/11",
        "dono": "Pantynova",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Agenda e ata da reunião de 06/11",
        "dono": "StartU",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Convites recorrentes da quinzenal",
        "dono": "StartU",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Reunião de ecommerce de 12/11 e ata",
        "dono": "StartU",
        "prazo": "",
        "nota": "",
        "ok": true
      },
      {
        "t": "Reunião de ecommerce de 19/11",
        "dono": "StartU",
        "prazo": "",
        "nota": "",
        "ok": true
      }
    ],
    "atualizado": "2026-11-19T19:30:00Z"
  }
];
