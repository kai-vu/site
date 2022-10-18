---
title: Higher-arity Relation Extraction with Qualifiers
---

<nav><ul>
    <li><a href="https://kai.cs.vu.nl/"> <img src="../../images/logos/KAI_logo_small_transp.png" alt="KAI" width="100"/></a></li>
    <li><a href="https://kai.cs.vu.nl/theses/">Theses</a></li>
</ul></nav>

## Higher-arity Relation Extraction with Qualifiers (MSc)
*Supervisor: Benno Kruit (b.b.kruit@vu.nl)*

**Keywords**: Weak Supervision, Higher-ary relations, Relation Extraction


#### Why
Modern Knowledge Graphs (KGs) such as Wikidata contain millions of statements about real-world entities. Crucially, they also contain meta-information about at what time, in which circumstances, and according to which source those statements are true. There has been much work on automatically extending KGs from text using Relation Extraction, but such meta-information has rarely been taken into account. The result is that extracted statements are often incorrect without the right context. One main challenge for solving this problem is the fact that such context is typically only described incompletely, both in the KG and in text. For example, a statement may describe that the song “Imagine” charted in the Dutch Top 40, without including that this happened in 1971.

#### What
This project aims to investigate new techniques for extracting complex statements with meta-information from text. The goal is to leverage ontology/schema-level information about types, relations, and meta-relations to overcome the incompleteness problem. 

#### How 
The starting point is a study of how Wikidata statements with meta-information in the form of qualifiers (pictured above) may be expressed in the text and tables of Wikipedia articles. This results in a set of noisy matches that can be used for supervision. Then, it will incorporate information about qualifier constraints to filter out the noise in these matches, and train a Relation Extraction model using Weak Supervision.
