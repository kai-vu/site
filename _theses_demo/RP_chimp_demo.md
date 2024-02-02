---
title: 'ChImp 2.0: Extending Protege and its ability to provide change impact information (multiple projects)'
description: 'The ChImp Protégé plugin helps ontology engineers during this process by summarising and displaying changes and the effects of changes on the ontology as a whole. We have multiple possible projects with ChImp.'
layout: default
topic: 'Ontology Evolution'
keywords:
    - "Java"
    - "Protégé"
    - "Change Management"
    - "Ontology Engineering"
    - 'User testing'
supervisor: 'Romana Pernisch'
contact: 'r.pernisch@vu.nl'
degree: 'BSc./MSc.'
description_link: '/theses_dir/RR_chimp'
---

## ChImp 2.0: Extending Protege and its ability to provide change impact information (multiple projects)
*Supervisor: Romana Pernisch (r.pernisch@vu.nl)*

#### Background
Ontologies model specific domains. As domains evolve over time, ontologies have to be changed as well. The ChImp Protégé plugin helps ontology engineers during this process by summarising and displaying changes and the effects of changes on the ontology as a whole. At the moment, it displays a list of changes, materialisation impact measures and consistency, and lastly a list of ontology measures and how much these change during the editing process. However, there are still many ways to improve this plugin and make it easier to use and more comprehensive contentwise.

#### Description
We want to provide the functionality of adding and evaluating competency questions to the ChImp Protégé plugin. Ontology engineers use competency questions to test their ontologies and their compliance to questions which cover necessary functionality for downstream tasks. Hence, the questions need to be updated together with the ontology as well as tested on the go, when appropriate.
Additionally, we want to be able to update these questions based on the applied changes in the background. The challenge is to do this task without breaking, crashing, or stalling Protégé. 
Further, it is vital the ontology engineers can continue to work on the ontology across multiple sessions and between releases. This requires them to be able to store the changes applied and reapply them to the ontology. 
Lastly, the import of other ontologies is a very useful way of extending ones own ontology and at the same time make use of the information that somebody else has already provided and curated. Protege already handles imports however, without proving the engineer with additional information about them. Hence, it is necessary to provide information about the imports themselves but also if and how important ontologies changed and influences the ontology currently being edited

This description includes multiple projects. Students can work on one (or more) of these:
- Investigation of competency questions in the context of changing ontologies.
    - How can competency questions be updated as the ontology is edited?
    - How can we measure the impact of changes on the competency questions?
- Implementation of session continuity.
- Impact of importing ontologies within Protege:
    - How can we quantify the impact of the import of an ontology?
    - How can we quantify and display the impact of the changes of imported ontologies?

#### Requirements
- Programming in Java
- Some knowledge of ontology engineering and Protege helpful

#### Literature
- Presentation of the ChImp plugin [video]
- Visualising the effects of ontology changes and studying their understanding with ChImp [paper]
- Observing the Impact and Adaptation to the Evolution of an Imported Ontology [paper]
