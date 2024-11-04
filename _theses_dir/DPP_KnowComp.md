---
title: 'Knowledge Compilation for Forgetting Uncertain Evidence'
layout: default
description: 'In this project, students will become familiar with some knowledge compilation techniques and rules for combining uncertain evidence. In particular, they will explore the advantages and disadvantages of using knowledge compilation for forgetting uncertain evidence.'
topic: 'Formal Logics, Modal Logics'
keywords: 
    - 'Uncertainty'
    - 'Knowledge Compilation'
    - 'Information fusion'
    - 'Belief functions'
supervisor: 'Daira Pinto Prieto'
contact: 'd.pintoprieto@uva.nl'
degree: 'M.Sc.'
description_link: '/theses_dir/DPP_KnowComp'
---

## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background
Knowledge compilation is a collection of computational approaches that allows to break down some (computationally) hard problems into an offline and an online phase. If the online part can be computed in polynomial time, the problem is said to be compilable to P. In belief function theory there are some rules of combination of evidence whose computation is compilable to P.  Therefore, we can think of real-world scenarios where uncertain evidence can be combined and decombined using these rules, overcoming the challenge of their computational complexity.


#### Potential projects:
- Following existing literature, implement a solution to compute the unnormalized and normalised rules of combination based on knowledge compilation. Study the advantages and disadvantages of using this solution compared to using other algorithms to decombine uncertain evidence. .
- Extend the literature on the computation of combination rules through knowledge compilation. This may include adapting propositional formulas to accept more general evidence, or defining new propositional formulas that can be used to implement other rules of combination via weighted model counting. 


#### Literature
- Pierre Marquis. 2015. Compile! In Proceedings of the Twenty-Ninth AAAI Conference on Artificial Intelligence (AAAI’15). AAAI Press, 4112-4118.

- Daira Pinto Prieto. Combining Uncertain Evidence: Logic and Complexity. Chapter 6. PhD thesis, University of Amsterdam, 2024. ISBN 978-94-6473-618-2.
- Daira Pinto Prieto, Ronald de Haan, and Sébastien Destercke. 2024. How to efficiently decombine belief functions? In Proceedings of the 20th International Conference on Information Processing and Management of Uncertainty in Knowledge-Based Systems (IPMU 2024).



