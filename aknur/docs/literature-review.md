# Literature Review: Digital Coordination and Privacy for SEN Support

**Search/update date:** 22 October 2026  
**Review type:** Focused narrative review for project scoping; not a registered systematic review.

## Scope and method

The review focused on (a) digital/telehealth support involving children with developmental disabilities and caregivers, (b) parent-oriented mobile/digital interventions, (c) personal health records and communication, and (d) child-app data practices and privacy. Sources were located through PubMed/PMC, JMIR, and scholarly publisher records using combinations of `developmental disability`, `autism`, `caregiver`, `parent`, `telehealth`, `mHealth`, `personal health record`, `children's apps`, `privacy`, and `security`. Priority was given to systematic reviews, meta-analyses, randomized trials, and empirical studies from 2020–2026; foundational PHR work and a 2019 review are retained where relevant. This focused search is not exhaustive and was not screened with a PRISMA protocol.

## Critical synthesis

### Caregiver involvement and digital delivery

Across recent reviews, digital interventions are commonly caregiver-mediated and use videoconferencing, web modules, or mobile tools. A 2025 systematic review of early telehealth intervention for young children with developmental disabilities found 18 studies, most using synchronous caregiver coaching; it reported promise for access and family-centred care but noted narrow populations and gaps in cognitive and family outcomes [1]. A review of digital wellbeing interventions for family carers found a growing but heterogeneous evidence base with limited high-quality randomized trials [2]. These results support examining coordination and communication, but do not demonstrate that a shared diary/calendar alone improves child outcomes.

Evidence about effectiveness is mixed. A meta-analysis of technology-assisted parent-mediated ASD interventions found no significant pooled differences in social communication, social functioning, or language outcomes across included RCTs [3]. A 2024 trial comparing therapist-assisted and self-directed telehealth parent intervention found effects on parent learning for the therapist-assisted arm and linked engagement to program satisfaction and assistance; it did not find effects on parent self-efficacy or stress [4]. A 2022 randomized comparison of online and in-person parent training showed both formats were acceptable, while completion was lower in the online arm [5]. A 2023 randomized clinical trial of telehealth parent-child interaction therapy for young children with developmental delay offers support for testing remote delivery, while its intervention context differs from this project's record-coordination feature [6]. A 2023 caregiver telehealth ABA evaluation reported promising implementation fidelity but called for stronger efficacy evidence [7]. Taken together, remote access is feasible in some settings, but participation, support, and outcome measurement matter.

### Shared records and coordination

A realist review of personal health records for children and young people with complex conditions found potential for knowledge, control, self-advocacy, and communication, alongside technical, organizational, and professional barriers [8]. A recent review of parent-oriented mHealth interventions found promising parent and child outcomes across varied conditions, but more than half of included studies had high risk of bias and designs/interventions were heterogeneous [9]. A 2021 systematic review of digital health-literacy interventions for parents found that interactive communication features occurred in some interventions, but only five studies met the review criteria [10]. These findings support prototyping useful coordination workflows and evaluating them with users; they do not justify clinical claims.

### Privacy and data minimisation

Research on children's apps has identified concerns in data handling and commercial practices [11]. Empirical work on mental-health apps highlights privacy risks such as linkability and identifiability [12]. These are especially relevant because a child's diary may contain sensitive observations even when the platform is not a medical record. The design therefore adopts data minimisation, relationship-based authorization, explicit visibility, synthetic development data, least privilege, revocation, and auditability as engineering controls. Legal classification, consent, retention, and hosting decisions remain open and must be confirmed with the supervisor and an appropriately qualified reviewer.

### Research gap and project contribution

The reviewed literature evaluates interventions or records in different care contexts; it does not directly validate this team's proposed cross-setting SEN coordination platform for Kazakhstan. A defensible contribution is therefore a bounded software-engineering artefact: a traceable requirements set, privacy-aware role/relationship model, interactive scenario prototype, and verification approach. The project should evaluate workflow usability and access-control correctness, not claim improved developmental outcomes unless an appropriately designed study is later conducted.

## Structured analysis table

