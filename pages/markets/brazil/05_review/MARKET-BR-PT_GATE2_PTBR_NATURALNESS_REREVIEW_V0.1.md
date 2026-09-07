# MARKET-BR-PT Gate 2 · Releitura independente de naturalidade pt-BR V0.1

## 1. Controle e veredito

- Review ID: `MARKET-BR-PT-G2-PTBR-NAT-RR-01`.
- Modo: releitura independente após revisão.
- Buyer Copy verificado: `pages/markets/brazil/04_planning/MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`.
- Contrato verificado: `pages/markets/brazil/04_planning/MARKET-BR-PT_GATE2_CONTENT_CONTRACT_V0.2.md`.
- Resposta verificada: `pages/markets/brazil/05_review/MARKET-BR-PT_GATE2_PTBR_NATURALNESS_REVISION_RESPONSE_V0.1.md`.
- Revisão de origem: `pages/markets/brazil/05_review/MARKET-BR-PT_GATE2_PTBR_NATURALNESS_REVIEW_V0.1.md`.
- Veredito: `READY_FOR_PROJECT_CONTROL_REVIEW`.
- Findings obrigatórios em aberto: `NONE`.
- Novos Findings: `NONE`.

Os quatro Findings `PTBR-N01`–`PTBR-N04` foram resolvidos. A releitura integral, do breadcrumb ao CTA final, não encontrou regressão de naturalidade, cardinalidade de Documents, labels em inglês, limite do Trade Resource, frase de Certificado de Origem ou caminho de informação incompleta. Este veredito encerra somente a revisão independente de naturalidade pt-BR; não aprova nem fecha o Gate 2, não substitui Project Control Review e não registra aprovação do usuário.

## 2. Resultado por Finding

### `PTBR-N01` · `RESOLVED`

- Cópia revisada: heading `Consulte informações atualizadas sobre comércio exterior no Brasil`; CTA `Consultar a atualização sobre comércio exterior de dióxido de titânio no Brasil`; encerramento `Use essas fontes e informações na sua própria avaliação da remessa quanto a comércio exterior e tratamento aduaneiro.`
- Aceite: `PASS`. O falso amigo `comercial` foi removido nos três pontos. O leitor entende que o módulo trata de comércio exterior e verificação aduaneira.
- Regressão adjacente: `PASS`. Permanecem a data `06/09/2026`, as fontes oficiais datadas, os detalhes de produto/origem/classificação/remessa a verificar e a responsabilidade do comprador por sua avaliação. Não foram introduzidos medida, alíquota, escopo, resultado processual, classificação decidida ou resultado aduaneiro.

### `PTBR-N02` · `RESOLVED`

- Cópia revisada: `A IKHLAS TITANIUM (MALAYSIA) SDN. BHD. fornece dióxido de titânio industrial originário da Malásia para compradores no Brasil. Consulte os produtos e informações organizadas por aplicação para tintas e revestimentos, plásticos e produção de masterbatch. Solicite documentos de apoio ou envie os dados do seu projeto para solicitar uma cotação.`
- Aceite: `PASS`. A abertura foi dividida em três frases, eliminou `fornece` / `fornecimento` e ficou clara em uma leitura.
- Regressão adjacente: `PASS`. Empresa, produto industrial, origem da Malásia, compradores no Brasil e três contextos de aplicação permanecem. A nova redação não cria presença local, adequação garantida ou recomendação de grade.

### `PTBR-N03` · `RESOLVED`

- Cópia revisada: `Conhecer os produtos` → `/products/`.
- Aceite: `PASS`. O CTA agora usa a formulação natural e já aprovada em `BR-PT-D01`.
- Regressão adjacente: `PASS`. O destino continua sendo o Product Hub neutro, sem seleção, ranking ou recomendação para o Brasil.

### `PTBR-N04` · `RESOLVED`

- Cópia revisada: `documentos de origem e de qualificação do fornecedor`.
- Aceite: `PASS`. As duas categorias estão gramaticalmente paralelas e são entendidas sem releitura.
- Regressão adjacente: `PASS`. Os tipos do receiver não mudaram, e a frase não promete acesso automático, aprovação ou entrega.

## 3. Meta, Title e H1

- SEO Title: `Fornecedor de dióxido de titânio para o Brasil | TiO2 Malaysia` — `PASS`; natural, direto e coerente com a intenção de fornecedor externo.
- H1: `Dióxido de titânio originário da Malásia para compradores no Brasil` — `PASS`; preserva origem e destino sem alegar entidade local.
- Meta Description: `Dióxido de titânio originário da Malásia para compradores no Brasil. Conheça grades para tintas, plásticos e masterbatch. Solicite documentos ou uma cotação.` — `PASS`; 157 caracteres com espaços, três ações legíveis e sem ambiguidade de ligação de `no Brasil` apenas a masterbatch.

A mudança de Meta está corretamente versionada no Contract C V0.2. Canonical e hreflang continuam descritos apenas como direção posterior de implementação/QA.

## 4. Varredura integral de regressões

- Documents: `PASS`. Cada solicitação continua abrangendo um grade selecionado e um ou mais tipos de documento. Grades adicionais continuam permitidos em `Additional Requirements` apenas como contexto, sem associação própria de tipos; pedidos separados permanecem indicados somente quando essa associação individual é necessária.
- Informação incompleta: `PASS`. Grade desconhecido pode seguir por `Not sure / Need help` no RFQ; o pedido de documentos exige um grade antes do envio; `Other / Not sure` cobre aplicação; a quantidade pode ser estimada em `toneladas métricas (MT)`; cidade, porto ou ponto de recebimento são opcionais quando desconhecidos.
- Labels do receiver em inglês: `PASS`. `Product / Grade`, `Not sure / Need help`, `Application`, `Other / Not sure` e `Additional Requirements` permanecem exatos. O aviso único sobre conteúdos e formulários em inglês permanece visível.
- Trade: `PASS`. O módulo conserva o handoff curto e datado ao owner `RES-TRADE-BR`; não reproduz ou deduz conteúdo regulatório. A verificação de freshness antes da primeira publicação permanece responsabilidade do owner.
- COO: `PASS`. A frase exata `O Certificado de Origem está disponível mediante solicitação.` aparece uma vez e não foi ampliada para todas as remessas, aceitação aduaneira ou tratamento tarifário.
- Aplicações e produtos: `PASS`. Tintas e revestimentos, plásticos e produção de masterbatch conservam prompts industriais distintos; `grade`, `resina carreadora`, TDS, SDS e COA permanecem naturais no contexto.
- CTAs e pós-envio: `PASS`. Destinos e hierarquia de ação não mudaram. A frase pós-envio descreve análise humana e contato pelos dados fornecidos, sem garantir cotação, preço, estoque, fornecimento ou entrega.
- Escopo Brasil: `PASS`. A cópia não cria escritório, fábrica, estoque, distribuidor, importador ou cliente local e não apresenta um grade recomendado para o Brasil.

## 5. Conteúdo preservado e encaminhamento

Devem permanecer o SEO Title, o H1, a Meta revisada, os CTAs `Solicitar cotação` e `Conhecer os produtos`, o aviso de idioma, os labels ingleses exatos, a cardinalidade de Documents, a frase exata de COO, a data `06/09/2026`, o limite do Trade Resource e todos os caminhos de informação incompleta.

Próximo responsável: Project Control Reviewer. O Controller deve registrar esta releitura no pacote/Manifest apropriado sem interpretar `READY_FOR_PROJECT_CONTROL_REVIEW` como aprovação ou fechamento do Gate 2.
