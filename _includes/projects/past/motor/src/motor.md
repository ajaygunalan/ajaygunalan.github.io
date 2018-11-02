% Study of PMSM/BLDC Motor: Design, Dynamics, Drive 
% Ajay G 


### Introduction ###

   What is a robot?


   <p style="text-align: justify;">A robot is a bunch of actuator connected by a link(a structure). Actuators, being one of the fundamental element of a robot, will determine the core capabilities and limitation of a robot. 
   Thus a thorough understanding of the actuator will help us to optimise it based upon our requirment. 
   In this article we restrict ourself to Electromagnetic Actuator (Motors), since it is the most widely used one and has a higher energy efficiency compared to others like hydraulic, pneumatic, etc. Out of all the various type of motor like Induction, Reluctance, PMSM/BLDC, DC, Stepper, etc.
   I'll be focusing on only BLDC/PMSM Motors due to its superior perfomance compared to others.
   However most of the concepts you learn here, will be helpful for understanding other motors too.
   Our goal is to understand various factors of EM actuator which influences the perfomance and hopefully to justify why **pancake shaped, Quasi Direct-Drive PMSM/BLDC motor, with 4Q control drivers & SEA** will be the norm of the robotics in future.</p>



### Basic Terminology ###

#. **Stator & Rotor**

   Generally, stator is the  stationary part and rotor is the rotational part. In case of BLDC, often stator will have windings and rotor will have the permanent magnets.

   ![Stator & Rotor, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/stator_rotor.png){width=30% height=25%}


