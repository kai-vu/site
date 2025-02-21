---
title: 'Exploring attacking arguments in the Computer Science Knowledge Graph (CS-KG)'
layout: default
description: 'The goal of the project is to extract argumentation graphs from the Computer Science Knowledge Graph.'
category: 'Tools' # Pick one out of "Prototypes", "Tools", "Datasets" or "Other"
keywords: 
    - 'Hybrid Intelligence'
    - 'Argument Mining'
    - 'Knowledge Graphs'
---
<center>
<div style="text-align: center; width:400px; display:inline-block; vertical-align:top;"><img src="/images/artefacts/FCP4u0GWUAEbrQW.png" width="400" height="400"><br>You can add an image!<br><span style="font-size:14pt">PhD Student</span></div>
</center>
<!-- The informtation below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Description

CS-KG is an automatically generated Knowledge Graph that include statements from Computer Science papers. Among the properties defined in the schema a few exist that possibly map argumentative interactions: ‘discuss’, ‘discussedBy’ are such an example. These are obtained by crawling the papers for a variety of terms like ‘debate’, ‘argue’, ‘discuss’. Abstract argumentation (Dung, 1995 and further extensions) aims at analysing argumentation graph by analysing the attacking relations between arguments and using different types of semantics to understand what arguments can be rationally accepted. In this topic, students could explore (a part of) the CS-KG in order to identify contrasting statements and papers and how they are connected. An initial approach would involve extracting ‘argumentation graphs’ from Statements, and analysing what the different argumentation semantics represent when considering discussing relations as attacks. Two direct extensions are possible: 
- using NLP-based or LLM-based techniques to further refine which statements are effectively attacking each other by directly processing the paper’s text or 
- expanding the complexity of the argumentation framework involved, either by adding ‘weights’ or support relations.
