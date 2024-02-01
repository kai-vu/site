---
title: Multilingual Travel Knowledge Extraction
layout: default
---


## Multilingual Travel Knowledge Extraction (MSc)
*Supervisor: Benno Kruit (b.b.kruit@vu.nl)*

**Keywords**: Distant Supervision, Relation Extraction, Data Integration, Semi-structured Data, Deep Learning


#### Why
Wikivoyage is a collaborative international travel guide that anyone can edit. It is similar to its sister project Wikipedia, but for tourism instead of encyclopaedic reference knowledge. Contributors to Wikivoyage recommend and describe places and things to see, do, eat, drink or sleep in over 20.000 locations all around the world, in many languages. However, the descriptions are all textual, which makes it difficult for tourists to filter and search locations based on specific properties, such as accessibility or amenity types.

#### What
This project aims to integrate Wikivoyage locations with data from OpenStreetMap, another collaborative project, which tags locations with a large set of specific attributes. This way, it will hopefully be possible to automatically extract OpenStreetMap attributes from the Wikivoyage textual descriptions. For example, it would be great if we could extract the type of food served in restaurants from the Wikivoyage descriptions into the OpenStreetmap database, so that users could filter their search to specific cuisines. Because Wikivoyage pages are also often available in multiple languages, descriptions of the same location in different languages may supplement each other to raise the coverage or accuracy of extractions (or exhibit interesting differences).

#### How 
Using a set of English-language approximate matches as a starting point, this project will examine ways to generalize such matches, in order to extract information from descriptions of other locations using Deep Learning-based Distantly Supervised Relation Extraction. Then, it will study how to expand this to more attributes and languages. The model will be evaluated on a sample that we will have manually annotated, which will hopefully result in a new gold-standard dataset.

#### References:
- A Dsouza, N Tempelmeier, E Demidova (2021). "Towards Neural Schema Alignment for OpenStreetMap and Knowledge Graphs". Proceedingings of ISWC 2021. [<a href="https://link.springer.com/chapter/10.1007/978-3-030-88361-4_4">DOI</a>]
- Guineng Zheng, Subhabrata Mukherjee, Xin Luna Dong, Feifei Li (2018). "OpenTag: Open Attribute Value Extraction from Product Profiles". Proceedings of KDD 2018. [<a href="https://arxiv.org/pdf/1806.01264">DOI</a>]

