---
title: Rule Mining on Hypergraphs to Forecast Recipe Popularity
---

<nav><ul>
    <li><a href="https://kai.cs.vu.nl/"> <img src="../../images/logos/KAI_logo_small_transp.png" alt="KAI" width="100"/></a></li>
    <li><a href="https://kai.cs.vu.nl/theses/">Theses</a></li>
</ul></nav>

## Rule Mining on Hypergraphs to Forecast Recipe Popularity
*Supervisor: Lise Stork (l.stork@vu.nl)*

#### Why
Most restaurants use spreadsheets to maintain inventory, in order to plan purchasing, spendings, and to avoid food waste. 
However, demand changes due to many external factors that contribute to the popularity of recipes and ingredients: e.g., temperature, general weather, and culture. 

Demand forecasting - predicting which dishes restaurants sell on a given day in future - helps restaurants consider these demand changes, further minimising spendings and food waste. 
Moreover, on a higher level, predicting future food demand helps governments formulate agricultural, economic and conservation policies that are necessary to sustain the increasing world population - UN estimates have put the total population at 8.6 billion by mid-2030. 

Time series sales forecasting models are often statistical models, exploiting the various indicators of food demand to forecast product demand, see Figure 1. 
When predictions fail, it proves challenging to backtrack why a model failed, making such models less trustworthy for demand forecasting. 

#### What 

The goal of this project is to (i) transform a dataset of restaurant purchases into a temporal knowledge graph, 
(ii) add auxiliary data, such as ingredient data or even weather data (more challenging), and 
(iii) run a temporal rule mining algorithm to predict future purchases. 

#### How
Using a temporal graph of purchasing data, with data in the form 
(restaurant_id, bought, product_id, "2022-03-14"), and auxiliary data such as a food knowledge graph describing characteristics of products and recipes (https://foodkg.github.io/), 
the aim is to predict which products should be sold in specific periods, and to try to do so in an explainable way using temporal rulemining (for example the TLogic framework mentioned below). 

So, from the statement: 
(TAKE, bought, FritesBelges, “2022-03-14”) 

To predict what else should be bought: 
(TAKE, bought, ?, “2022-03-14”)

Example mined rule: customers that bought spaghetti (given a specific date) will also buy bolognese sauce. 

#### Who 
Supervision will be by Lise Stork. We will collaborate with Pieter Wellens from the company Apicbase (https://get.apicbase.com/), situated in Antwerp, who own the consumer sales data. 

#### Requirements
- Some knowledge of graphs

#### Literature
- TLogic: Temporal Logical Rules for Explainable Link Forecasting on Temporal Knowledge Graphs. [paper]
