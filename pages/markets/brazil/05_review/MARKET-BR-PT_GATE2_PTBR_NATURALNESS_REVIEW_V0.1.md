# MARKET-BR-PT Gate 2 · Revisão independente de naturalidade pt-BR V0.1

## 1. Controle e veredito

- Review ID: `MARKET-BR-PT-G2-PTBR-NAT-01`.
- Página / fase: `MARKET-BR-PT` / Gate 2 Full Buyer Clean Copy.
- Arquivo revisado: `pages/markets/brazil/04_planning/MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`.
- Referências de autoridade: Brief V0.2; Manifest V0.2 e decisões `BR-PT-D01`, `BR-PT-D02` e `BR-PT-D03`; Skeleton A V0.1 e Content Contract C V0.1 para SEO Title, Meta e comportamento dos destinos.
- Modo: revisão inicial independente; nenhuma alteração foi feita no Buyer Copy.
- Veredito: `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS`.
- Findings obrigatórios: `PTBR-N01`, `PTBR-N02`, `PTBR-N03`, `PTBR-N04`.

A página é clara para uma equipe brasileira de compras ou avaliação técnica e preserva o fluxo supplier/product-first aprovado. Não há `BLOCKER` nem `IMPORTANT`: a cardinalidade de Documents, os caminhos para informações ainda desconhecidas, os labels em inglês e os limites de comércio exterior permanecem compreensíveis. Quatro ajustes `MINOR` são necessários antes do envio à revisão de Project Control. Este veredito não aprova o Gate 2, não substitui Project Control Review e não registra aprovação do usuário.

O SEO Title `Fornecedor de dióxido de titânio para o Brasil | TiO2 Malaysia`, controlado no Contract C V0.1, é natural, direto e coerente com a busca principal. O H1 `Dióxido de titânio originário da Malásia para compradores no Brasil` é natural e preserva a origem, o destino e a ausência de uma alegação de presença local.

## 2. Frase de ação com maior risco de carga para o comprador

> Envie uma solicitação separada para cada grade quando precisar especificar os tipos de documento individualmente.

Rastreio: comprador → abre e envia uma solicitação separada no formulário `/request-documents/` para cada grade que precise de associação própria entre grade e tipos de documento → a equipe recebe uma seleção estruturada de um grade com um ou mais tipos de documento → cada conjunto pode ser analisado sem inferir uma associação que o formulário não coleta.

A frase cria trabalho adicional, mas corresponde ao receiver atual e evita uma expectativa falsa de que `Additional Requirements` relacione tipos de documento a vários grades. Deve ser preservada. A frase anterior também deixa claro que grades adicionais podem ser informados apenas como contexto complementar.

## 3. Frase mais fraca do Buyer Copy

> A IKHLAS TITANIUM (MALAYSIA) SDN. BHD. fornece dióxido de titânio industrial originário da Malásia para compradores no Brasil que avaliam o fornecimento para tintas e revestimentos, plásticos e produção de masterbatch.

A repetição próxima de `fornece` e `fornecimento`, somada à sequência longa de complementos, torna a abertura menos fluida do que o restante da página. O sentido continua identificável, mas a primeira leitura exige esforço desnecessário. Isso gera o Finding `PTBR-N02`.

## 4. Valor específico do Brasil e caminhos com informação incompleta

O valor específico aparece em dois pontos visíveis: a abertura confirma a oferta de dióxido de titânio industrial originário da Malásia para compradores no Brasil, e o módulo de comércio exterior encaminha o leitor a uma atualização datada, revisada em `06/09/2026`, sem reproduzir alíquotas ou conclusões aduaneiras.

Os caminhos de informação incompleta são executáveis:

- grade ainda desconhecido: o pedido de documentos pode ser iniciado, mas exige a seleção de um grade antes do envio; a cotação oferece o label real `Not sure / Need help`;
- mais de um grade: grades adicionais entram em `Additional Requirements`; solicitações separadas preservam a associação individual de tipos de documento;
- aplicação ainda não definida: o RFQ oferece `Other / Not sure`;
- quantidade ainda não fechada: a página aceita quantidade necessária ou estimada em `toneladas métricas (MT)`;
- destino ainda incompleto: cidade, porto ou ponto de recebimento são solicitados apenas `se conhecido`.

Os labels em inglês `Product / Grade`, `Not sure / Need help`, `Application`, `Other / Not sure` e `Additional Requirements` devem permanecer exatamente como aparecem no formulário de destino. A nota visível de que os conteúdos e formulários vinculados estão em inglês dá contexto suficiente sem repetir o aviso em cada CTA.

## 5. Fidelidade das fontes e dos owners

- IKHLAS TITANIUM (MALAYSIA) SDN. BHD. → fornecimento de dióxido de titânio industrial originário da Malásia → compradores no Brasil: `SUPPORTED_AS_WRITTEN` pelas autoridades de identidade e origem consumidas pelo Brief e pelo Manifest. A frase não cria escritório, estoque, distribuidor, importador ou fabricação no Brasil.
- Trade Resource → revisão em `06/09/2026`, reunião de fontes oficiais datadas e indicação de dados da remessa a verificar: `SUPPORTED_AS_WRITTEN` pelo Brief e pelo contrato do owner. O Buyer Copy não importa medida, alíquota, escopo, resultado processual ou conclusão aduaneira. A verificação de freshness antes da primeira publicação continua com `RES-TRADE-BR`.
- `O Certificado de Origem está disponível mediante solicitação.`: `SUPPORTED_AS_WRITTEN` e deve permanecer exatamente igual por força de `BR-PT-D02`. A página não amplia essa frase para todas as remessas nem promete aceitação aduaneira.

