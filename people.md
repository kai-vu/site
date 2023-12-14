---
title: Knowledge and AI People
layout: default
---

## People
<!-- <div class="people">
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/stefan.png" width="200" height="200"><br><a href="https://www.few.vu.nl/~schlobac/">Stefan Schlobach</a><br><span style="font-size:14pt">Associate Professor</span><br></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/ilaria.png" width="200" height="200"><br><a href="https://kmitd.github.io/ilaria/">Ilaria Tiddi</a><br><span style="font-size:14pt">Assistant Professor</span><br></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/patrick.jpg" width="200" height="200"><br><a href="https://pkoopmann.github.io">Patrick Koopmann</a><br><span style="font-size:14pt">Assistant Professor</span><br></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/lise.png" width="200" height="200"><br><a href="https://lisestork.github.io/">Lise Stork</a><br><span style="font-size:14pt">Postdoc</span><br><br></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/benno.jpg" width="200" height="200"><br><a href="http://bennokruit.nl">Benno Kruit</a><br><span style="font-size:14pt">Postdoc</span><br><br></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/romana.jpg" width="200" height="200"><br><a href="https://romana.pernisch.ch">Romana Pernisch</a><br><span style="font-size:14pt">Postdoc</span><br></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/atefeh.jpg" width="200" height="200"><br>Atefeh Keshavarzi Zafarghandi<br><span style="font-size:14pt">Postdoc</span></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/mark.png" width="200" height="200"><br>Márk Adamik<br><span style="font-size:14pt">PhD Student</span></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/loan.png" width="200" height="200"><br>Loan Ho<br><span style="font-size:14pt">PhD Student</span></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/ritten.jpeg" width="200" height="200"><br>Ritten Roothaert<br><span style="font-size:14pt">PhD Student</span></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/giacomo.jpg" width="200" height="200"><br>Giacomo Zamprogno<br><span style="font-size:14pt">PhD Student</span></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/kai.jpg" width="200" height="200"><br>Kai Obendrauf<br><span style="font-size:14pt">PhD Student</span></div>
    <div style="text-align: center; width:200px; display:inline-block; vertical-align:top;"><img src="images/unmesh.png" width="200" height="200"><br>Unmesh Joshi<br><span style="font-size:14pt">Guest</span></div>
</div> -->


<!-- <ul>
    {% for news_item in site.news reversed%}
  <li>({{ news_item.date | date: "%-d %B %Y" }}) - {{ news_item.summary }}
    {% if news_item.extra_content == "true" %}
    (<a href="{{news_item.url}}">continue reading</a>)
    {% endif %}
  </li>
    {% endfor %}
</ul> -->


<div class="container">
    <div class="row">
        {% for person in site.people %}
        <div class="col-6 col-md-3">
            <div class="container">
                <div class="text-center">
                    <img src="images/{{person.image}}" class="img-fluid" alt="Image of {{person.name}}"><br>
                    {% if person.link != None %}
                    <a href="{{person.link}}">{{person.name}}</a>
                    {% endif %}
                    {% if person.link == None %}
                    {{person.name}}
                    {% endif %}
                    <br>
                    <span style="font-size:14pt">{{person.position}}</span><br>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>