| # | Source and type | Population / focus | Relevant finding | Limitation and design implication |
|---|---|---|---|---|
| 1 | Chen et al. (2025), systematic review [link](https://www.jmir.org/2025/1/e66442/) | Telehealth early intervention, children 0–3 at risk or with developmental disabilities; 18 studies | Caregiver coaching by video was common; telehealth may support access and family-centred care | Not an evaluation of a shared diary product; outcomes and populations narrow. Design for caregiver participation, evaluate the platform separately |
| 2 | Digital Psychological Wellbeing Interventions for Family Carers… (2025), systematic review [link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12247015/) | Digital wellbeing interventions for family carers of people with IDD | 21 interventions identified; evidence generally promising but heterogeneous and few high-quality RCTs | Wellbeing therapy is outside product scope; avoid claiming direct wellbeing benefit |
| 3 | Pi et al. (2022), meta-analysis of RCTs [DOI](https://doi.org/10.1007/s10803-021-05206-2) | Technology-assisted parent-mediated ASD interventions | No significant pooled difference in social communication, social functioning, or language outcomes | Supports cautious claims and need for evaluation; technology alone is not efficacy |
| 4 | Ingersoll et al. (2024), randomized comparison [DOI](https://doi.org/10.1007/s10803-023-06092-6) | Self-directed vs therapist-assisted telehealth ImPACT Online | Therapist assistance associated with parent-learning effects; satisfaction/assistance predicted engagement | Intervention training rather than coordination software; suggests clear flows and human-supported onboarding |
| 5 | Leveraging technology to make parent training more accessible (2022), randomized trial [PubMed](https://pubmed.ncbi.nlm.nih.gov/35916246/) | Online vs in-person executive-function training for parents of autistic children | Both formats were acceptable; completion differed between formats | Not an app for coordination; include completion and task success, not just availability |
| 6 | Telehealth Treatment of Behavior Problems… (2023), randomized clinical trial [PubMed](https://pubmed.ncbi.nlm.nih.gov/36622653/) | Telehealth parent-child interaction therapy for young children with developmental delay | RCT evaluates telehealth parent training and follow-up | Clinical intervention is unlike the proposed platform; use as context, not as proof for diary/calendar features |
| 7 | Evaluation of a Telehealth ABA Program (2023), applied evaluation [PubMed](https://pubmed.ncbi.nlm.nih.gov/36317793/) | Caregiver coaching for children with ASD | High average caregiver implementation fidelity; authors call for further research | Small sample and intervention-specific; reinforces need to state evidence limits |
| 8 | Diffin et al. (2019), realist review [DOI](https://doi.org/10.1111/cch.12652) | Personal health records for children with complex conditions | PHRs may support communication, knowledge, and self-advocacy; organizational barriers matter | Older foundational source; implementation context varies. Include onboarding, role clarity, and ownership in design |
| 9 | Understanding effectiveness and design of parent-oriented mHealth interventions (2025), systematic review [PubMed](https://pubmed.ncbi.nlm.nih.gov/40349017/) | 49 pediatric parent-oriented mHealth studies | Reported improvements across some parent/child outcomes; over half of papers high risk of bias | Broad conditions and intervention types; avoid transfer of efficacy claims to SEN coordination |
| 10 | Digital Interventions to Improve Health Literacy Among Parents… (2021), systematic review [JMIR](https://www.jmir.org/2021/12/e31665/) | Parents of children 0–12 with health conditions | Interactive features included communication, videos, training, and forums | Only five studies; supports testing comprehensibility and communication affordances |
| 11 | Data handling practices and commercial features of apps related to children (2022), scoping review [BMJ](https://adc.bmj.com/content/archdischild/early/2022/02/09/archdischild-2021-323292.full.pdf) | Child-related apps and data practices | Reviews privacy/security evaluations and reported data-handling patterns | App-store sample does not represent this platform; motivates minimisation and transparent sharing |
| 12 | On the Privacy of Mental Health Apps (2022), empirical study [arXiv](https://arxiv.org/abs/2201.09006) | Privacy practices of mental-health apps | Identifies potential profiling and linkability/identifiability risks | Preprint/technical domain differs; treat as a risk signal and verify controls in the project |

## References

1. Chen, J. et al. “Early Intervention for Children With Developmental Disabilities and Their Families via Telehealth: Systematic Review.” *Journal of Medical Internet Research*, 2025, 27:e66442. https://doi.org/10.2196/66442
2. “Digital Psychological Wellbeing Interventions for Family Carers of Children and Adults With Intellectual and Developmental Disabilities: A Systematic Review.” *Journal of Applied Research in Intellectual Disabilities*, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12247015/
3. Pi, H. J. et al. “Meta-Analysis of RCTs of Technology-Assisted Parent-Mediated Interventions for Children with ASD.” *Journal of Autism and Developmental Disorders*, 2022, 52:3325–3343. https://doi.org/10.1007/s10803-021-05206-2
4. Ingersoll, B. et al. “Relative Efficacy of Self-directed and Therapist-assisted Telehealth Models of a Parent-mediated Intervention for Autism.” *Journal of Autism and Developmental Disorders*, 2024, 54:3605–3619. https://doi.org/10.1007/s10803-023-06092-6
5. “Leveraging technology to make parent training more accessible: Randomized trial of in-person versus online executive function training for parents of autistic children.” *Autism*, 2022. https://pubmed.ncbi.nlm.nih.gov/35916246/
6. “Telehealth Treatment of Behavior Problems in Young Children With Developmental Delay: A Randomized Clinical Trial.” *JAMA Pediatrics*, 2023. https://pubmed.ncbi.nlm.nih.gov/36622653/
7. “Evaluation of a Telehealth ABA Program for Caregivers of Children with ASD.” 2023. https://pubmed.ncbi.nlm.nih.gov/36317793/
8. Diffin, J. et al. “The usefulness and acceptability of a personal health record to children and young people living with a complex health condition: A realist review.” *Child: Care, Health and Development*, 2019, 45(3):313–332. https://doi.org/10.1111/cch.12652
9. “Understanding the effectiveness and design of parent-oriented mobile health interventions: a systematic review and narrative synthesis.” 2025. https://pubmed.ncbi.nlm.nih.gov/40349017/
10. “Digital Interventions to Improve Health Literacy Among Parents of Children Aged 0 to 12 Years With a Health Condition: Systematic Review.” *Journal of Medical Internet Research*, 2021, 23(12):e31665. https://doi.org/10.2196/31665
11. “Data handling practices and commercial features of apps related to children: a scoping review of content analyses.” *Archives of Disease in Childhood*, 2022. https://doi.org/10.1136/archdischild-2021-323292
12. “On the Privacy of Mental Health Apps: An Empirical Investigation and its Implications for Apps Development.” 2022. https://arxiv.org/abs/2201.09006

## Literature-to-design trace

| Design decision | Literature basis | Project implication |
|---|---|---|
| Caregiver remains an active participant; tool coordinates rather than automates care | [1–7] | Support simple records and communication, no diagnostic or treatment recommendation |
| Measure task success and participation, not only feature presence | [4–6, 9–10] | Usability scenarios and completion metrics in `verification-plan.md` |
| Explicit relationships and access boundaries | [8, 11–12] plus project threat model | Relationship-based authorization, visibility labels, revocation, audit |
| Treat local needs as an open research question | Heterogeneity and context limits across [1–10] | Collect local primary evidence before confirming requirements |
