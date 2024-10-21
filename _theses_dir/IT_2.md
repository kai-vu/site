---
title: 'Exploring attacking arguments in the Computer Science Knowledge Graph (CS-KG)'
layout: default
description: 'The goal of the project is to extract argumentation graphs from the Computer Science Knowledge Graph.'
topic: 'Argument Mining'
keywords: 
    - 'Hybrid Intelligence'
    - 'Argument Mining'
    - 'Knowledge Graphs'
supervisor: 'Ilaria Tiddi'
contact: 'i.tiddi@vu.nl'
degree: 'B.Sc./M.Sc.'
description_link: '/theses_dir/IT_2'
---

<!-- The informtation below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Description

CS-KG is an automatically generated Knowledge Graph that include statements from Computer Science papers. Among the properties defined in the schema a few exist that possibly map argumentative interactions: ‘discuss’, ‘discussedBy’ are such an example. These are obtained by crawling the papers for a variety of terms like ‘debate’, ‘argue’, ‘discuss’. Abstract argumentation (Dung, 1995 and further extensions) aims at analysing argumentation graph by analysing the attacking relations between arguments and using different types of semantics to understand what arguments can be rationally accepted. In this topic, students could explore (a part of) the CS-KG in order to identify contrasting statements and papers and how they are connected. An initial approach would involve extracting ‘argumentation graphs’ from Statements, and analysing what the different argumentation semantics represent when considering discussing relations as attacks. Two direct extensions are possible: 
- using NLP-based or LLM-based techniques to further refine which statements are effectively attacking each other by directly processing the paper’s text or 
- expanding the complexity of the argumentation framework involved, either by adding ‘weights’ or support relations.
