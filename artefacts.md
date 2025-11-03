---
title: artefacts
---

# KAI artefacts
This page provides an inventory of digital artefacts produced by the KAI group, categorized into Prototypes, Tools, Datasets, and Other. Browse the different categories to find specific items of interest.

<ul class="topics">
{% for cat in site.artefact_cat %}
    {% include artefact_list.html cat=cat %}
{% endfor %}
</ul>
