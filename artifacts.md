---
title: Artifacts
---

# KAI Artifacts

<!-- The code below is for easy parsing of thesis data. Very ugly, but it works. -->
<!--
<p>
Topic list
</p>
<ul>
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
</ul>
 -->

<ul class="topics">
{% for topic in site.data.topics %}
    {% include artifact_list.html topic=topic %}
{% endfor %}
</ul>
