---
title: 'Belnap-Dunn logic for fault diagnosis: an end-to-end solution '
layout: sub-page #<-- DO NOT CHANGE THIS!
keywords: 
    - 'Belnap-Dunn logic'
    - 'fault diagnosis'
supervisor: 'Daira Pinto Prieto'
contact: 'd.pintoprieto@vu.nl'
degree: 'M.Sc.'
description_link: "/theses_dir/dpp_belnap-dunn-logic"
---

<!-- The information below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background

We talk about fault diagnosis in the context of cyber-physical systems. When a cyber-physical systems goes down, it is a big challenge to identify the root-cause of what is failing. Typically, companies offer diagnosis applications that assist the service engineers with identifying such root-cause. 

In this context, some sort of reasoning must be encoded into the diagnosis application, aiming to aggregating the available information about the system and its symptoms and providing with a solution. The use of modern formal logics for this application is rather uncommon, due to the open questions around computational complexity and implementation solutions. In this project, we want to explore the advantages of applying the 4-valued Belnap-Dunn logic to this problem, advancing the literature on the implementation side. 


#### Description

This project aims to explore the application of Belnap-Dunn logic  to the domain of fault diagnosis. Belnap-Dunn logic is a logic with four truth values: true, false, both true and false and neither true or false. This extra expressivity provides a reasoning system with a flexibility that resembles human reasoning better than classical solutions. In addition, this logic has been recently extended to include uncertainty theories, allowing for extra richness in our reasoning setting.  Therefore, we propose to investigate how to explain this doubt and guide the gather new clarifying information. Some milestones of this project are: 

-	Find/simulate a fault diagnosis dataset. 
-	Define a baseline solution. 
-	Learn about Belnap-Dunn  logic and conceptualize how to solve a fault diagnosis problem with it. 
-	Proposing a complete pipeline to implement that solution in practice. 

There might be the opportunity to develop this project within an internship. 


#### Literature

Marta Bílková, Sabine Frittella, Daniil Kozhemiachenko, Ondrej Majer, Sajad Nazari. Reasoning with belief functions over Belnap–Dunn logic. Annals of Pure and Applied Logic, Volume 175, Issue 9,2024,103338,ISSN 0168-0072, [<a href="https://doi.org/10.1016/j.apal.2023.103338">PDF</a>].
