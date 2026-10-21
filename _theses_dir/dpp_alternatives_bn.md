---
title: 'ASML Internship: Non-probabilistic Networks for Fault Diagnosis'
layout: sub-page
keywords: 
    - 'Non-probabilistic Networks'
    - 'Bayesian Networks'
    - 'Fault Diagnosis'
    - 'Internship'
supervisor: 'Daira Pinto Prieto'
contact: 'd.pintoprieto@vu.nl'
degree: 'M.Sc.'
description_link: "/theses_dir/dpp_alternatives_bn"
---

<!-- The information below doesn´t need to be adjusted. It is automatically pulled from the frontmatter-->
## {{page.title}} 
*Supervisor: {{page.supervisor}} ({{page.contact}})*

#### Background

Fast and efficient diagnosis of ASML equipment failures is a critical business goal. However, diagnosing complex cyber-physical systems is a challenging task. Diagnostic assistants can support service engineers by suggesting actions to identify the root cause of a failure or restore the system to operation. The reasoning process behind such assistants may vary depending on the system, the available information, and the diagnostic goal. Since diagnostic scenarios are highly heterogeneous, a reasoning strategy that is effective in one situation may be ineffective or even misleading in another. For this reason, the investigation of alternative reasoning methods for diagnostic support systems remains an active research topic, and this is the area in which this MSc thesis aims to contribute.

A state-of-the-art paradigm for developing diagnostic assistants is the use of Bayesian networks. Bayesian networks are directed acyclic graphs whose nodes represent variables and are associated with conditional probability tables. The network models the components of the system and the dependencies among them. The probabilities are meant to capture how likely different components are to fail, both in isolation and depending on what else is happening in the system (e.g., which components have been observed to be OK or Not OK). Although this diagnostic paradigm has reported good performance, scalability remains challenging, among other things due to the difficulty of obtaining accurate conditional probabilities for all components of a system. This raises the question: could similarly satisfactory reasoning be achieved with less input information?

In this regard, several uncertainty theories model and combine uncertain information under weaker assumptions than probability theory, including imprecise probabilities, belief functions, possibility functions, ranking functions, and modal logic. These theories have Bayesian network counterparts, allowing some probabilities to be omitted, specified imprecisely (e.g., stating what is more likely than what without providing exact numbers), or replaced entirely by information encoded in the network structure. A natural question is how these alternative networks perform compared to Bayesian networks. However, many studies have already shown that the answer depends on the use case. In this project, instead, we aim to showcase how to implement each of these approaches according to their state of the art, and to analyze their technology readiness level, requirements, and advantages, creating a guide for developers who want to increase the flexibility of their Bayesian networks.


#### Description

This project requires getting familiar with the mentioned uncertainty theories from both a theoretical and practical point of view (we will establish a priority order and go as far as possible). In parallel, the student will need to learn the terminology and features of NASA's Technology Readiness Level (TRL) scale. The student will also need to get familiar with a provided benchmark of five electrical circuits, one of them already represented as a Bayesian network. Part of the assignment could include creating Bayesian networks for the remaining systems.

In addition, the student will work with a real industrial Bayesian network provided by ASML. The project involves translating the Bayesian networks from both the benchmark and industrial use cases into their corresponding alternative networks, and performing the provided diagnostic scenarios on them. Based on the observed performance, as well as the experience of deploying these approaches on both academic and real-life examples, the student will analyze their TRL.

Research questions:
- Can the probabilistic information in a Bayesian network be partially omitted or made imprecise while still achieving relevant conclusions?
- How mature are the available software tools for developing the mentioned alternatives to Bayesian networks?
- Which factors must developers take into account when deciding which alternative is best suited to their particular use case?

The expected outcome of this project is a report on the TRL of different alternatives to Bayesian networks. Note that some preliminary work has recently been carried out by BSc students on ranking networks, belief function networks, and dynamic epistemic logic.

#### Literature

Dowdeswell, B., Sinha, R., & MacDonell, S.G. (2020) Finding faults: A scoping study of fault diagnostics for industrial cyber-physical systems, Journal of Systems and Software 168, pp.1-16., [<a href="https://doi.org/10.1016/j.jss.2020.110638">PDF</a>].

Halpern, J.Y. (2017) Reasoning about Uncertainty (2nd ed.), The MIT Press, [<a href="https://doi.org/10.7551/mitpress/10951.001.0001">PDF</a>]. 

Korb, K.B., & Nicholson, A.E. (2011) Bayesian Artificial Intelligence (2nd ed.), CRC Press.

#### Prerequisites

- MSc student (9 months) in Artificial Intelligence, Computer Science, Data Science, or a related field.
- Research-oriented and hands-on mindset. The project involves working with real industrial data; an interest in developing results to a publication level is a plus.
- Programming experience, preferably in Python, and openness to interacting with other programming languages (such as MATLAB or Haskell) for specific project goals.
- Strong foundation and affinity for probability theory, as well as familiarity with Bayesian networks.
- Knowledge or experience in diagnosis of engineered systems is a plus.
- Availability to be on-site at ASML (Veldhoven) three days per week.
