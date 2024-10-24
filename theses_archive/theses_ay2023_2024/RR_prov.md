---
title: 'Automated Data-provenance Extraction'
layout: default
description: 'In a world where linked data and data-mining is omnipresent, determining which data was used for training a ML-model becomes increasingly more difficult and tedious. This project revolves around automating the process of extracting the provenance information of data used in a ML-pipeline.'
topic: 'Knowledge Extraction' 
keywords: 
    - 'LLM'
    - 'Implementation'
    - 'Data-mining'
    - 'Machine Learning'
    - 'Knowledge representation'
    - 'Explainability'
supervisor: "Ritten Roothaert" 
contact: 'h.m.roothaert@vu.nl'
degree: 'BSc./MSc.'
description_link: '/theses_dir/RR_prov'
--- 

{% assign supervisor = site.data.members | where_exp: "item", "item.name contains page.supervisor" | first %}


## Automated Data-provenance Extraction (multiple projects)
*Supervisor: {{ supervisor.name }} ({{ supervisor.mail }})*

#### Background
Machine learning pipelines have become increasingly more complex with the rise of big data and the increase in computational resources. While this has revolutionized the field of AI, it also made determining which data was used in which part of the process increasingly more difficult. This is a problem, as it adds to the 'black-box' behaviour of the resulting models. The recent push for eXplainable AI (XAI) aims to demistify this 'black-box' behaviour. This project fall under the larger umbrella of XAI, where the aim is to represent the data transformations within the machine learning pipeline such that the provenance of the used data is easily extracted. The final product is what we will refer to as a _'data journey'_. For an example, see [<a href='https://content.iospress.com/articles/semantic-web/sw233407'>Daga and Groth (2023)</a>]

#### Description
In theses around this topic, students can explore various provenance representation frameworks and extraction techniques. The goal is to create a provide a provenance overview that is easily understandable for humans, but also alows for complex query answering. Individual students can decide to work on:
- Adapting the [<a href="https://www.w3.org/TR/2013/NOTE-prov-overview-20130430/">PROV data model</a>] to fit within the context of machine learning.
- Exploring alternative ways of automating the provenance extracting process.
- Usability validation of the resulting data journeys.

#### Literature
Mandatory reading:
- "Data journeys: Explaining AI workflows through abstraction" [<a href="https://content.iospress.com/articles/semantic-web/sw233407">PDF</a>]
