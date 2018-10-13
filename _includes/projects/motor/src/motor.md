																																																																																																																																																																														


#### Why BLDC ? ####

Reduced noise, wear, and friction caused by brushes and Torque-Speed characteristics is linear.[Direct-drive robots: theory and practice]


#### Basic Terminology ####

   1. **Stator & Rotor**

   Stator, the  stationary part, which carries the winding.Rotor, the rotating part, which carries the magnet.

   ![Stator & Rotor, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/motor_1.png){width=30% height=25%}

   2. **Air Gap**

   Air gap is the distance between stator and rotor.

   3. **Tooth & Slot**

   Winding are wounded around the laminated steel structure called tooth which channels more magnetic flux through them. Slot is the section between two tooth. Three phase motor have slots (and teeth) that is evenly divisible by three.
 
   ![Tooth & Slot, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/motor_2.png){width=30% height=25%}

   4. **Phase**

   A phase is an individual group of windings with a single terminal accessible from outside the motor. Most brushless motors are three-phase. 

   5. **Turns**

   
   6. **Pole $(N_m)$**

   A pole is a single permanent magnet pole, north or south. The minimum number of poles is two, but motors can have any even number of poles.The number of poles is not directly related to the number of slots, although there are common combinations of slot and pole counts that work well [6].

   7. **Field windings & Armature winding ?**


   8. **Electrical Angle $(\theta_e)$ vs Mechanical Angle $(\theta_m)$**

   Mechanical degrees in a motor refers to the rotation of the shaft. 1 revolution of the shaft equals 360 mechanical degrees. 

   When an electrical machine is operating as a motor, the idea is to create a traveling, rotating magnetic field, via the stator so that this moving flux attracts the rotor. Electrical degree is the angle through which magnetic field has rotated, i.e., 360 electrical degree equals transistion form "North" to "South" to "North"


   A 2 pole motor has 1 "North" pole and 1 "South" pole on the rotor. So in order for it to turn 360 electrical degrees ("North" to "South" to "North"), it needs to rotate 360 (360) mechanical degrees. A 4 pole motor has 2 "North" poles and 2 "South" poles. That means that 360 electrical degrees will occur when the shaft has rotated only 180 (360/2) mechanical degrees. Thus for $N_m$ Poles we have,

   $$ \theta_e = \frac{N_m}{2} \theta_m $$

#### Motor Parameters ####


   1. **Torque/Back EMF constant $(K_{t})$** 
   

   electrical input power = rate of production of heat in conductor + mechanical output power

   Under **steady-state condition** (accelration is zero), we have :

   $$ V_2I = I^2R + (BIl)\upsilon $$

   When $\upsilon = 0$  There is no mechnical output power thus all the electrical energy will converted as heat loss

   $$ V_1 I =  I^2R $$ (assuming same load with $\upsilon = 0$ but we need same I to support that load, $s.t., F_{conductor}= m_{load}g = BIl$ )

   $$ (V_2 -V_1)I = (BIl)\upsilon $$

   $$ V_2 -V_1 = Bl\upsilon = E $$

   where $E$ is the extra voltage needed to move the load, which proportional velocity of the conductor relative to the flux, for give field(B) and load(I) is known as **Back EMF/Motional EMF**

   thus, we get 

   $$ EI = T_{electromagnetic}\:\omega_m $$ 

   where $T_{electromagnetic} = T_{shaft} + frictional_{loss}$

   $$ \implies E = K_e \omega_m $$

   $$ \implies T = K_t \omega_m $$

   where $K_t = K_e$

   In reality, $K_e$ can only be measure in open-circuit and
   $K_t$ can only measured when current is flowing, thus causisng a variance in magentic and electrical condition which casuses **different value** to each of them. They are determined by magnetic field and geometrical parameters of air gap. For an ideal motor it will remain constant, but in reality, it varies with  rotor position because magetic field (B) consist of discrete poles and commutation occurs discretely which causes ripple in magnetic field.

   To avoid the torque ripple, we  can:

   1. Increase switching rate of current.
   2. Make the current to be smooth.
   3. Increase the number of poles.
   

   $$K_{t} =  f(\theta_{e})$$



   2.  **Motor Constant** $K_{m}$ is the ability to produce Toqrue for a given input power. It is winding invariant (as long as same conductimg wires used) but why? (Leanr about turns and wires thickness) (a)[https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Motor_constants.html]

   $$  P_{input} = VI = I^2R = \left( \frac{T}{K_t} \right)^2R = T^2 \frac{R}{ \left( K_t \right)^2} $$

   $$ \implies \frac{\left( K_t \right)^2}{R} = \frac{T^2}{P_{input}} $$

   $$ \implies K_m = \frac{K_{T} }{\sqrt{R}} = \frac{T}{\sqrt{P_{input}}}  $$


   $$ K^{2}_{m} \propto r^{3}_{gap}  ?? $$ [Actuator design for high force proprioceptive control in fast legged locomotion]

   3. **Electric Time Constant** [Direct-drive robots: theory and practice]

   4.  **[Direct-drive robots: theory and practice]**
