---
title: Knowledge and AI
layout: default
---

## About us

The Knowledge in Artificial Intelligence (KAI) group studies the role of symbolic (formal/declarative) knowledge in Artificial Intelligence/AI-based systems. 

The mission of the KAI group is to contribute to a better understanding of the representation, acquisition, extraction and management of explicitly modelled knowledge and to facilitate and promote the usage of such knowledge in artificial intelligent agents. 

We do this by combining research from the fields of Knowledge Engineering and Knowledge Representation, with focus on how this contributes to Hybrid Intelligence (i.e. how knowledge helps to develop a collaborative, adaptive, explainable and responsible collaboration between artificial and human intelligence).

We combine foundational theory and applied methods such as computational logic, emergent semantics, narrative representation, abstract argumentation, knowledge engineering (at scale), knowledge graph management, semantic techniques, data integration as well as machine learning. Our research addresses a variety of types of knowledge, which can be heterogeneous, contextualised, dynamic, common-sense, process-dependent, personal, tribal, conflicting or biased, and often large-scale.

<center>
<img src="../../images/group_oct2023.jpg" alt="KAI_group" style="top:6px;"/>
</center>

## News

<ul>
    {% for news_item in site.news reversed%}
  <li>({{ news_item.date | date: "%-d %B %Y" }}) - {{ news_item.summary }}
    {% if news_item.extra_content == "true" %}
    (<a href="{{news_item.url}}">continue reading</a>)
    {% endif %}
  </li>
    {% endfor %}
</ul>

## Contact
<a href="https://vu.nl/nl/over-de-vu/meer-over/nieuwe-universiteitsgebouw">Nieuwe Universiteitsgebouw</a>, 10th floor<br>
De Boelelaan 1111<br>
1081 HV Amsterdam<br>
T(central): 020 59 89898
