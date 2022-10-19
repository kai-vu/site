---
title: CFWL Active Learning
---

<nav><ul>
    <li><a href="https://kai.cs.vu.nl/"> <img src="../../images/logos/KAI_logo_small_transp.png" alt="KAI" width="100"/></a></li>
    <li><a href="https://kai.cs.vu.nl/theses/">Theses</a></li>
</ul></nav>

## Active Learning - Improving the Dark Web Classifier based on expert input
*Supervisors:* 
- *CFLW: Eljo Haspels (eljo.haspels@cflw.com)*
- *KAI: Romana Pernisch (r.pernisch@vu.nl)*

#### Background:
Dark Web pages are classified along different dimensions hence every page has more than one label, making this a multi label problem. At the moment pages are labeled by humans and a (static) pretrained AI classifier. 

#### Description:
Although precision and recall scores are good, it would be highly beneficial to update the classifier as new data arrives. Labels can change over time as well, as new crimes are defined. 
Instead of first labeling a number of pages with the new labels and then learning a new classifier, it would be beneficial to be able to update the model on the go. We envision this to be done with the help of human experts that would collaborate with the AI by accepting/rejecting or even modifying labels assigned by the model. The model would then take these inputs and contineu to learn as new examples are given to the human expert to annotate.

#### Tasks:
1. What are best practices with regards to updating AI models?
2. What can we learn from the stream community?
3. How can expert confirmation or rejection of AI based annotations be used to retrain the classifier (in a continuous way)?
4. What infrastructure is required for such a setup at CFLW?

<!-- **Research Question:** tbd -->

#### Literature:
- Cybercrime threat intelligence: A systematic multi-vocal literature review [<a href="https://doi.org/10.1016/j.cose.2021.102258">paper</a>]
- Active Learning Literature Survey [<a href="http://digital.library.wisc.edu/1793/60660">paper</a>]
- A survey of human-in-the-loop for machine learning [<a href="https://doi.org/10.1016/j.future.2022.05.014">paper</a>]
- An Analysis of Active Learning Strategies for Sequence Labeling Tasks [<a href="https://aclanthology.org/D08-1112.pdf">paper</a>]