O Finding `PTBR-N01` trata apenas da naturalidade e da precisão lexical de `comercial`; não contesta o mapeamento factual para o Trade Resource.

## 6. Revisões obrigatórias

### PTBR-N01 · `MINOR` · “comercial” torna o módulo de comércio exterior ambíguo

- Local: heading `Consulte informações comerciais atualizadas para o Brasil`, CTA `Consultar a atualização comercial...` e encerramento `avaliação comercial e aduaneira da remessa`.
- Interpretação e impacto: em pt-BR, `informações comerciais` e `avaliação comercial` podem sugerir preço, condições de venda ou análise econômica. O módulo trata de comércio exterior e verificação aduaneira; a escolha atual perde precisão e soa como tradução de *trade* por *commercial*.
- Revisão exigida: usar `comércio exterior` ou formulação equivalente de modo consistente no heading, CTA e frase final, sem acrescentar medida, alíquota, escopo ou conclusão.
- Condição de aceite: o leitor identifica imediatamente que o link leva a contexto de comércio exterior e aduana, e a página continua sendo apenas uma introdução datada ao owner.

### PTBR-N02 · `MINOR` · abertura densa e repetitiva

- Local: primeira frase do Hero, citada na seção 3.
- Interpretação e impacto: a repetição `fornece` / `fornecimento` e o encadeamento de origem, destino e três aplicações reduzem a fluidez da mensagem principal.
- Revisão exigida: reescrever a frase para eliminar a repetição e reduzir a carga sintática, preservando integralmente empresa, TiO2 industrial, origem da Malásia, compradores no Brasil e os três contextos de aplicação.
- Condição de aceite: a frase pode ser entendida em uma leitura e não cria presença local, recomendação de grade nem adequação garantida.

### PTBR-N03 · `MINOR` · CTA pouco idiomático

- Local: `Conhecer os grades de produto`.
- Interpretação e impacto: embora `grade` seja aceitável e usado no setor como substantivo masculino, a combinação `conhecer os grades de produto` soa mais mecânica do que o restante da página e diverge do CTA aprovado `Conhecer os produtos`.
- Revisão exigida: usar `Conhecer os produtos`, já aprovado em `BR-PT-D01`, ou outra formulação neutra igualmente natural que não transforme o Product Hub em recomendador.
- Condição de aceite: o CTA é idiomático em pt-BR, mantém o destino `/products/` e não promete seleção ou recomendação.

### PTBR-N04 · `MINOR` · coordenação pouco clara na lista de documentos

- Local: `os documentos de origem e qualificação de fornecedor necessários à sua análise`.
- Interpretação e impacto: a ausência de paralelismo permite uma leitura momentânea em que `origem e qualificação` parecem modificar o mesmo documento ou a origem parece qualificar o fornecedor. Isso enfraquece a distinção entre documentação de origem e documentação de qualificação do fornecedor.
- Revisão exigida: tornar as duas categorias gramaticalmente paralelas, por exemplo `documentos de origem e de qualificação do fornecedor`, sem alterar os tipos disponíveis no receiver.
- Condição de aceite: as duas finalidades são entendidas de imediato e a frase continua sem prometer disponibilidade automática, aprovação ou entrega.

## 7. Revisões sugeridas

- No Hero, `informações por aplicação` pode ganhar fluidez como `informações organizadas por aplicação`; `documentos de suporte` pode ser substituído por `documentos de apoio` ou `documentação técnica`, desde que a opção não restrinja as categorias reais do formulário.
- A Meta Description é compreensível, mas a cadeia `...para tintas, plásticos e masterbatch no Brasil` permite que `no Brasil` pareça modificar apenas `masterbatch`. Uma revisão de ordem pode ligar o destino ao comprador ou à cotação com mais clareza, sem mudar o SEO Title nem introduzir presença local.

Essas sugestões são opcionais e não devem prolongar a revisão se as quatro revisões obrigatórias forem resolvidas sem regressão.

## 8. Conteúdo a preservar

- SEO Title e H1 atuais.
- CTAs aprovados `Solicitar cotação` e `Conhecer os produtos`.
- aviso único de que os destinos vinculados estão em inglês;
- uso consistente e industrialmente aceitável de `grade` como substantivo masculino, além de `resina carreadora`, `masterbatch`, TDS, SDS, COA e `toneladas métricas (MT)`;
- prompts distintos para tintas e revestimentos, plásticos e produção de masterbatch;
- cardinalidade: um grade selecionado por solicitação, um ou mais tipos de documento, grades adicionais apenas como contexto sem mapeamento próprio e solicitação separada quando necessário;
- frase exata de `BR-PT-D02`;
- data brasileira `06/09/2026`, limite de owner do Trade Resource e ausência de conclusão comercial/aduaneira;
- labels ingleses exatos necessários para localizar os controles no receiver;
- caminhos para grade, aplicação, quantidade e destino ainda desconhecidos;
- frase pós-envio baseada em análise humana e contato pelos dados fornecidos, sem promessa de aprovação, preço, estoque ou entrega.

Próximo responsável: Gate 2 Execution Agent, para revisar o Buyer Copy B e apresentar uma resposta de revisão. Depois, um revisor independente deve verificar as quatro correções e a ausência de regressões antes de qualquer Project Control Review.
