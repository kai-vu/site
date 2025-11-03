---
title: Theses
---

# KAI Thesis Topics

You can find the slides presented at the MSc AI Thesis event [here](https://docs.google.com/presentation/d/19dcjW2oPdf5c5ExlepUC0mzfpqJw3iBIMDkazdwkARs/edit?usp=drive_link). Most of the topics below can be investigated by either BSc or MSc AI students. We also welcome groups of students working on the same or similar topic.

If you are interested in one of the projects below, please contact the supervisor(s) listed to receive more information about the topics. Where available, have a look at the detailed description first. Also, keep in mind that all theses can be shaped to accomodate your interests. Do note however that the KAI group has clear expectations of their students. We want to make sure students know what to expect from us as their supervisors. We have prepared a [short document](/supervision_guidelines) which touches upon some important points like meetings, planning and writing of your thesis.


_The filter menu below can be used to limit the amount of projects on display. If you click on the keyword, only projects with that particular keyword are displayed. The number indicates the number of projects we have to offer with that keyword._
<nav class="project_nav">
{% comment %} 
Javascript is used to add filter links to this document. The JS file also contains the list of keywords that are converted
to these links.
{% endcomment %}
</nav>

<!-- The code below is for easy parsing of thesis data. Very ugly, but it works. -->

<!-- <p>
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
</ul> -->


<ul class="topics" id="supervisors">
{% for supervisor in site.data.members %}
    {% include project_list.html supervisor=supervisor %}
{% endfor %}
</ul>



<script src="/assets/js/theses.js"></script> <!-- Custom JS -->
