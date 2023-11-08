---
title: Student Theses at KAI
layout: default
---
<!--
<nav><ul>
<li class="home"><a href="/"> <img src="../../images/logos/KAI_logo_small_transp.png" alt="KAI" width="100"/></a></li>
<li><a href="supervision_guidlines">Expectations</a></li>
<li><a href="#KAI-theses">Theses</a></li>
<li><a href="#internships">Internships</a></li>
</ul></nav>
-->

## Expectations
At KAI, we set clear expectations for students. We want to make sure students know what to expect from us as their supervisors. We have prepared a <a href="/supervision_guidelines">short document</a> which touches upon some important points like meetings, planning and writing of your thesis. 

#### Table of contents
- <a href="#KAI-theses">VU Theses</a>
    - <a href="#information-extraction">Information Extraction</a>
    - <a href="#ontology-evolution">Ontology Evolution</a>
    - <a href="#knowledge-engineering">Hybrid Intelligence</a>
    - <a href="#argument-and-rule-mining">Argument and Rule Mining</a>
    - <a href="#robotics-and-knowledge-representation">Robotics and Knowledge Representation</a>
    - <a href="#explanations-and-narratives">Explanations and Narratives</a>
    - <a href="#question-answering">Question Answering</a>
    - <a href="#multi-lingual-problems">Multi-lingual problems</a>
    - <a href="#semantics-of-deep-learning-methods">Semantics of Deep Learning Methods</a>
- <a href="#internships">Internships</a>
    - <a href="#lareb">Lareb</a>
    - <a href="#accenture">Accenture</a>
    - <a href="#triply-db">Triply DB</a>


## KAI Theses

You can find the slides presented at the MSc AI Thesis event <a href='https://docs.google.com/presentation/d/1nIqQ2tGM_7CbharUIjWSnbjogkp8MYClRp61zjeMG5s/edit#slide=id.p'>here</a>.
Most of the topics below can be investigated by either BSc or MSc AI students. We also welcome groups of students working on the same or similar topic. 

If you are interested in one of the projects below, please contact the supervisor(s) listed to receive more information about the topics. Where available, have a look at the detailed description first. Also, keep in mind that all theses can be shaped to accomodate your interests.

#### Information Extraction
*Supervisor: Benno Kruit (b.b.kruit@vu.nl), Ilaria Tiddi (i.tiddi@vu.nl), Lise Stork (l.stork@vu.nl), Ritten Roothaert (h.m.roothaert@vu.nl)*

