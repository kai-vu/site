---
title: 'Explaining Missing Entailments from Ontologies'
layout: default
description: 'In this project, you will develop methods for explaining missing entailments from ontologies..'
topic: 'Ontologies and Reasoning' 
keywords: 
    - 'Ontologies'
    - 'Explainability'
    - 'Reasoning'
    - 'Logics'
    - 'Description Logics'
supervisor: 'Patrick Koopmann'
contact: 'p.k.koopmann@vu.nl'
degree: 'M.Sc.','B.Sc.'
---

## Thesis title:  Explaining Missing Entailments from Ontologies
*Supervisor: Patrick Koopmann (p.k.koopmann@vu.nl)*

Ontologies are an important representation formalism for symbolic AI
systems. Ontologies that are formulated in OWL allow to usage of
reasoning systems such as HermiT or ELK to infer implicit information
from an ontology, or from a dataset that is combined with the ontology.
Different to inferences performed by sub-symbolic AI systems,
decisions made by such a reasoner are in a way "explainable by
design", because all inferences can be explained solely based on the
information available in the ontology.

But what do you do if the reasoner does not infer the expected result,
how do you explain missing entailments? In the research literature,
there are currently two main approaches to provide such explanations:
1) counterexamples and 2) abduction. A counterexample explains a
missing entailment by showing a scenario that is fully consistent with
the ontology, but which makes it very clear that the expected
entailment does not hold. Abduction by contrast explains the missing
entailment by offering a fix, an extension to the current ontology
that would produce the desired inference. In this project, you will
choose one of these two techniques, and then develop and evaluate
extensions/modifications of current methods for computing such
explanations, towards making them more efficient or producing better
explanations.


The supervisor will give an introduction to the topic
(foundations of description logics, counterexamples, abduction) at the 
beginning of the project. To get an idea, you can consult the
following paper, which explains and discusses abduction-based
explanations on an example:

https://lat.inf.tu-dresden.de/research/papers/2023/ABFKK-DL23.pdf

Don't be afraid to contact the supervisor if you would like to
have more information on this project or would like to discuss it in
more detail in person.
