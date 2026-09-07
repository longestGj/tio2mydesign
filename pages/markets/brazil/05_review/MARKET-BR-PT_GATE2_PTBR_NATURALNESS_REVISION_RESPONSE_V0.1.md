# MARKET-BR-PT · Resposta à revisão de naturalidade pt-BR V0.1

Data: 07/09/2026. Status: `PTBR-N01–N04 REVISION_COMPLETE / PENDING_INDEPENDENT_REREVIEW`.

## 1. Objetos revisados

- Revisão de origem: `MARKET-BR-PT_GATE2_PTBR_NATURALNESS_REVIEW_V0.1.md`.
- Buyer Copy anterior: `MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`.
- Buyer Copy revisado: `MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`.
- Skeleton revisado: `MARKET-BR-PT_GATE2_CONTENT_SKELETON_V0.2.md`.
- Contrato revisado: `MARKET-BR-PT_GATE2_CONTENT_CONTRACT_V0.2.md`.

O Contract foi versionado porque o heading usado como localizador e a Meta Description mudaram. Nenhum receiver, CTA target, fato, owner, cardinalidade ou limite de Schema foi alterado.

## 2. Respostas aos Findings obrigatórios

### `PTBR-N01` — terminologia de comércio exterior

- Heading: `Consulte informações atualizadas sobre comércio exterior no Brasil`.
- CTA: `Consultar a atualização sobre comércio exterior de dióxido de titânio no Brasil`.
- Ação final: `Use essas fontes e informações na sua própria avaliação da remessa quanto a comércio exterior e tratamento aduaneiro.`

O módulo deixa de usar `comercial` como tradução de *trade*. A atualização continua sendo uma fonte datada para verificação; não determina alíquota, classificação, escopo, elegibilidade ou resultado aduaneiro.

### `PTBR-N02` — fluidez do Hero

O período único foi dividido em três frases:

> A IKHLAS TITANIUM (MALAYSIA) SDN. BHD. fornece dióxido de titânio industrial originário da Malásia para compradores no Brasil. Consulte os produtos e informações organizadas por aplicação para tintas e revestimentos, plásticos e produção de masterbatch. Solicite documentos de apoio ou envie os dados do seu projeto para solicitar uma cotação.

A empresa, o produto industrial, a origem, o destino e os três contextos de aplicação foram preservados. A repetição `fornece` / `fornecimento` foi eliminada.

### `PTBR-N03` — CTA de produtos

`Conhecer os grades de produto` foi substituído por `Conhecer os produtos`, conforme o CTA já aprovado em `BR-PT-D01`. O destino permanece `/products/` e nenhuma recomendação é prometida.

### `PTBR-N04` — paralelismo dos documentos

`documentos de origem e qualificação de fornecedor` foi substituído por `documentos de origem e de qualificação do fornecedor`. As duas categorias ficam gramaticalmente separadas, sem mudar as opções do receiver.

## 3. Ajuste sugerido aceito

A Meta foi reorganizada para ligar o destino aos compradores e separar os três verbos de ação:

> Dióxido de titânio originário da Malásia para compradores no Brasil. Conheça grades para tintas, plásticos e masterbatch. Solicite documentos ou uma cotação.

Comprimento: `157` caracteres com espaços. O Title e o H1 permanecem inalterados.

## 4. Regressão de Buyer Copy e contratos

- CTAs aprovados `Solicitar cotação` e `Conhecer os produtos` permanecem.
- O aviso único sobre destinos em inglês permanece.
- Os labels reais `Product / Grade`, `Not sure / Need help`, `Application`, `Other / Not sure` e `Additional Requirements` permanecem.
- Documents continua com um grade estruturado, um ou mais tipos de documento, grades adicionais apenas como contexto e solicitações separadas somente quando houver mapeamento independente.
- A frase exata `O Certificado de Origem está disponível mediante solicitação.` permanece.
- A data `06/09/2026`, o owner `RES-TRADE-BR` e a verificação de freshness antes da primeira publicação permanecem.
- Quantidade necessária ou estimada em MT, destino Brasil e cidade/porto/ponto de recebimento opcional permanecem.
- A frase pós-envio, os links, o canonical de planejamento, GEO e `WebPage`/`BreadcrumbList` permanecem dentro dos limites aprovados.

Gate 2 continua aberto. Gate 3 não está autorizado.
