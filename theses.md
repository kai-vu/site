---
title: Theses
---

# Theses

<nav class="project_nav">
{% comment %} 
Javascript is used to add filter links to this document. The JS file also contains the list of keywords that are converted
to these links.
{% endcomment %}
</nav>

{% assign projects = site.theses_demo%}


{% assign IE_projects = projects | where:"topic", "Information Extraction"%}

#### Information Extraction
*Supervisor: Benno Kruit (b.b.kruit@vu.nl), Ilaria Tiddi (i.tiddi@vu.nl), Lise Stork (l.stork@vu.nl), Ritten Roothaert (h.m.roothaert@vu.nl), Jieying Chen (jieying.chenchen@gmail.com)*

We offer multiple projects under the umbrella of information extraction with varying foci. Information extraction focuses on generating structured data from unstructured inputs in an automated manner. The input as well as the output can vary based on the application or end usage of the extracted data.

{% include project_list.html projects=IE_projects %}


{% assign OE_projects = projects | where:"topic", "Ontology Evolution"%}

#### Ontology Evolution
*Supervisor: Romana Pernisch (r.pernisch@vu.nl)*

Ontologies model specific domains. As domains evolve over time, ontologies have to be changed as well. Not only are the ontologies themsevels affected but also applications using those ontologies for various purposes. We have multiple theses in this domain. 

{% include project_list.html projects=OE_projects %}


<script src="/assets/js/theses.js"></script> <!-- Custom JS -->
