# MARKET-BR-PT · Gate 2 Content Skeleton V0.1

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED`. This is deliverable A under the approved serial Full Copy batch. The batch authority permits Full Copy without a separate page-level Skeleton approval; it does not approve this Skeleton, close Gate 2 or start Gate 3.

## 1. Page task and buyer path

The page serves Brazilian procurement, importing and technical/formulation teams evaluating an external industrial TiO2 supplier. It uses natural PT-BR to establish Malaysia origin and Brazil destination, route product/application evaluation, explain document requests and prepare a quotation. Detailed trade conclusions remain with `RES-TRADE-BR`.

**confirmar o fornecimento originário da Malásia para o Brasil → avaliar produtos por aplicação → solicitar documentos para um produto/grade → consultar a atualização comercial datada quando necessário → enviar uma solicitação de cotação para o Brasil**

The Hero provides immediate quotation and product routes. The buyer does not need the exact product/grade before starting the RFQ. A single visible note explains that linked owner pages and forms are currently in English.

## 2. Proposed page content in order

### BR-PT-01 · Hero

**H1**

> Dióxido de titânio originário da Malásia para compradores no Brasil

**Candidate Hero copy**

> A IKHLAS TITANIUM (MALAYSIA) SDN. BHD. fornece dióxido de titânio industrial originário da Malásia para compradores no Brasil que avaliam o fornecimento para tintas e revestimentos, plásticos e produção de masterbatch. Conheça os produtos e as informações por aplicação, solicite documentos de suporte ou envie os dados do seu projeto para solicitar uma cotação.

**Actions**

- `Solicitar cotação` → `/request-a-quote/`
- `Conhecer os produtos` → `/products/`

### BR-PT-02 · Avalie os produtos conforme a aplicação

The module starts from information the buyer already knows and uses separate PT-BR prompts:

- **Tintas e revestimentos:** system, end use, aqueous/solvent base, indoor/outdoor context, substrate and evaluation properties.
- **Plásticos:** resin, transformation process, finished product, appearance, dispersion and processing requirements.
- **Produção de masterbatch:** carrier resin, production process, downstream product and criteria for TiO2 as formulation pigment.

The Product Hub and three Application pages own detailed evaluation. The market page creates no Brazil-specific recommendation or ranking.

**Actions**

- `Avaliar TiO2 para tintas e revestimentos` → `/applications/titanium-dioxide-for-coatings/`
- `Avaliar TiO2 para plásticos` → `/applications/titanium-dioxide-for-plastics/`
- `Avaliar TiO2 para masterbatch` → `/applications/titanium-dioxide-for-masterbatch/`
- `Conhecer os grades de produto` → `/products/`

### BR-PT-03 · Documentos para avaliação do produto

The module uses PT-BR document names with the shared TDS/SDS/COA abbreviations. It preserves the actual receiver behavior: one selected Product Grade, one or more document types, Grade selection required before submission, supplementary Grade names without independent document-type mapping, and separate requests only when each Grade needs its own document-type instructions.

The exact approved sentence appears once:

> O Certificado de Origem está disponível mediante solicitação.

**Actions**

- `Solicitar documentos` → `/request-documents/`
- `Acessar a central de documentos` → `/documents/`

### BR-PT-04 · Consulte informações comerciais atualizadas para o Brasil

The module gives the Trade Resource review date in Brazilian numeric style, `06/09/2026`, and states that the linked owner gathers dated official sources and shipment details to verify. The buyer remains responsible for its shipment-specific assessment. No rate, scope conclusion, proceeding result, customs result or avoidance message is rendered.

**Action**

- `Consultar a atualização comercial sobre dióxido de titânio no Brasil` → `/resources/brazil-titanium-dioxide-anti-dumping-duty/`

### BR-PT-05 · Prepare uma solicitação de cotação para o Brasil

The checklist follows the English receiver's real controls while explaining them in PT-BR:

- one Product / Grade or `Not sure / Need help`;
- one Application or `Other / Not sure`;
- other candidate Grades and non-confidential context in `Additional Requirements`;
- required or estimated quantity in `toneladas métricas (MT)`;
- delivery location in Brazil, with city, port or receiving point if known;
- company and business-contact details.

> Após o envio, nossa equipe analisará as informações e entrará em contato pelos dados fornecidos.

**Primary action**

- `Solicitar cotação` → `/request-a-quote/`

Brazil may be passed as visible, editable destination context. No Product/Grade, Application, quantity, city or port is inferred. Submission does not guarantee a quotation, price, stock, supply or delivery.

## 3. Key module decisions

| Decision | Reason and effect |
|---|---|
| Use the approved PT-BR H1 and CTA direction rather than translating the EN H1 | Establishes the external-supply relationship naturally and preserves `para o Brasil`. |
| Provide one English-destination notice | Makes the current language transition understandable without repeating it at every link. |
| Use distinct industrial Application prompts | Helps a buyer describe its evaluation while leaving facts and recommendations with Product/Application owners. |
| Retain the Documents cardinality explanation | Prevents a Portuguese reader from inferring a public inventory or multi-Grade document mapping. |
| Use a dated Trade Resource handoff | Gives Brazil-specific value without reproducing trade-measure content. |
| End with natural PT-BR RFQ preparation | Preserves real English option labels while explaining unknown/multiple Grade, estimated MT and Brazil delivery paths. |

## 4. SEO direction and review focus

- SEO Title: `Fornecedor de dióxido de titânio para o Brasil | TiO2 Malaysia`
- Meta Description: `Conheça grades de dióxido de titânio originário da Malásia para tintas, plásticos e masterbatch no Brasil. Solicite documentos ou uma cotação.`
- Canonical planning direction: `https://tio2malaysia.com/pt-br/markets/brazil/`
- Language: `pt-BR`; reciprocal `en`/`pt-BR` hreflang remains conditional on both pages being approved and live.
- Schema direction: `WebPage` + `BreadcrumbList`; no Brazil `LocalBusiness`, `Product`, `Offer`, price, duty, certification, availability, shipping or trade-status semantics.

Independent Buyer Review should test the complete PT-BR Buyer Copy, Documents and RFQ receiver accuracy, language-transition notice, and Trade owner boundary. A separate independent PT-BR naturalness review is required before handoff. Full Copy and module order remain pending review, project-control review and batch user approval.
