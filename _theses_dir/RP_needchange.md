---
title: 'Detecting the Need for Ontology Change'
layout: default
description: 'In this project you will develop a (potentially human-in-the-loop) pipeline to detect the need for change to an ontology based on domain documents (text). This can potentially by done using the existing coverage evaluation approach OntoEval with some additional steps.'
topic: 'Knowledge Extraction'
keywords: 
    - 'Ontology/KG update'
    - 'Domain Coverage'
    - 'Ontology/KG'
    - 'Human-in-the-Loop'
    - 'Deep Learning/Language Model'
    - 'Reproducibility'
supervisor: 'Romana Pernisch'
contact: 'r.pernisch@vu.nl'
degree: 'B.Sc./M.Sc.'
description_link: '/theses_dir/RP_needchange'
---

## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background
When ontologies and knowledge graphs are engineered, they capture the domain at a specific moment in time.
However, domains do not remain static and it is important to keep ontologies up to date.

#### Description
In this project, you will investigate how to detect weather an ontology is need of changes because of new source data
You can make use of an existing pipeline to investigate the coverage of a specific domain ontology against a corpus of text which could in turn help you determin where updates are needed. You can also take a different approach. You can work on two specific domains (or choose a third one yourself): Clinical Trial Outcomes or Companion Planting. Pretraining of a language model might be necessary

In the case of Clinical Trial Outcomes, the text are actual clinical trials, from clinicaltrails.gov. The outcome measures which are captured in the ontology, can be extrasted easily as the clinical trial inforamtion is provided in a semi-structured way. 

In the case of Companion Planting, the texts against which this evaluation could be conducted are general literature on companion planting or websites. For this, first a collection of documents would need to be done, before one can apply OntoEval.

In the case of a MSc thesis, this project can be extended into different directions.
- One could focus not only on the described problem but also oninstead focus on doing this evaluation at scale and for multiple ontologies. In this case, I propose a more general biomedical domain.
- Additionally to the assessment, the pipeline could be extended to detect where the ontology requires changes to cover the domain better (to increase the score). This extension would then also needed to be applied to test how feasible such an approach would be (potentially in a human-in-the-loop framework).

#### Literature
"OntoEval: an Autoamted Ontology Evaluation System" [<a href="https://dl.acm.org/doi/fullHtml/10.1145/3543873.3587318">link</a>]
