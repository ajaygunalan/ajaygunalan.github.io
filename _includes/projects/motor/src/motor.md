% Design, Dynamics, Drive of BLDC Motor 

## Why BLDC ? ##


Reduced noise, wear, and friction caused by brushes. [Direct-drive robots: theory and practice]

Torque -Speed characteristics is linear.



## Thermal Specific Torque Density ##
 

 Form, [Design Principles for a Family of Direct-Drive Legged Robots], we have

 $$ K_{ts} := \frac{K_t}{m} \sqrt{\frac{1}{R_{th}R}} $$

outrunners (rotor on the outside) will be preferrable to inrunners (rotor on the inside), and this measure is tied favorably to a motor’s radius to depth ratio [Direct-drive robots: theory and practice] as well as a large gap radius [Actuator design for high force proprioceptive control in fast legged locomotion]. The measure is fundamentally winding invariant [Leg Design for Energy Management in an Electromechanical Robot], but in practice other details of the motor’s construction (especially relating to the stator core and volume of copper) are critical.

**[Direct-drive robots: theory and practice]**
Direct Drive has no damping. $Mechanical\;Time\;Constant\; \tau_{mech}  = \frac{inertia\;load}{mechanical\;damping\;coefficient}$ is large comapred to geared drive.


**Motor Inductance Effects**
Direct-drive motors for robotics applications arc generally designed for maximum output torques. To eliminate a mechanical gearing. the large output torque is the most important specification in the motor design.

However, this requirement leads to the use of large windings, which have significantly large inductances. 

The electric time constant, which is determined by the motor inductance, becomes particularly slow for a large direct-drive motor having as large inductance.
 
The slow time constant may cause a stability problem.

For traditional servomotors used in the gear-drive robot, the motor inductance is negligibly small. Hence, the effect of th e electric time constant is negligible, and the drive system can be treated as a second-order system, unless other higher-order delays are prominant.
 
Thus, the drive system is inherently stable with an appropriate damping. By contrast, often the direct-drive system can be unstable due to the motor inductance effect. To cope with this problem, the amplifier of the direct-drive motor must have fast dynamic responses to drive motor currents quickly in spite of the large inductance. Also, the control system must be designed carefully so that the stability margin can be sufficiently large.


**Gap radius ?**
[Actuator design for high force proprioceptive control in fast legged locomotion]

The gap radius is the distance from the rotating axis to the center of the gap between permanent magnets and the stator.

The area inside of the gap increase proportionally. 
$$ M    \propto r_{gap} $$ 
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


## Design ##

#### Basic Terminology ####

![Stator & Rotor, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/motor_1.png){width=30% height=25%}


![Tooth & Slot, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/motor_2.png){width=30% height=25%}

Turns

Poles

Motor Torque constant is not a constant 

$$ k_{t} =  f(\theta_{e}) $$, where $\theta_{e}$ is the electrical angle for BLDC Motor
$$ k_{t} =  c $$, where $c$ is conatant for DC motor

Resistance

#### Inductance ####

It will resist the rapid change in current by producing a voltage across it but its not the Back EMF.

Back EMF is the only component that is generate by the permanent  magnet flux

The value of inductance is less straightforward to calculate because the phases are not
magnetically independent. That is, current in one phase can induce flux in another. Under
sinusoidal drive currents, it is possible to use a lumped inductance, called the synchronous
inductance, to accommodate for this. The value of the synchronous inductance $L_s$ is:

$$ L_s = \frac{3}{2} L_a $$

$L_a$ is ?

The winding inductance has many theoretical and practical effects on the motor. It stores energy in the form of a magnetic field any time there is current in the winding. When a winding is switched off, this energy must go somewhere. For this reason, controllers contain "flyback diodes" that allow this current to circulate even when all the switches are open. Under highfrequency pulse-width modulated (PWM) control, the winding inductance also filters out current ripple. However, as a low-pass filter on current it also creates phase lag which is the motivation for the use of field-oriented control

The winding inductance is a function of motor geometry and the number of turns in the winding.

#### Saliency ####

A EM is Saliency if the Inductance varies with rotor position. [Design of Brushless Permanent-Magnet Machines, p. 68]

Salient poles exhibit mainly attractive tangential gap forces -Why ?
Non-salient poles exhibit both attractive & repulsive gap forces -Why ? (lec1)

**what are field windings and armature winding ?**


No. of Stator slot  = 3 * No. of Poles

No. of Stator slot/pole = 

**Skin effect causes current eveneness**

**Proximity effect** 

**what is reluctance torque?**

Electrical Loading [Design of Brushless Permanent-Magnet Machines, p. 68]
Magnetic Loading [Design of Brushless Permanent-Magnet Machines, p. 68]


#### Air Gap ####


#### Slot ####


#### Winding Configuration ####


  They have three phase windings and can be connected to each other in wye or delta configuration. Wye has higher torque (theoretically torque constant is greater by a factor $\sqrt{3}$ [@kalouche_design_2016, p. 25]) because in the wye configuration, at any time one of phase is open and other two-phase are in series thus equal current flows through them whereas in delta it gets divided into two phases. Thus more current in each phase causes more torque, one will push and another phase will pull in the wye configuration.



## Dynamics ##

#### Losses ####

Inefficiencies can  be  grouped  into  two general categories:

1.	Torque/Copper/$I^2$ Losses
2.	Speed/Iron/$E^2$ Losses


**Torque/Copper/$I^2$ Losses: Winding Resistance, Power Ratings**

They are due to resistance heating of the windings, and are proportional to the square of the output torque. 


**Speed/Iron/$E^2$ Losses: Delta Windings, Eddy Current, and Mechanical Losses**

Iron Core Losses = Eddy Curremt Losses +  Hystersis Losses

Hysteresis in  the  magnetic  domains  in the  core  appears  as  a  constant  friction  torque,  while  the eddy  current  torque  is  proportional  to  speed.  
 

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