Direct Drive has no damping. $Mechanical\;Time\;Constant\; \tau_{mech}  = \frac{inertia\;load}{mechanical\;damping\;coefficient}$ is large comapred to geared drive.


   5. **Thermal Specific Torque Density $K_{ts}$**
 

   Form, [Design Principles for a Family of Direct-Drive Legged Robots], we have

   $$ K_{ts} := \frac{K_t}{m} \sqrt{\frac{1}{R_{th}R}} $$

 

   6. **Specific Electrical Loading $(\overline{A})$** 

   Avergae **Axial** current per meter of circumference on the rotor. 

   [Design of Brushless Permanent-Magnet Machines, p. 68]
   
   7. **Specific Magnetic Loading $(\overline{B})$** 

   Average magnitude of **radial flux** density over the entire cylindrical surface of the rotor. 

   **$(\overline{A})$ vs $(\overline{B})$**

   In case we widen our slots to accomodate more copper $(\overline{A}) will increase but $(\overline{B}) may reduce because narrower teeth means less area for flux, and therefore has danger of stauration of iron.

   [Design of Brushless Permanent-Magnet Machines, p. 68]
   
   8. **Cooling (C)**

   As intuitive and as basic the better the cooling the better will be the perfomance of our motor.



##### Characteristics ##### 
   
   1. **Resistance**

     Responsible for heating loss, can be easily modeled as simple lumped resistor.


   2. **Inductance**


   Motor windings have inductance. Physically, this means that current flowing in the windings will induce magnetic flux through them, even in the absence of permanent magnet flux. It also means that the windings will resist rapid changes in current by generating voltage acrossthis inductor. However, this is not the back EMF. The value of inductance is less straightforward to calculate because the phases are not magnetically independent. That is, current in one phase can induce flux in another. Under sinusoidal drive currents, it is possible to use a lumped inductance, called the synchronous inductance, to accommodate for this. The value of the synchronous inductance is [Design and prototyping methods for brushless motors and motor control]:



   $$ L_s = \frac{3}{2} L_a $$

   where  $L_a$ is the lumped inductance measured independently on one phase, if it could be isolated. 


   The winding inductance has many theoretical and practical effects on the motor. It stores energy in the form of a magnetic field any time there is current in the winding. When a winding is switched off, this energy must go somewhere. For this reason, controller drivers contain "flyback diodes" that allow this current to circulate even when all the switches are open. Under highfrequency pulse-width modulated (PWM) control, the winding inductance also filters out current ripple. However, as a low-pass filter on current it also creates phase lag which is the motivation for the use of field-oriented control

   The winding inductance is a function of motor geometry and the number of turns in the winding.


   **Saliency**

      Saliency means the inductance varies with rotor position due to non-uniform air gap which inturn creates non-uniform flux distribution. If the magents are removed, the rotor will align with ampere-conductor distribution of stator and the torque produced for alignment is called **alignment/reluctant** torque.

      T [Design of Brushless Permanent-Magnet Machines, p. 68] In Non-Salient,the rotor is rotationally symmetric. No tendency to align with stator if magnets in rotor are removed. i.e., No **Reluctance Torque**, and winding inductance does not vary with rotor position. Non-salient poles exhibit both attractive & repulsive gap forces. []

   3. **Winding Configuration**

      They have three phase windings and can be connected to each other in wye or delta configuration. Wye has higher torque (theoretically torque constant is greater by a factor $\sqrt{3}$ [@kalouche_design_2016, p. 25]) because in the wye configuration, at any time one of phase is open and other two-phase are in series thus equal current flows through them whereas in delta it gets divided into two phases. Thus more current in each phase causes more torque, one will push and another phase will pull in the wye configuration.

   4. **Outrunners vs Inrunners**:

      [Design Principles for a Family of Direct-Drive Legged Robots]


      outrunners (rotor on the outside) will be preferrable to inrunners (rotor on the inside), and this measure is tied favorably to a motor’s radius to depth ratio **[Direct-drive robots: theory and practice]** as well as a large gap radius **[Actuator design for high force proprioceptive control in fast legged locomotion].** The measure is fundamentally winding invariant **[Leg Design for Energy Management in an Electromechanical Robot]**, but in practice other details of the motor’s construction (especially relating to the stator core and volume of copper) are critical.

      [Actuator design for high force proprioceptive control in fast legged locomotion]

      The **gap radius** is the distance from the rotating axis to the center of the gap between permanent magnets and the stator.

   The area inside of the gap increase proportionally. 
