---
title: 'Navigating information through networks'
layout: sub-page
description: "This bachelor's thesis aims to explore the effects of graph-powered retrieval-augmented generation (GraphRAG) for pre-trained large language models (LLMs)." 
keywords: 
    - 'LLM'
    - 'Reasoning'
    - 'RAG'
    - 'graphRAG'
supervisor: 'Pelletreau-Duris Tom'
contact: 't.a.p.pelletreau-durisd@vu.nl'
degree: 'B.Sc.'
description_link: '/theses_dir/TPD_GraphRAG'
---

## Navigating information through networks 

*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Description
LLMs capture language through a causal next-token prediction fashion. Thanks to that bias, they manage to capture most of the abstract reasoning abilities carried by the semantics of modern languages and offer incredible flexibility. Due to that bias, they can struggle when handling domain-specific questions (niche research topic, private product catalogs, grounded knowledge) especially when requiring multi-hop reasoning. These difficult out-of-domain (OOD) reasoning tasks might be solved by adding the relevant information. But methods that aim at enriching the knowledge of LLMs (fine-tunning, prompting, RAG) also face similar issues such as overfitting, the limitation of the context-window or mitigated accuracy. All these methods share the bias of vector based search methods. 

The question might not be which information to share but how to share information. Knowledge Graphs are explicit network representations of entities link together. They offer hierarchical, structural and inter-relational information that is not accesible in a vecotrialised serealised text. By grounding data as a knowledge graph and giving graph-retrieval abilities to an LLM, GraphRAG aims at offering orthogonal source of information that inherently lack in LLMs. 

You would first conduct a validation experiment, repducing GraphRAG. Then, you could ask different research questions : 
- Everything else being equal, is multi-hop reasoning better achieved through Prompt VS RAG VS Fine-tune VS GraphRAG ?
- Everything else being equal, what KG features allows GraphRAG to enhance LLM accuracy the best ? Can it be the KG consistency, the text description, the modularity and structural complexity of the KG ?
- Can we give the LLM a Graph structural understanding regardless of the entities through GNN embeddings ?

#### Literature
- "Retrieval-Augmented Generation with Graphs (GraphRAG)" [<a href="https://arxiv.org/abs/2501.00309">PDF</a>]
