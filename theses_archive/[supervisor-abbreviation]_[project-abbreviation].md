---
title: '-- Title of the Project --'
layout: default
description: '-- Give a short description of the project (max 50 words, everything over it will be truncated) --'
topic: '-- Pick one (and only one) of the predifined topics in `_data/topics.yaml`. DO NOT ADD YOUR OWN TOPIC without discussing it within the group. This is to avoid headers with only a single project. TIP: copy-paste the topic from `_data/topics.yaml` as any typo will result in your project not being shown on the website. --' 
keywords: 
    - 'Here'
    - 'You'
    - 'Put'
    - 'Relevant'
    - 'Subjects'
    - 'Or'
    - 'Skills'
supervisor: '-- your name --'
contact: '-- your email --'
degree: '-- level of the project (either, B.Sc., M.Sc., or B.Sc./M.Sc.). Please pick only 1 --'
description_link: 'Either link to a google doc or another external resource, or use this document by putting down "/theses_dir/[file_name]" where the [file_name] EXCLUDES the filename extension (i.e. use "/theses_dir/RR_prov" if the file itself is called "RR_prov.md"). Do NOT leave it empty'
taken: 'Indicate whether the project is already taken. If set to `True`, the title of the project will be crossed-out on the website'
---


# Easy (potential) template
<!-- The informtation below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background
*Give some background information*

Machine learning pipelines have become increasingly more complex with the rise of big data and the increase in computational resources. While this has revolutionized the field of AI, it also made determining which data was used in which part of the process increasingly more difficult. This is a problem, as it adds to the 'black-box' behaviour of the resulting models. The recent push for eXplainable AI (XAI) aims to demistify this 'black-box' behaviour. This project fall under the larger umbrella of XAI, where the aim is to represent the data transformations within the machine learning pipeline such that the provenance of the used data is easily extracted. The final product is what we will refer to as a _'data journey'_. For an example, see [<a href='https://content.iospress.com/articles/semantic-web/sw233407'>Daga and Groth (2023)</a>]

#### Description
*Give a discription of the actual (potential) project(s)*

In theses around this topic, students can explore various provenance representation frameworks and extraction techniques. The goal is to create a provide a provenance overview that is easily understandable for humans, but also alows for complex query answering. Individual students can decide to work on:
- Adapting the [<a href="https://www.w3.org/TR/2013/NOTE-prov-overview-20130430/">PROV data model</a>] to fit within the context of machine learning.
- Exploring alternative ways of automating the provenance extracting process.
- Usability validation of the resulting data journeys.

#### Literature
*Give sources to additional literature*

Mandatory reading:
- "Data journeys: Explaining AI workflows through abstraction" [<a href="https://content.iospress.com/articles/semantic-web/sw233407">PDF</a>]