$$ M = V \rho \propto [r^{2}_{gap} - (r_{gap} - t_{rotor})^2 + (r_{gap} + t_{stator})^2 - r^{2}_{gap} ]  \propto r_{gap} $$ 


$$ M \propto [ (r_{gap} + t_{stator})^2 - (r_{gap} - t_{rotor})^2 ] $$







$$ \tau \propto r^{2}_{gap} $$ 
$$ J    \propto r^{3}_{gap} $$
$$ \frac{\tau}{M} \propto r_{gap} $$
$$ \frac{\tau}{J} \propto \frac{1}{r_{gap}} $$


Motor Constant $K_{m}$ is the ability to produce Toqrue for a given heating power loss. It is winding invariant (as long as same conductimg wires used) but why? (Leanr about turns and wires thickness) (a)[https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Motor_constants.html]

$$ K_m = \frac{\tau}{\sqrt{P_{loss}}} = \frac{I K_{T}}{\sqrt{I^2 R}} =  \frac{K_{T}}{\sqrt{R}} $$
$$ K^{2}_{m} \propto r^{3}_{gap} $$ [Actuator design for high force proprioceptive control in fast legged locomotion]


**winding Invarainat?**
[Leg Design for Energy Management in an Electromechanical Robot]

Winding volume, $V = \pi \rho^{2}L$. 

The resistance of the winding, $$ R \propto \frac{L}{A} \propto \frac{1}{\rho^4} $$

$$ K_t \propto L \propto \frac{1}{\rho^2} $$

$$ \tau = K_ti \implies \tau \propto \frac{i}{\rho^2} $$


$$ P_{loss} = i^2R \propto \frac{i^2}{\rho^4} $$

thus $$ K_m = \frac{T}{\sqrt{P_{loss}}} \propto \rho^{0} $$


**[Compliance and Force Control for Computer Controlled Manipulators]**
Force Control and Position Control are two ends of extreme. 
Force control sensible in case of contact.
Position control sensisble in case of contact-less

Thus for a real world we need a hybrid approach






#### Losses ####

Inefficiencies can  be  grouped  into  two general categories:

1.	Torque/Copper/$I^2$ Losses
2.	Speed/Iron/$E^2$ Losses


**Torque/Copper/$I^2$ Losses: Winding Resistance, Power Ratings**

They are due to resistance heating of the windings, and are proportional to the square of the output torque. 


**Speed/Iron/$E^2$ Losses: Delta Windings, Eddy Current, and Mechanical Losses**

Iron Core Losses = Eddy Curremt Losses +  Hystersis Losses

Hysteresis in  the  magnetic  domains  in the  core  appears  as  a  constant  friction  torque,  while  the eddy  current  torque  is  proportional  to  speed.  
 

 #### To Do ####
1. [Design of brushless permanent-magnet machines] finish 1.3.3 and 1.4.2













## Selection Criteria ##
[Actuator design for a high performance legged biped robot]

A smaller motor will have lower iron losses at a given speed (less iron to create  drag),  and  a  larger  motor  will  have  lower  copper losses for a given torque.

One interesting approach to motor sizing for a robot is to choose a small motor sized for walking, and then to overload it heavily during more strenuous activities.

This might result in huge copper losses due to squaring the high winding current, but for brief periods the  effect  on  overall  efficiency  is  minimal.  

The  thermal mass of the motor windings is high enough that it might not burn up for several seconds, and if it is cooled well enough the power level may be sustainable for longer activities.

This  is  particularly  true  for  permanent  magnet brushless motors, in which the stator coils are stationary and in contact  with the case, well-positioned for heat sinks or water cooling  jackets.  (For  brushed  motors  the  magnets  are  on the outside and the  windings are in the rotor, leaving few options for cooling.

 



## Drive ##



## References ##


<style>
h2
{
      text-align: left;
}
</style>

<style>
h4
{
      text-align: left;
}
</style>