% Actuators for Robot 
% Ajay G 

Note: Kindly refer here ([https://ajaygunalan.github.io/blog/notes/motor/motor.html](https://ajaygunalan.github.io/blog/notes/motor/motor.html)) for the various definition and derivation. Here the focus is only to understand which factors need to be maximized and minimized for robots of the future.


<br>

##### Content #####

* [What is a robot?](#what-is-a-robot) 
* [Is Actuator a deal?](#is-actuator-a-deal) 
* [Gearbox- The Culprit](#gearbox---the-culprit)
* [Motor control loops](#motor-control-loops)
* [Passive compliance](#passive-compliance)
* [Pan-Cake Shape](#pan-cake-shape)
* [Conclusion](#conclusion)
* [References](#references) 

<br>

##### What is a robot? #####


   <p style="text-align: justify;">A robot is a bunch of actuators connected by a link(a structure) which should do some task. Actuators, being one of the fundamental elements of a robot, will determine the core capabilities and limitation of a robot. Thus a thorough understanding of the actuator will help us to optimize it based upon our requirement. In this article, we restrict ourself to Electromagnetic Actuator (Motors), since it is the most widely used one and has a higher energy efficiency compared to others like hydraulic, pneumatic, etc. Our goal is to understand various factors which influences the performance and figure out the optimal choice for robots.</p> 

   
<br>

##### Is Actuator a deal? #####


   It should just spin with some torque, right? what else would be expected. Well, traditionally automation and industrial robotic arms are fixed inside a cage where all the things are architectured as per the requirement. This mean there was less uncertanity and they didn't come in contact with an unknown object. Everything was like an orchestra and the problem was reduced to finding the correct set of motor commands to do a particular task satisfying some constraints (like time, cost, power, etc.). For these type of problem, yes it should spin to a position with enough torque. Usually, this was achieved by numerous trial and error and finally hard coding the values in real-time. The actuator was designed to maximize the torque by having huge gearbox like shown below.

![Actuator Design in Automation, Source[@kalouche_design_2016]](https://ajaygunalan.github.io/projects/asset/past/motor/automation_design.png){width=30% height=25%}

   Good for automation, but when it comes to general purpose robotics, we expect it to touch and manipulate objects like us and to be with us side-by-side safely, which demands actuators to be compliant, back-driveable, energy-efficiency and force transparency (ability to sense output torque from motor current). This can't be achieved with pure position control and huge gearbox. If we did apply the same principles' which worked for automation, the result will like below:

![An result of applying automation principles in a robot](https://ajaygunalan.github.io/projects/asset/past/motor/motor_fail.gif)

   In fact, you can see more failures in this [video](https://www.youtube.com/watch?v=g0TaYhjpOfo) of DARRPA robotics challenge where the robot failed to do a task which seems trivial to us. The possible reasons for failure are huge gearbox, pure position control, lack of compliance(some were rigid like bricks) and bad control algorithm(won't cover about it here). Let us delve into each of the reasons briefly.

<br>

##### Gearbox - The Culprit #####

   Gearbox is a power transmitter, used to increase the torque by decreasing the speed. Addition of gearbox induces various factors such as reflected inertia, backlash, internal stresses, coulomb, viscous friction, and stiction in the gear train. These non-linear effects hide forces acting at the output from being sensed by the motor causing motor current to be a poor indicator of output torque. Direct-Drive means directly coupling the load with actuator completely removing the gearbox. This overcomes all the drawbacks of the gearbox but increases the weight and volume of the motor due to higher torque requirment. Thus there is a trade-off between force-transparency and reflected inertia, torque requirement. Thus by having single-stage, back-driveable gears with low reduction ration(5-10), we can achieve a decent compromise between torque requirement and force transparency, impedance. We call this Quasi Direct Drive.[@kalouche_design_2016]

<!--    While augmenting an actuator with a gearbox can increase the actuator’s torque density by orders of
magnitude it does so at the cost of added control complexities, increased reflected inertia, efficiency
losses and reduced mechanical robustness [26]. Control complexities are derived from the difficulty in
modeling the non-linearities associated with backlash, . Only in specific circumstances — when the load and the rate -->


<br>

##### Motor control loops #####

  If you have ever done a simple line following a robot, you would probably know that there is something called motor driver which in essence applies the required voltage based upon the user command. Based upon the driver we can give different commands such as position, velocity, current(torque). No matter what command you give, ultimately it boils down to applying a voltage to the motor. The value of voltage will be determined by the error between the desired value and actual value. This means that for each loop (say velocity), there must be a particular sensor measuring it. 

  ![Current-Velocity-Position-Loops](https://ajaygunalan.github.io/projects/asset/past/motor/Current-Velocity-Position-Loops.gif){width=40% height=30%}  

  There is a reason behind why current is the inner-most loop because they are closer to the voltage(intuitively) and inner-loop operate (5-10) times faster than the outer loop. A motor drive can include any combination of three types of control loops—a position loop, a velocity loop, and a current. The *bandwidth*, or response time, of the system, is a measure of how fast it responds to the changing input command. As you might have guessed the inner loops have higher bandwidth. While higher bandwidth generally provides stiffer motor performance, decreases error, and improves transient response time, there are also drawbacks to high bandwidth in systems. Specifically, the higher the bandwidth, the higher the frequency at which the motor responds to disturbances, which typically requires higher accelerations and forces. Power dissipation has a squared relationship to force, so any increase in bandwidth significantly increases power dissipation (i.e. heat), and therefore, the temperature rise of the motor. Thus a optimal bandwidth must be chosen based upon the requirement. In addition to that, Motor drivers are also classified as 1Q  or 4Q drivers. 1Q allows motor to be operated in quadrant 1, and 3, allowing the motor torque and speed to be controlled in the same direction. Whereas 4Q allows all the four quadrants to be controlled and thus making active electromagnetic braking, regenerating current form the motor to the battery, possible. Thus a sufficiently high bandwidth 4Q motor driver is a must.

   ![Torque vs Speed](https://ajaygunalan.github.io/projects/asset/past/motor/four_quadrant.png){width=30% height=25%}   
  


<br>

##### Passive compliance #####

   Compliance can be added mechanically(using springs, damper) or virtually by control algorithm which can vary the stiffness and damping on the fly. So it seems that virtual spring is better because it gives variable stiffness. Not necessarily, mechanical spring makes control a bit complicated, but they are of enormous use when it comes energy efficiency. They store the sudden high impact force and can be reused in the next cycle. So, in essence, we should select the passive compliance for a baseline value and use the software on top it for fine-tuning. 

<br>

##### Pan-Cake Shape #####

   When we say pan-cake shaped motor, it means motors whose $r_{gap} > L_{axial}$, where $r_{gap}$ is the radial gap between center and rotor and $L_{axial}$ is the axial length of the motor. The reason is torque density increases with $r_{gap}$. But it doesn't mean we can increase the $r_{gap}$ indefinitely as torque per inertia is inversely proportional to $r_{gap}$. So a compromise has to be made. In general $r_{gap} > L_{axial}$ and should look like a pan-cake shape for having a higher torque density.

   ![Gap Radius, Source[@seok_actuator_2012]](https://ajaygunalan.github.io/projects/asset/past/motor/r_gap.png){width=30% height=25%}   


##### Conclusion #####

   Hopefully, I have justified why we need a sufficiently high(optimal) bandwidth, 4Q control driver with pan-cake shaped motor, quasi-direct-drive and compliance for the robots.


   ![Actuators for robotics](https://ajaygunalan.github.io/projects/asset/past/motor/final.png){width=30% height=25%}   
 

<!-- ##### What we need from a actuator ? #####

   It should spin, right ? Well, yeah.
 -->
   




<!-- 

##### Pan-Cake Shape ? #####
   
   
Well, brushless means reduced noise, wear, and friction caused by brushes and torque-speed characteristics is linear[@asada_direct-drive_1987] and high energy efficiency make it a attractive choice.



<br>


##### Selection Criteria #####
   [@seok_actuator_2012]

   A smaller motor will have lower iron losses at a given speed (less iron to create  drag),  and  a  larger  motor  will  have  lower  copper losses for a given torque.

   One interesting approach to motor sizing for a robot is to choose a small motor sized for walking, and then to overload it heavily during more strenuous activities.

   This might result in huge copper losses due to squaring the high winding current, but for brief periods the  effect  on  overall  efficiency  is  minimal.  

   The  thermal mass of the motor windings is high enough that it might not burn up for several seconds, and if it is cooled well enough the power level may be sustainable for longer activities.

   This  is  particularly  true  for  permanent  magnet brushless motors, in which the stator coils are stationary and in contact  with the case, well-positioned for heat sinks or water cooling  jackets.  (For  brushed  motors  the  magnets  are  on the outside and the  windings are in the rotor, leaving few options for cooling.

<br>


##### Perfomance #####


<br>

##### To Do #####

   1. Finish 1.3.3 and 1.4.2 in [@hendershot_design_2010]
   2. Maxon Document
   3. Asuting  BLDC chapter
   4. BLDC and chaos -->
 
 


##### References #####


<style>
h3, h4, h5 {
      text-align: left;
}

ul li {
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
