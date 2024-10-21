---
title: 'Assessing Domain Coverage of an Ontology'
layout: default
description: 'In this project you will make use of an existing pipeline to investigate the coverage of a specific domain ontology against a corpus of text.'
topic: 'Kowledge Extraction'
keywords: 
    - 'Domain Coverage'
    - 'Ontology/KG'
    - 'Quality Assessment'
    - 'Deep Learning/Language Model'
    - 'Reproducibility'
supervisor: 'Romana Pernisch'
contact: 'r.pernisch@vu.nl'
degree: 'B.Sc./M.Sc.'
description_link: '/theses_demo/RP_coverage'
---


# Easy (potential) template
<!-- The informtation below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background
*Give some background information*
When ontologies and knowledge graphs are engineered, they capture the domain at a specific moment in time.
However, it is very difficult to assess wheather an ontology is covering the domain as the engineering process is often mostly manual and therefore it is not feasible have read or seen all possible documents that could be considered as part of the domain.
Therefore, OntoEval presents a framework to evaluate the domain coverage of an ontology and in this project we want to apply it to our own ontologies/domains.

This will challenge the reproducibility of OntoEval.

#### Description
*Give a discription of the actual (potential) project(s)*

In this project you will make use of an existing pipeline to investigate the coverage of a specific domain ontology against a corpus of text. You will specifically use the OntoEval pipeline, but you will have to adjust it to the specific domain that you will be investigating. Two domains that could potentially be used is the domain of Clinical Trial Outcomes or Companion Planting, as for both of them we have ontologies readily available. This project involves pre-training/finetuning an already existing (L)LM.

In the case of Clinical Trial Outcomes, the text against which this evaluation is conducted at the clinical trials themselves, which do not consist of larg amounts of text. Therefore, the technical challenge is to be able to adjust the pipeline to the special conditions of the domain.

In the case of Companion Planting, the texts against which this evaluation could be conducted are general literature on companion planting or websites. For this, first a collection of documents would need to be done, before one can apply OntoEval.

In the case of a MSc thesis, this project can be extended into different directions.
1) One could instead focus on doing this evaluation at scale and for multiple ontologies. In this case, I propose a more general biomedical domain.
2) Additionally to the assessment, the pipeline could be extended to detect where the ontology requires changes to cover the domain better (to increase the score). This extension would then also needed to be applied to test how feasible such an approach would be (potentially in a human-in-the-loop framework).

#### Literature
*Give sources to additional literature*

Mandatory reading:
- "OntoEval: an Autoamted Ontology Evaluation System" [<a href="https://dl.acm.org/doi/fullHtml/10.1145/3543873.3587318">link</a>]
