---
title: 'Navigating information through networks'
layout: sub_page
description: "This bachelor's thesis aims to explore the effects of graph-powered retrieval-augmented generation (GraphRAG) for pre-trained large language models (LLMs). LLMs capture language through a causal next-token prediction fashion. Thanks to that bias, they manage to capture most of the abstract reasoning abilities carried by the semantics of modern languages and offer incredible flexibility. Due to that bias, they can struggle when handling domain-specific questions (niche research topic, private product catalogs, grounded knowledge) especially when requiring multi-hop reasoning. These difficult out-of-domain (OOD) reasoning tasks might be solved by adding the relevant information. But methods that aim at enriching the knowledge of LLMs (fine-tunning, prompting, RAG) also face similar issues such as overfitting, the limitation of the context-window or mitigated accuracy. All these methods share the bias of vector based search methods. The question might not be which information to share but how to share information. Knowledge Graphs are explicit network representations of entities link together. They offer hierarchical, structural and inter-relational information that is not accesible in a vecotrialised serealised text. Through grounding data as a knowledge graph and giving graph-retrieval abilities to an LLM, GraphRAG aims at offering orthogonal source of information that inherently lack in LLMs. 
You would first conduct a validation experiment, repducing GraphRAG before trying to answer state of the art question. What factor allows GraphRAG to enhance an LLM the best, consistency, text description, modularity and structural complexity of the KG ? Can we give the LLM a Graph structural understanding regardless of the entities through GNN embeddings ?" 
keywords: 
    - 'LLM'
    - 'Reasoning'
    - 'RAG'
    - 'graphRAG'
supervisor: '-- Pelletreau-Duris Tom --'
contact: '-- t.a.p.pelletreau-durisd@vu.nl --'
degree: '-- B.Sc.'
description_link: '/theses_dir/TPD_GraphRAG.md'
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