We offer multiple projects under the umbrella of information extraction with varying foci. Information extraction focuses on generating structured data from unstructured inputs in an automated manner. The input as well as the output can vary based on the application or end usage of the extracted data.
- **Automated Processing of Scholarly Data**: *(Ilaria)* The goal of this project is to support the automatisation of processing the <a href="http://ceur-ws.org">CEUR-WS proceedings</a> data. For a BSc thesis, the objective is to extract an ontology of CEUR knowledge. For a MSc thesis, this would be extended with analysing abstracts or creating an interface for data input and knowledge graph population.
- **Making research papers machine interpretable**: (*Lise*) The goal of this project is to see if we can partially automate or support the construction of knowledge graph on hypotheses from the literature. Here is a more detailed <a href="LS_SciKG">description</a>.
- **Information extraction from Structured lists** (BSc, *Benno*): Many different kinds of documents contain lists because they are a simiple way of enumerating several related items. We want to investigate ways of extracting the information from the lists and retaining the inherent relationship between list items. More info [here](https://docs.google.com/document/d/1L98Lm9KdY5lEjLFgpZdVLTlAS2J4gv3MZMzezuvg0yQ/edit?usp=drive_link).
- **Higher-arty Relation Extraction with Qualifiers** (MSc, *Benno*): This projects aims to inverstigate new techniques for extracting complex statements with meta-information from text, in particular Wikipedia. The goal is to leverage ontology/schema-level information about types, relations, and meta-relations to overcome the incompleteness problem. More information can be found [here](https://docs.google.com/document/d/1sII_wirv6PhCnUjPmOWFdiXtVVh-TmS_1KgkumTMKUo/edit?usp=drive_link).
- **Multilingual Travel Knowledge Extraction** (MSc, *Benno*): In this project, we want to explore approaches for linking geographical location and inforamtion together within the applciation of travel. More details are given [here](https://docs.google.com/document/d/12RkjOOTuNsRQiRSNv83dwYXoMLAUXuujHZC3L4f922U/edit?usp=sharing).
- **Data Schema Induction for Shopping** (MSc, *Benno*): The goal is to investigate approaches for inducing a ceherent ontology for product descriptions. More information is available [here](https://docs.google.com/document/d/1xgTUFRIQ9GLXTH9dyTrw9sac2T6oT50o6Oxvds4kLXs/edit?usp=drive_link).
- **Automated Data-provenance Extraction** (BSc, *Ritten*): In a world where linked data and data-mining is omnipresent, determining which data was used for training a ML-model becomes increasingly more difficult and tedious. This project revolves around automating the process of extracting the provenance information of data used in a ML-pipeline. More details are given <a href="RR_prov">here</a>.

#### Ontology Evolution
*Supervisor: Romana Pernisch (r.pernisch@vu.nl)*

Ontologies model specific domains. As domains evolve over time, ontologies have to be changed as well. Not only are the ontologies themsevels affected but also applications using those ontologies for various purposes. We have multiple theses in this domain. 
- **Evolution Process**: The process of ontology evolution is relatively long and complex. In your thesis you can investigate and compare tools for supporting this process or investigate automations options within this process. Multiple projects within this area are possible and some ideas and details are given <a href='RP_evo'>here</a>.
- **ChImp 2.0**: The ChImp Protégé plugin helps ontology engineers during this process by summarising and displaying changes and the effects of changes on the ontology as a whole. We have multiple possible projects with ChImp. More information is <a href='RP_chimp'>here</a>.
- **Materialisation/Reasoning**: We have previously investigated the impact on the materialisation (making implicit knowledge explicit) and want to further the analysis by diving into more depth. This means that we want to investigate the types of changes in more detail but also the effect of the changes more localized in the materialisation, rather then looking at the materialisation as a whole. More details are given <a href="RP_mat">here</a>.


#### Hybrid Intelligence 
*Supervisor: Ilaria Tiddi (i.tiddi@vu.nl), Lise Stork (l.stork@vu.nl)*

- **Knowledge Engineering for Hybrid Intelligence** (Bsc, MSc): Inspired by Software Design and Engineering, Knowledge Engineering deals with the formal design, maintainance and usage of knowledge-based systems. In this project, we will look at modelling Hybrid Intelligent systems using knowledge engineering techniques.
- **Embodied Instructable Agents** (MSc): <text id="hi_nh_ma">The goal of this project is to integrate a Reinforment Learning model trained for trajectory/segmentation learning on an embodied  Hybrid Intelligent agent (a ROS-operting robot). Knowledge of one between ROS, Reinforcement Learning and simulation environments is required</text>.
- **Researching human-in-the-loop workflows for research assistants using KGs**: (*MSc, Lise*) The goal of this project is to research human-in-the-loop workflows for digital assistants for scientific discovery. Here is a more detailed <a href="LS_SciKG">description</a>.

#### Argument and Rule Mining
*Supervisor: Loan Ho (t.t.l.ho@vu.nl), Lise Stork (l.stork@vu.nl), Atefeh Keshavarzi(a.keshavarzi.zafarghandi@vu.nl)*

There are multiple projects in the domain of argument mining with different objectives:
- **Computing extensions for argumentation with collective attacks** (BSc): In this project, we will build a tool to calculate extensions for argumentation with collective attacks. The inputs are a set of arguments and collective attacks. The output returns different (stable, preferred, complete, grounded) extensions. <a href="LH_com">Here</a> are more details.
- **Explaining query answers in prioritized databases** (BSc): This project aims to provide explanation of how the query answer was reached in consistent database. <a href="LH-exp">Here</a> are more details.
- **Handling inconsistencies in argumentation knowledge**: In the project, we will address inconsistencies in argumentation data by using logic-based reasoning. <a href="LH_arg">Here</a> are more details.
- **Leveraging Argumentation Frameworks for Local Explainability of Black-Box Models** (MSc, Atefeh): This project aims to leverage the formalisms of argumentation to provide local explainability for black-box models, enabling non-experts to understand the reasons behind the system's decisions. <a href="AK_argbox">Here</a> are more details.
- **Orange3 Argument Mining Widget Based on a Formalism of Argumentation** (MSc, Atefeh): This project aims to bridge the gap between argumentation theory and data analysis and visualization by developing an argument mining widget for Orange3, an open-source data mining and machine learning software. <a href="AK_argOrg">Here</a> are more details.

Rule mining, similarly to information extraction, aims at finding structures. In this case, we want to learn rules that describe the data best to help us understand it better. There are multiple projects that involve rule mining:
- **Community Detection from a Species Interaction Network**: The goal of this project is to extract interesting communities in species interaction networks and or detect interesting logic rules that relate to these communities. More details are given <a href="LS_comdet">here</a>



#### Robotics and Knowledge Representation
*Supervisor: Ilaria Tiddi (i.tiddi@vu.nl),  Mark Adamik (m.adamik@vu.nl)*

These projects look at the intersection of robotics and knowledge graphs. Knowledge of Robotic Operating System (ROS) is a plus:
- **Semantic Mapping with a mobile service robot** (MSc): The goal of this project is to implement semantic mapping for an indoor mobile robot using knowledge graphs. More information about this project can be found <a href="AM_semmap">here</a>.
- **Visual Scene Understanding for Indoor Mobile Robots** (BSc): In this project, you will use the camera feed of the robot and off-the-shelf image recognition algorithms to understand the environment by generating knowledge graphs. More information about this project can be found <a href="AM_vsu">here</a>.
- **Energy-efficient robots through knowledge-awareness**. (BSc, MSc): We have an ontology representing the capabilities of the robots (picking objects, moving, scanning surroundings, etc.). The ontology needs to be expanded with energy budgets so the robot can choose the actions to performed based on its capabilities and energy-efficiency. Collaboration with the Software Engineering group.
- **Embodied Instructable Agents** (MSc): See <a href="HI_nh_ma">above</a>.
- **Impact of ontology changes in robotic tasks**. (MSc): Based on a robot operating with an ontology in the background, the goal here is to study how changes in such ontology can positively/negatively impact the tasks the robot has to perform. Knowledge of one between ROS, RDFlib and simulation environments is required.
- **Explaining Yolo Predictions with Argumentations**. (BSc,MSc): The goal of this project is to explain the predictions of an object recognition model in the form of argumentations. Knowledge of one between ROS, RDFlib and Yolo/Object recognition algorithms is required.

#### Explanations and Narratives 
*Supervisors: Lise Stork (l.stork@vu.nl), Ilaria Tiddi (i.tiddi@vu.nl)*

The following topics are aimed at providing a more human-like AI, by creating explanations or creating narratives.
- **Identifying Formal Narratives from KGs**: (*Ilaria*) The goal of this project is to extract as many narratives as possible (in terms of set of facts) from existing KGs such as DBpedia or Wikidata. In order collect these facts, we will use the narrative formal structure as presented in this <a href="http://ceur-ws.org/Vol-2969/paper31-CAOS.pdf">paper</a>.
- **A Benchmark for understanding Narratives**: (*Ilaria*) Language Models and KGs. Work on extending the three existing benchmarks (<a href="https://doi.org/10.5281/zenodo.7081522">1</a>, <a href="https://zenodo.org/record/7118556">2</a>, <a href="https://zenodo.org/record/7120502">3</a>) for understanding narratives.
- **Semantic robustness of Language Models with causal inference**. See <a href="causalinf-kg">below</a>. 

- **SHACL-forms for publishing scientific findings**: (*MSc, Lise*) The goal of this project is building a form from SHACL shapes for the publication of scientific findings. Here is a more detailed <a href="LS_SciKG">description</a>.

#### Question Answering
*Supervisors: Benno Kruit (b.b.kruit@vu.nl), Stefan Schlobach (k.s.schlobach@vu.nl), Lise Stork (l.stork@vu.nl)*

QA is a very broad topic. We, however, focus on QA over structured data in various forms:
- **Playing "20 Questions" with a KG** (BSc): detailed description is located [here](https://docs.google.com/document/d/1YFj_9upyD_TpCRdErZ2K5zCeB1bBA5zVm6AwYJ38Fu4/edit?usp=drive_link).
- **Multi-modal Question Answering** (MSc): Description <a href="https://drive.google.com/open?id=1QwcTusbM85KmK1HiGFZJWSK4AYYWwlB9rG6AeR_jv8w">here</a>.
- **Graph Queries on Relation Databases** (MSc CS): Description <a href="https://drive.google.com/open?id=1HByPxhswvGy8EGPjHuEOXBzwktGNXhN4brsZ2q-t1mc">here</a>.
- **Answering Research Questions over Data Cubes as SQA (MSc., Lise)** : Description <a href="LS_SciKG">here</a>.
#### Multi-lingual problems
*Supervisors: Benno Kruit (b.b.kruit@vu.nl)*

Even though these topics would also fit under different topics already discribed above, we wanted to highlight them as they are both addressing the problem of multiple languages in different tasks:
- **Multilingual Entity Linking** (BSc): Many names can refer to several different entities. In this project, we want to look at the problem of disambiguation and linking of entities. More info [here](https://docs.google.com/document/d/1ER0ITQsn7gLenSXno2ol-vDWt6XNqKAK9hrG_mC08F4/edit?usp=drive_link).
- **Multilingual Travel Knowledge Extraction** (MSc): This project is about integrating Wikivoyage location data with data from OpenStreetMap. The approach will leverage distant supervision, relation extraction, data integration and deep learning techniques. More details can be found [here](https://docs.google.com/document/d/12RkjOOTuNsRQiRSNv83dwYXoMLAUXuujHZC3L4f922U/edit?usp=sharing).


#### Semantics of Deep Learning Methods
*Supervisor: Ilaria Tiddi (i.tiddi@vu.nl)*

- **Incorporating Semantics in Message Passing methods**: Message passing models are neural network architectures that operate by propagating information along the structure of a graph over which they are trained end-to-end. Currently, these methods treat all relationships in the same way, while in knowledge graphs some edges carry more semantics than others (e.g. entity type or subclass hierarchies). Here, we will look at feeding such information in a message passing model such as R-GCN and test it in a node labelling or link prediction scenario. 
- **Extracting Semantics from neural co-activation graphs**: Here, we will look at extracting taxonomical or ontological information using the analysis of the co-activation graph (CoAG) of a neural network architecture. We will use community analysis incrementally to analyse different knowledge granularities (CoAG alone, CoAG with rdfs:subClassOf, CoAG with other relationships). The taxonomy will help understand what the neural representation has learned, and it will be compared with a ground-truth KG to see how correct the neural representation is.
- **Semantic robustness of Language Models with causal inference**: <text id="causalinf-kg">We will adapt the approach <a href="https://arxiv.org/pdf/2306.04347.pdf">in this paper</a> to test how robut language models are toward different semantics (description logics, OWL, etc.) The idea is to build a causal model for graph2text tasks and compare its prections with the ones of a language model. Understanding of probability theory, statistics and graph theory is necessary</text>.

## Internships and Erasmus Programmes
Make sure to first check out the official internship process!

We suggest you to pick a topic from the ones above, and adapt it to the company needs in agreement with your supervisors (both from the company and from the group). We do have contacts in several companies and research centres to do experiences abroad. For more information, contact Ilaria Tiddi (i.tiddi@vu.nl)*
