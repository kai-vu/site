---
---
'use strict';

addEventListener('DOMContentLoaded', (event) =>
{
    // * These keywords are used in the filter menu
    let kwWhitelist = {{ site.theses_keywords | jsonify }}.replace("\n", "").split(", ");
    // * Collect all keywords
    let pubs = document.querySelectorAll('ul.projects li');
    pubs = [...pubs];

    pubs.forEach((pub) =>
    {
        let kws = pub.querySelectorAll('ul.keywords li');
        kws = [...kws];

        let myKeywords = new Set();

        kws.forEach(kw => {
            myKeywords.add(kw.innerHTML);
        });

        pub['keywords'] = myKeywords;
    });

    // * Generate filter menu
    let nav = document.querySelector('nav.project_nav');

    let span = document.createElement('span');
    span.innerHTML = 'keyword: ';
    let ul = document.createElement('ul');

    nav.prepend(span, ul);

    let li0 = document.createElement('li');
    let button0 = document.createElement('button');

    button0.innerHTML = 'show all';
    button0.className = 'link'
    button0.disabled = true;
    button0.addEventListener('click', filterClick);

    li0.append(button0);
    ul.append(li0);

    kwWhitelist.forEach(keyword =>
    {
        let li = document.createElement('li');
        let button = document.createElement('button');

        button.innerHTML = keyword;
        button.className = 'link'

        button.addEventListener('click', filterClick)

        li.append(button);
        ul.append(li);
    });

    redrawTopics()

});

function isIn(term, list) {
    /**
     * Check whether a term is in a list of string, ignoring cases both ways.
     *
     * In the case of a match, return the string in the list. Otherwise return false.
     */
    for(let lterm of list)
    {
        if (lterm.toLowerCase() == term.toLowerCase())
            return true;
    }

    return false;
}

function redrawTopics() {
    // * Go over all topics. If all projects in the topic are hiiden, hide the entire topic
    let topics = document.querySelectorAll('ul.topics > li')

    // * loop over all non-hidden projects
    topics.forEach(topic => {
        topic.classList.add('hidden')
        let projects = topic.querySelectorAll('ul.projects > li');
        let supervisors = [];
        projects.forEach(project => {
            if ( ! project.classList.contains('hidden'))
            {   
                let supervisor = project.querySelector('span.contact');
                console.log(supervisor)
                supervisors.push(supervisor.innerHTML);
                topic.classList.remove('hidden');
            }
        });
        // * clearing the previous supervisor list and only adding those that have projects that are currently presented
        let sup_list = topic.querySelector('ul.supervisors');
        sup_list.innerHTML = '';
        let unique_supervisor = new Set(supervisors)
        unique_supervisor.forEach(value => {
            let li = document.createElement('li');
            li.innerHTML = value
            sup_list.append(li)
            console.log(value)
        });
    });
}

/**
 * Filter click event.
 */
function filterClick(event)
{

    let keyword = event.target.innerHTML;


    let all = keyword == 'show all';

    let projects = document.querySelectorAll('ul.projects > li')
    projects = [...projects];

    projects.forEach(project =>
    {
        project.classList.remove('hidden');
        if ( ! ( all || isIn(keyword, project['keywords'])) )
        {
            project.classList.add('hidden');
        }
    });

    // * Reset all links to active, and disable the one that was clicked
    let links = document.querySelectorAll('nav.project_nav ul li button')
    links = [...links];

    links.forEach(link => {
        link.disabled = false;
    });

    event.target.disabled = true;

    redrawTopics()

}