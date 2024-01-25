---
title: 'Visual scene understanding for indoor mobile robots (with the use case of trash picking)'
layout: default
description: 'In this project, you will be using the LoCoBot, a mobile robot equipped with multiple sensors and a manipulator. Your task would be to integrate object recognition methods (e.g. YOLO) and knowledge representation & reasoning methods to solve pick and place problems representing trash collection.'
topic: 'Robotics and Knowledge Representation' 
keywords: 
    - 'Robotics'
    - 'Computer Vision'
    - 'Python'
    - 'Robotic Operating System'
    - 'Knowledge Representation'
    - 'Machine Learning'
supervisor: 'Mark Adamik'
contact: 'm.adamik@vu.nl'
degree: 'B.Sc./M.Sc.'
description_link: '/theses/AM_vsu.md'
---


## Visual scene understanding for indoor mobile robots (with the use case of trash picking)

*Supervisor: Mark Adamik (m.adamik@vu.nl), Ilaria Tiddi (i.tiddi@vu.nl)*

#### Why
Pollution is one of the greatest challenges of our time. It is however a task that is both unpleasant and potentially dangerous for humans to perform (especially when the waste is contaminated), therefore an automated robotic solution is highly desired. A solution could be using a mobile robot equipped with a manipulator and to integrate knowledge representation and reasoning methods over the potential categories of trash, for example:
- Differentiate between trash and non-trash (what are the most likely waste in an office environment?)
- Reason over the qualities of the object (e.g. a bottle that is transparent and light is usually made of plastic, whereas a heavy one might be glass)


#### What 
In this project, you will be using the LoCoBot, a mobile robot equipped with multiple sensors and a manipulator. Your task would be to integrate object recognition methods (e.g. YOLO) and knowledge representation & reasoning methods to solve pick and place problems representing trash collection.

#### How
1. A literature review on the state-of-the-art methods integrating knowledge representation and reasoning with mobile robotics
2. Familiarizing with the LoCoBot platform and ROS.
3. Build a knowledge graph depending on the chosen use-case (trash picking is optional)
4. Developing an integrated robot control system that is able to recognize and reason over objects.


#### Who 
Supervision will be by Mark Adamik and Ilaria Tiddi.  

#### Requirements
- Some knowledge of graphs
- Knowledge of Robotic Operating System (ROS) is a nice to have, willingness to learn it is a must
- Image processing techniques is a nice to have but not essential

#### Literature
- Wu, Y., Shen, X., Liu, Q., Xiao, F., Li, C., 2021. A Garbage Detection and Classification Method Based on Visual Scene Understanding in the Home Environment. Complexity 2021, e1055604. https://doi.org/10.1155/2021/1055604
- Zareian, A., Karaman, S., Chang, S.-F., 2020. Bridging Knowledge Graphs to Generate Scene Graphs, in: Vedaldi, A., Bischof, H., Brox, T., Frahm, J.-M. (Eds.), Computer Vision – ECCV 2020, Lecture Notes in Computer Science. Springer International Publishing, Cham, pp. 606–623. https://doi.org/10.1007/978-3-030-58592-1_36
