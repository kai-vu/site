---
title: ERI
---

<nav><ul>
    <li><a href="https://kai.cs.vu.nl/"> <img src="../../images/logos/KAI_logo_small_transp.png" alt="KAI" width="100"/></a></li>
    <li><a href="https://kai.cs.vu.nl/theses/">Theses</a></li>
</ul></nav>

## Investigating the Impact of Changes on Embeddings using the Embedding Resemblance Indicator (multiple projects)
*Supervisor: Romana Pernisch (r.pernisch@vu.nl)*

#### Background
Updates on ontologies affect the operations built on top of them. But not all changes are equal: some updates drastically change the result of operations; others lead to minor variations, if any. We proposed the a new measure for comparing embeddings of different versions of the same ontology called Embedding Resemblance Indicator (ERI), which takes into account both the stochasticity of learning embeddings as well as the shortcomings of established comparison methods. We base ERI on (i) a similarity score, (ii) a robustness factor (based on the embedding method, similarity measure, and dataset), and (iii) the number of added or deleted entities to the embedding computed with the Jaccard index.

#### Description
We have previously evaluated ERI using synthetically generated versions of two biomedical ontologies and the two benchmark datasets FB15k-237 and Wordnet-18-RR but only regarded deletions. In this work, we want to extend the evaluation of ERI with additions and/or real data wuch as DBpedia Live or NELL. Further, we want to investigate if ERI behaves incrementally. This means that we will conduct the evaluation not only pairwise but compare across the generated test cases or over the entirety of the real data. At last, the goal is to find an estimation or approximation for ERI, so that it could be used in an online fashion without having to calculate the embedding.

This topic contains multiple thesis topics and these are the different parts that individual students can choose to work on:
- In-depth analysis/investigation of the influence on embedding by different types of changes
- Evaluation of ERI on addition test cases (compared to deletion test cases) on synthetic data
- Evaluation of ERI on real world data
- Investigation of increment behaviour of ERI
- Investigation into the estimation or approximation of ERI

#### Literature
- Toward Measuring the Resemblance of Embedding Models for Evolving Ontologies [<a href="https://doi.org/10.1145/3460210.3493540">paper</a>]
