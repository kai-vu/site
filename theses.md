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

<!-- The code below is for easy parting of thesis data. Very ugly, but it works. -->
<!-- <ul>
<p>
Topic list
</p>
{% for project in site.theses_dir %}
    <li>
        {{project.topic}}
    </li>
{% endfor %}
</ul>

<p>
Keyword list
</p>
<ul style="list-style: None;">
{% for project in site.theses_dir %}
            {% for keyword in project.keywords %} 
            <li>
            {{keyword}}
            </li>
            {% endfor %}
{% endfor %}
</ul> -->


<ul class="topics">
{% for topic in site.data.topics %}
    {% include project_list.html topic=topic %}
{% endfor %}
</ul>



<script src="/assets/js/theses.js"></script> <!-- Custom JS -->