#. **Air Gap & Gap Radius**

   Air Gap is the distance between stator and rotor.

   Gap Radius  $R_{gap}$ is radial distance from the axle to the gap between the stator and rotor. When we mean pancake shaped motor, we mean motors with $R_{gap} > L_{axial}$


   ![Gap Radius, Source:[@seok_actuator_2012]](https://ajaygunalan.github.io/projects/asset/motor/r_gap.png){width=30% height=25%}

 

#. **Tooth & Slot**

   Winding are wounded around the laminated steel structure called tooth which channels more magnetic flux through them.

   Slot is the section between two tooth. Three phase motor have slots (and teeth) that is evenly divisible by three.
 
   ![Tooth & Slot, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/tooth_slot.png){width=30% height=25%}

#. **Phase**

   A phase is an individual group of windings with a single terminal accessible from outside the motor. Three phase windings have been used traditionally because of simplicity and over time it has become the industry standard. However, using windings with an increased number of phases will reduce torque ripple further and increase motor efficiency [46]. Currently, a custom 8-phase brushless motor is being developed for the MIT Cheetah that will have significantly higher torque density, **reduced torque ripple, and higher efficiency in the low-speed, high-torque operating regime** as compared to COTS motors [51].


#. **Turns**

   Each individual loop of wire making up phase winding is a Turn. 

   
#. **Pole $(N_m)$**

   A pole is a single permanent magnet pole, north or south. The minimum number of poles is two, but motors can have any even number of poles.The number of poles is not directly related to the number of slots, although there are common combinations of slot and pole counts that work well [6].

#. **Field windings & Armature winding ?**

   The windings which are responsible for the Magentic Field (**B**) is the field winding. The energy we apply here merely act as catalyst alone.

   Armature winding consist of current carrying conductors , which experience the $BIL$ force, thus are electrical power applied here is converted into mechanical output power.


#. **Electrical Angle $(\theta_e)$ vs Mechanical Angle $(\theta_m)$**

   Mechanical degrees ($\theta_m$) in a motor refers to the rotation of the shaft. 1 revolution of the shaft equals 360 mechanical degrees.

   When an electrical machine is operating as a motor, the idea is to create a traveling, rotating magnetic field, via the stator so that this moving flux attracts the rotor.

   **Electrical degree** ($\theta_e$) is the angle through which magnetic field has rotated, i.e., 360 electrical degree equals transistion form "North" to "South" to "North"


   A 2 pole motor has 1 "North" pole and 1 "South" pole on the rotor. So in order for it to turn 360 electrical degrees ("North" to "South" to "North"), it needs to rotate 360 mechanical degrees. A 4 pole motor has 2 "North" poles and 2 "South" poles. That means that 360 electrical degrees will occur when the shaft has rotated only 180 (360/2) mechanical degrees. Thus for $N_m$ Poles we have,

   $$ \theta_e = \frac{N_m}{2} \theta_m $$

### Motor Parameters ###

   Parameterisation means, to develop the model of a "system" interms of paramters(variable) and to see how various parameters affect the "system". The developed model should be verified by comparing the theoritical prediction form the model against experimental data and based upon the error, we should improve our model till we are satisfied with model's accuracy.
   Thus before delving into the various paramters of  a motor, we need to have model the motor.
   Most motor are modelled as a Resistor, Inductor and volatge source($E$) in series:

![Basic Motor Model, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/basic_model.png){width=20% height=8%}


   For a 3-phase BLDC/PMSM, the appropriate model is:

![Model of a 3-phase BLDC/PMSM, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/advanced_model.png){width=40% height=35%}



#. **Torque/Back EMF constant $(K_{t})$** 
   
   Electrical input power = rate of production of *heat* in conductor + power absorbed by the inductor(*magnetic* energy) + *mechanical* output power


   $$ V_{supply}i = i^2R + i L \frac{di}{dt} +(Bil)\upsilon $$

   Under steady-state condition (accelration is zero), $\frac{di}{dt} = 0$ :

   $$ V_{supply}i = i^2R + (Bil)\upsilon $$

   ![primitve motor in a steady-state, Source:[@hughes_electric_2013]](https://ajaygunalan.github.io/projects/asset/motor/v_is_not_zero.png){width=35% height=12%}
  
   When $\upsilon = 0$, there is no mechnical output power, and all the electrical energy will converted as heat loss:

   $$ V_{supply, \upsilon = 0} i =  i^2R $$

   ![primitve motor in a stall condition, Source:[@hughes_electric_2013]](https://ajaygunalan.github.io/projects/asset/motor/v_is_zero.png){width=30% height=15%}


   However current $i$ will remain unchanged for both $\upsilon \ne 0$ & $\upsilon =0$, because it is determined by the load alone, thus to support a given load the current $i$ is: 

   $$F_{conductor}= m_{load}g = Bil_{axial} \implies i = \frac{m_{load}g}{Bl} \implies i \propto m_{load}$$ since $(g, B, l)$ are constant for a given motor.

   To move the load, i.e., to produce mechnical output power, we need higher volatge, i.e., $V_{supply} > V_{supply,\upsilon = 0}$


   $$ (V_{supply} -V_{supply,\upsilon = 0})i = (Bil_{axial})\upsilon $$

   $$ V_{supply} -V_{supply,\upsilon = 0} = Bl_{axial}\upsilon = E $$

   where $E$ is the extra voltage needed to move the load, which proportional velocity of the conductor relative to the flux, for give field(B) & load(I) and is known as **Back EMF/Moional EMF**, thus: 

   $$ Ei = T_{electromagnetic}\:\omega_m $$ 

   where $T_{electromagnetic} = T_{shaft} + frictional_{loss}$

   $$ \implies T = K_t i $$


   $$ \implies E = K_e \omega_m $$


   where $K_t$ is the Torque constant and $K_e$ is the Back emf constant.

   In reality, $K_e$ can only be measure in open-circuit and $K_t$ can only measured when current is flowing, thus causisng a variance in magentic and electrical condition which casuses **different value** to each of them. They are determined by magnetic field and geometrical parameters of air gap. For an ideal motor it will remain constant, but in reality, it varies with  rotor position, i.e, $K_{t} =  f(\theta_{e})$ because magetic field (B) consist of discrete poles and commutation occurs discretely which causes ripple in magnetic field.

   To avoid the torque ripple, we  can:

   i. Increase switching rate of current.
   ii. Make the current to be smooth.
   iii. Increase the number of poles.



#. **Motor Constant** $K_{m}$ 

   It is the ability to produce Toqrue for a given input power. 

   $$  P_{input} = Vi = i^2R = \left( \frac{T}{K_t} \right)^2R = T^2 \frac{R}{ \left( K_t \right)^2} $$

   $$ \implies \frac{\left( K_t \right)^2}{R} = \frac{T^2}{P_{input}} $$

   **$$ \implies K_m = \frac{K_{T} }{\sqrt{R}} = \frac{T}{\sqrt{P_{input}}}$$**


   It is winding invariant [@kenneally_leg_2015] as long as same conductimg wires are used. For given winding volume, $(V = \pi r_{wire}^2 L = c \implies L \propto \frac{1}{r_{wire}^{2}})$, the resistance of the winding, 
      $R \propto \frac{L}{A} \propto \frac{L}{r_{wire}^{2}} \propto \frac{1}{r_{wire}^4}$

   The Torque constant $K_t$ depends linearly on the number of turns around the core,

   $$ K_t \propto L \propto \frac{1}{r_{wire}^2} $$


   $$ \tau = K_ti \implies \tau \propto \frac{i}{r_{wire}^2} $$


   $$ P = i^2R \propto \frac{i^2}{r_{wire}^4} $$

   thus **$$ K_m = \frac{\tau}{\sqrt{P}} \propto r_{wire}^{0} $$**


   $$ K_{m}^{2} = \frac{\tau^2}{i^2R} = \frac{n(B^2 i^2 l_{axial}^2 r_{gap}^2)}{i^2 \rho \frac{l_{axial}}{A}} = \frac{nl_{axial}B^2r_{gap}^{2}A}{\rho} $$ 

   thus for given a particular wire gauge, the number of wires (n) in the cross section scales linearly with the radius.[@wensing_proprioceptive_2017]

   **$$ K_{m}^{2} \propto r_{gap}^{3} $$**
  

#. **Electric Time Constant**

   The electrical time constant is the amount of time it takes the current in the winding to reach 63.2% percent of its rated value. The time constant found by dividing inductance by resistance.[@asada_direct-drive_1987]

   $$ \tau_e  = \frac{L}{R} $$

#. **Mechanical Time Constant**

   It is the time required for a given motor to reach 63.2% of its maximum rated speed in a no-load condition. The mechanical time constant is basically a measure of a motor's responsiveness. Direct Drive has no damping, thus is $\tau_{mech}$ large comapred to geared drive.      
   $$ \tau_{mech}  = \frac{inertia\;load}{mechanical\;damping\;coefficient} = \frac{\sum R_a J_t}{K_e K_t} $$ 


#. **Thermal Specific Torque Density $K_{ts}$**
 

   Form, [@kenneally_design_2016], we have

   $$ K_{ts} := \frac{K_t}{m} \sqrt{\frac{1}{R_{th}R}} $$

#. **Specific Electrical Loading $(\overline{A})$** 

   Avergae **Axial** current per meter of circumference on the rotor. 

   [Design of Brushless Permanent-Magnet Machines, p. 68]
   
#. **Specific Magnetic Loading $(\overline{B})$** 

   Average magnitude of **radial flux** density over the entire cylindrical surface of the rotor. 

   **$(\overline{A})$ vs $(\overline{B})$**

   In case we widen our slots to accomodate more copper $(\overline{A})$ will increase but $(\overline{B})$ may reduce because narrower teeth means less area for flux, and therefore has danger of stauration of iron.

   [Design of Brushless Permanent-Magnet Machines, p. 68]
   
#. **Cooling (C)**

   As intuitive and as basic the better the cooling the better will be the perfomance of our motor.



### Characteristics ###
   
#. **Resistance**

   Responsible for heating loss, can be easily modeled as simple lumped resistor.


#. **Inductance**


   Motor windings have inductance. Physically, this means that current flowing in the windings will induce magnetic flux through them, even in the absence of permanent magnet flux and will resist rapid changes in current by generating voltage across it. However, this is not the back EMF.
   The value of inductance is less straightforward to calculate because the phases are not magnetically independent. That is, current in one phase can induce flux in another. 
   Under sinusoidal drive currents, it is possible to use a lumped inductance, called the **synchronous inductance**, to accommodate for this. The value of the synchronous inductance is [@colton_design_2010]:


   $$ L_s = \frac{3}{2} L_a $$

   where  $L_a$ is the lumped inductance measured independently on one phase, if it could be isolated. 


   The winding inductance stores energy in the form of a magnetic field any time there is current in the winding. 
   When a winding is switched off, this energy must go somewhere. 
   For this reason, controller drivers contain **flyback diodes** that allow this current to circulate even when all the switches are open. 

   Under highfrequency pulse-width modulated (PWM) control, the winding inductance also filters out current ripple. However, as a low-pass filter on current it also creates phase lag which is the motivation for the use of field-oriented control

   The winding inductance is a function of motor geometry and the number of turns in the winding.


   **Saliency**

   Saliency means the inductance varies with rotor position due to non-uniform air gap which inturn creates non-uniform flux distribution. If the magents are removed, the rotor will align with ampere-conductor distribution of stator and the torque produced for alignment is called **alignment/reluctant** torque.

   In Non-Salient, the rotor is rotationally symmetric and has no tendency to align with stator if, magnets in rotor are removed. i.e., No **Reluctance Torque** thus, winding inductance does not vary with rotor position. Non-salient poles exhibit both attractive & repulsive gap forces. [@hendershot_design_2010, p. 68]

#. **Winding Configuration**

   They have three phase windings and can be connected to each other in wye or delta configuration. Wye has higher torque (theoretically torque constant is greater by a factor $\sqrt{3}$ [@kalouche_design_2016, p. 25]) because in the wye configuration, at any time one of phase is open and other two-phase are in series thus equal current flows through them whereas in delta it gets divided into two phases. Thus more current in each phase causes more torque, one will push and another phase will pull in the wye configuration.

#. **Gap Radius**:

   It is the distance from the rotating axis to the center of the gap between permanent magnets and the stator.

   The area inside of the gap increase proportionally. 

   $$ Mass = V \rho = [V_{rotor} + V_{stator}]\rho $$ 

   ![Gap Radius, Source:[@seok_actuator_2012]](https://ajaygunalan.github.io/projects/asset/motor/r_gap.png){width=30% height=25%}

   $$ M = \pi [r_{gap}^2 - (r_{gap} - t_{rotor})^2 + (r_{gap} + t_{stator})^2 - r_{gap}^2 ]l \rho $$

   Approximating to First Order thin walls (Neglecting higher order terms)[@wensing_proprioceptive_2017]


   $$ M \approx 2\pi r_{gap}l(t_s \rho_s + t_r \rho_r) $$

   $$ M \propto r_{gap} $$ {#eq:mass_r_gap}

   $$ \tau = Fr_{gap} = (\sigma A)r_{gap} = (\sigma 2 \pi r_{gap}l)r_{gap} = 2 \pi r_{gap}^{2}l \sigma $$

   $$ \tau \propto r_{gap}^{2} $$ {#eq:torque_r_gap}

   $$ J_{hollowcylinder} = \frac{1}{2}M (R^2_{inner} + R^2_{outer}) $$

   $$ J_{rotor} \approx Mr^2_{gap} $$


   $$ J_{rotor} \approx 2\pi lt_r \rho_r r^3_{gap} $$

   $$ J_{rotor} \propto r_{gap}^{3} $$ {#eq:j_r_gap} 

   Frome [@eq:mass_r_gap], [@eq:torque_r_gap], [@eq:j_r_gap]
   $$ \frac{\tau}{M} \propto r_{gap} $$
   $$ \frac{\tau}{J} \propto \frac{1}{r_{gap}} $$




   [@kenneally_design_2016]outrunners (rotor on the outside) will be preferrable to inrunners (rotor on the inside), and this measure is tied favorably to a motor’s radius to depth ratio [@asada_direct-drive_1987] as well as a large gap radius [@seok_actuator_2012]. The measure is fundamentally winding invariant [kenneally_leg_2015], but in practice other details of the motor’s construction (especially relating to the stator core and volume of copper) are critical.

   [@seok_actuator_2012]


#. **Core vs Coreless**:

#. **Axial Flux vs Radial Flux**

   **[@mason_compliance_1981]**
   Force Control and Position Control are two ends of extreme. 
   Force control sensible in case of contact.
   Position control sensisble in case of contact-less

   Thus for a real world we need a hybrid approach





### Losses ###

   Inefficiencies can  be  grouped  into  two general categories:

   1. Torque/Copper/$I^2$ Losses
   2. Speed/Iron/$E^2$ Losses


   **Torque/Copper/$I^2$ Losses: Winding Resistance, Power Ratings**

   They are due to resistance heating of the windings, and are proportional to the square of the output torque. 


   **Speed/Iron/$E^2$ Losses: Delta Windings, Eddy Current, and Mechanical Losses**

   Iron Core Losses = Eddy Curremt Losses +  Hystersis Losses

   Hysteresis in  the  magnetic  domains  in the  core  appears  as  a  constant  friction  torque,  while  the eddy  current  torque  is  proportional  to  speed.  
 

### Selection Criteria ###
   [@seok_actuator_2012]

   A smaller motor will have lower iron losses at a given speed (less iron to create  drag),  and  a  larger  motor  will  have  lower  copper losses for a given torque.

   One interesting approach to motor sizing for a robot is to choose a small motor sized for walking, and then to overload it heavily during more strenuous activities.

   This might result in huge copper losses due to squaring the high winding current, but for brief periods the  effect  on  overall  efficiency  is  minimal.  

   The  thermal mass of the motor windings is high enough that it might not burn up for several seconds, and if it is cooled well enough the power level may be sustainable for longer activities.

   This  is  particularly  true  for  permanent  magnet brushless motors, in which the stator coils are stationary and in contact  with the case, well-positioned for heat sinks or water cooling  jackets.  (For  brushed  motors  the  magnets  are  on the outside and the  windings are in the rotor, leaving few options for cooling.

### Perfomance ###

 Reduced noise, wear, and friction caused by brushes and Torque-Speed characteristics is linear.[@asada_direct-drive_1987]

### To Do ###

   1. Finish 1.3.3 and 1.4.2 in [@hendershot_design_2010]
   2. Maxon Document
   3. Asuting  BLDC chapter
   4. Focus on charcteristic section
   5. Finish the core vs corless section
 
### References ###

<style>
h3 {
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

body {
   background-color: #faebd7
}
</style>
