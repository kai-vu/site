---
title: Playing “20 Questions” with a Knowledge Graph
---

<nav><ul>
    <li><a href="https://kai.cs.vu.nl/"> <img src="../../images/logos/KAI_logo_small_transp.png" alt="KAI" width="100"/></a></li>
    <li><a href="https://kai.cs.vu.nl/theses/">Theses</a></li>
</ul></nav>

## Playing “20 Questions” with a Knowledge Graph (BSc)
*Supervisors: Benno Kruit (b.b.kruit@vu.nl) and Stefan Schlobach (k.s.schlobach@vu.nl)*

**Keywords**: Hierarchical Clustering, Rule Learning, Sparse Encoding

#### Why
“Twenty Questions” is a popular parlor game where one player tries to guess what another player is thinking of, in less than 20 yes/no questions. It is also known as Breadbox, after a popular first question: “Is it bigger than a breadbox?”, and is similar to the (simpler) game called “Guess Who?”. Such games are based on iteratively splitting the set of candidate answers in half, effectively performing a binary search using properties of entities. A similar approach may be useful for supporting entity search in Knowledge Graphs (KGs) for users who are not sure what they are looking for, or cannot remember a name. It could also speed up entity prediction in Machine Learning classifiers, by reducing a scan over all N candidates to a binary search in log(N) steps. However, optimally splitting a set of entities in half is a hard problem because there are 2N options. Furthermore, the best partitioning may involve paths of multiple steps in the KG, such as “albums by bands from the Netherlands”, of which there are too many to compute completely.

#### What
This project aims to investigate efficient approaches for automatically finding semantically coherent questions that split a set of entities from a KG in half. The approach should be able to trade  the complexity of such questions against the balance of their split, because complex questions will result in more equal splits at the cost of coherence. Ideally, it should also be able to formulate alternative questions when the user does not know the answer, and take into account the incompleteness of the KG under the open-world assumption. However, the specific focus of the project is for the student to choose.

#### How
The starting point is a simple property-based approach that works for small, closed-world KGs. Then, it should investigate more scalable approaches that don’t involve enumerating all possible options, and account for the open-world assumption. Possible avenues for addressing these challenges are using KG embeddings and ontologies.

**Possible extensions:**
- Asking more natural, grammatically correct sentences
- Asking questions based on numeric attributes or dates (more/less, before/after)
- Inferring likely attribute values from similar entities when they are missing
- Machine Learning-based clustering approaches, inducing questions from clusters
- Incorporating common-sense knowledge graphs
- Scaling up to large KGs such as Wikidata

#### Related literature and resources
- Hierarchical Clustering [<a href="https://en.wikipedia.org/wiki/Hierarchical_clustering">wiki</a>, <a href="https://stackabuse.com/hierarchical-clustering-with-python-and-scikit-learn/">tutorial</a>]
- Hierarchical Clustering in combination with Descision Trees [<a href="https://en.wikipedia.org/wiki/Decision_tree">wiki</a>,<a href="http://webcache.googleusercontent.com/search?q=cache:pBHoP9_x3CQJ:https://towardsdatascience.com/interpretable-clustering-39b120f95a45&client=firefox-b-d&hl=nl&gl=nl&strip=1&vwsrc=0">simple</a>, <a href="https://www.researchgate.net/profile/Jayanta-Basak-3/publication/3297362_Interpretable_hierarchical_clustering_by_constructing_an_unsupervised_decision_tree/links/5457364c0cf26d5090a9817f/Interpretable-hierarchical-clustering-by-constructing-an-unsupervised-decision-tree.pdf">complex</a>]
- Knowledge Graph Embeddings & Link Prediction [<a href="https://kge-tutorial-ecai2020.github.io/">paper</a>], LibKGE [<a href="https://github.com/uma-pi1/kge">code</a>]
- Knowledge Graph Rule learning [<a href="https://www.ijcai.org/proceedings/2019/0435.pdf">paper</a>, <a href="https://web.informatik.uni-mannheim.de/AnyBURL/">code</a>]
- Reinforcement Learning for 20 questions without a KG [<a href="https://arxiv.org/pdf/1808.07645.pdf">paper</a>]