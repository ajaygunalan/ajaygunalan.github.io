% VICARIOS (teleoperation systems)
% Ajay G 

<br>
<br>


## Content ##


* [Breif Overview](#breif-overview)



## Breif Overview ##

This [page](https://advr.iit.it/projects/inail-scc/teleoperazione) describes about the project. Basically, the idea is to teleopertae a quadrped with robotic arm mounted on it. The user would teleoprate using mixed reality user interface. i.e., He wears VR headset (HTC vive pro) and would be able to see the image, pcl, thermal image(FLIR) and listen to the sounds enabling the user to manipulate the robot using a custom haptic device.

#### Goal ####

This project is really huge, consisting of nearly 50 people working on various parts. There are four major teams: Quadruped robot (Dr. Claudio Semini), Robotic arm (Dr. Nikos Tsagarakis), Teleoperation (Dr. Ioannis Sarakoglou), UI/Mixed Reality (Dr Nikhil Deshpande).

#### Challenge ####

As you might know, since the project is really huge. No single person knows about the entire setup in detail. That makes collabarating super critical.

Technical Challenges:
1. Integration between team of 50 people is not easy task! For example, Each teams develops their code on jetson xavier and when it comes it final integration all of them have to keep their own jetson on the HyQ which creates a lot of problem in mounting and increses the weight.
2. People might see the BostON dYNAMICS ROBOT And think that walking is done. Not yet, in relaity. Yes, there are some success stories like them. But, its not really eas
3. Grasping is a huge challenge
4. I'm not even sure how tactile feebdack should evelove or whther will we able to get human like sensation ever?
5. VR causes motion sickness.
6. I'm not sure whether streaming pcl is good solution?
 



<style>
h2, h4 {
      text-align: left;
}

p {
   text-align: justify;
   text-justify: inter-word;
   margin-left: auto;
   margin-right: auto;
}

.author {
    text-align: center;

}

table {
    margin-left:auto; 
    margin-right:auto;
    background: transparent;

  }

table caption {
    text-align: center;
  }

ul li {
  text-align: left;
}

ol {
    display: block;
    list-style-type: decimal;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
}

 /* unvisited link */
a:link {
    color: #428bca;
}

/* visited link */
a:visited {
    color: #428bca;
}


a:link.main-link {
    color: #636566;
}

a:visited.main-link {
    color: #636566;
}
/*/* mouse over link */

a:hover.main-link {
    color: #000000;
}

ol li {
   text-align: left;
}

ol li img {
  display: block;
  margin: auto
}

ol li figure figcaption {
   text-align: center;
}


</style>

