---
title: 'Exploring attacking arguments on the Computer Science Knowledge Graphs (CSKG)'
layout: default
description: 'To build an interactive scientific assistant, we want it to be able to provide sensible argument to the user. To this aim, we plan to use an automatically generated KG to understand which related papers could provide contrasting informations.'
topic: 'Argument and Rule Mining' 
keywords: 
    - 'Scientific Assistants'
    - 'Scholarly Knowledge Graph'
    - 'Argumentation Framework'
    - 'LLM'
    - 'Argument classification'
supervisor: 'Giacomo Zamprogno'  
contact: 'g.zamprogno@vu.nl'
degree: 'B.Sc.'
description_link: '/theses_dir/GZ_scientificArguments'
---


<!-- The informtation below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background

<a href='https://scholkg.kmi.open.ac.uk/cskg/documentation.php'>CSKG</a> is an automatically generated Knowledge Graph that include Statements from Computer Science papers. Among the properties defined in the <a href='https://scholkg.kmi.open.ac.uk/cskg/ontology'>schema</a> a few exist that possibly map argumentative interactions: 'discuss', 'discussedBy' are such an example. These are obtained by crawling the papers for a variety of terms like 'debate', 'argue', 'discuss'.

Abstract argumentation (Dung, 1995 and further extensions) aims at analyzing argumentation graph by analizing the attacking relations between arguments and using different types of semantics to understand what arguments can be rationally accepted.

#### Description

In this topic, students could explore (a part of) the CS-KG in order to identify contrasting statements and papers and how they are connected.

An initial approach would involve extracting 'argumentation graphs' of statements and related papers, and analyzing what the different argumentation semantics represent when considering discussing relations as attacks.

Two direct extensions are possible:
 - using NLP-based or LLM-based techniques to further refine which statements are effectively attacking each other by directly processing the paper's text.
 - expanding the complexity of the argumentation framework involved, either by adding 'weights' or support relations.

#### Literature

Mandatory reading:
Phan Minh Dung; <i>On the acceptability of arguments and its fundamental role in nonmonotonic reasoning, logic programming and n-person games</i>; Artificial Intelligence, Volume 77, Issue 2, 1995