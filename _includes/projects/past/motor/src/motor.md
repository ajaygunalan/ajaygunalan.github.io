% Optimization of Motor 
% Ajay G 

Note: Kindly refer here ([https://ajaygunalan.github.io/blog/notes/motor/motor.pdf](https://ajaygunalan.github.io/blog/notes/motor/motor.pdf)) for the various definition and derivation. Here the focus is only to understand which factors need to be maximised and minimised.

<br>
<br>


#### Introduction ####

   What is a robot?


   <p style="text-align: justify;">A robot is a bunch of actuator connected by a link(a structure). Actuators, being one of the fundamental element of a robot, will determine the core capabilities and limitation of a robot. Thus a thorough understanding of the actuator will help us to optimise it based upon our requirment. In this article we restrict ourself to Electromagnetic Actuator (Motors), since it is the most widely used one and has a higher energy efficiency compared to others like hydraulic, pneumatic, etc. Out of all the various type of motor like Induction, Reluctance, PMSM/BLDC, DC, Stepper, etc. Our goal is to understand various factors of EM actuator which influences the perfomance and hopefully to justify why **pancake shaped, Quasi Direct-Drive, Permanent Magnet Synchronous Motors(PMSM), with 4Q control drivers and elastic  element** will be the norm of the robotics in future.</p> 

   *Note: (PMSM) is physically same as the BLDC Motor. We call it PMSM/BLAC when we apply a sinuosoidal emf and BLDC when we apply trapezoidal emf.

<br>
<br>

#### Why PMSM ? Why not DC, Coreless DC ? ####

   Well, brushless means reduced noise, wear, and friction caused by brushes and torque-speed characteristics is linear[@asada_direct-drive_1987] and high energy efficiency make it a attractive choice.

<br>
<br> 

#### Pan-Cake Shape ?####
   
   



<br>
<br> 
 
#### Motor Parameters ####

   Parameterisation means, to develop the model of a "system" interms of paramters(variable) and to see how various parameters affect the "system". The developed model should be verified by comparing the theoritical prediction form the model against experimental data and based upon the error, we should improve our model till we are satisfied with model's accuracy.
   


   For a 3-phase BLDC/PMSM, the appropriate model is:

   ![Model of a 3-phase BLDC/PMSM, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/past/motor/advanced_model.png){width=40% height=35%}

<br>
<br>


#### Selection Criteria ####
   [@seok_actuator_2012]

   A smaller motor will have lower iron losses at a given speed (less iron to create  drag),  and  a  larger  motor  will  have  lower  copper losses for a given torque.

   One interesting approach to motor sizing for a robot is to choose a small motor sized for walking, and then to overload it heavily during more strenuous activities.

   This might result in huge copper losses due to squaring the high winding current, but for brief periods the  effect  on  overall  efficiency  is  minimal.  

   The  thermal mass of the motor windings is high enough that it might not burn up for several seconds, and if it is cooled well enough the power level may be sustainable for longer activities.

   This  is  particularly  true  for  permanent  magnet brushless motors, in which the stator coils are stationary and in contact  with the case, well-positioned for heat sinks or water cooling  jackets.  (For  brushed  motors  the  magnets  are  on the outside and the  windings are in the rotor, leaving few options for cooling.

<br>
<br>

#### Perfomance ####


<br>
<br>

#### To Do ####

   1. Finish 1.3.3 and 1.4.2 in [@hendershot_design_2010]
   2. Maxon Document
   3. Asuting  BLDC chapter
   4. BLDC and chaos
 

<br> 


#### References ####


<style>
h3, h4 {
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

ol {
    display: block;
    list-style-type: decimal;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
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

/*body {
   background-color: #faebd7
}*/
</style>
