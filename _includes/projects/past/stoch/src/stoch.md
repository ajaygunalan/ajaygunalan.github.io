% Stoch - The Quadruped Robot at RBCCPS
% Ajay G 

<br>
<br>


## Content ##


* [Breif Overview](#breif-overview)
  + [Goal](#goal)
  + [What was achieved by Stoch 1.0 ?](#what-was-achieved-by-stoch-1.0)
  + [How we achieved ?](#how-we-achieved)
  + [Next what ?](#next-what)
* [Stoch 1.0](#stoch-1.0)
  + [Why we didn’t do what google did ?](#why-we-didnt-do-what-google-did)
  + [Can it walk with hand-crafted tarjectory ?](#can-it-walk-with-hand-crafted-tarjectory)
  + [Then what is the point of using DRL ?](#then-what-is-the-point-of-using-drl)
* [Stoch 2.0](#stoch-2.0)
* [The Team](#the-team) 


## Breif Overview ##

![Stoch-1.0 developed at RBCCPS](https://ajaygunalan.github.io/projects/asset/past/stoch/stoch_one.jpg){width=35% height=30%}

#### Goal ####

To achieve a robust, all terrain, legged robot.



Hardware              Description    
-------               ------ 
Materials:            Carbon fiber (CF) tubes & 3D printed (PLA)   
Servo-motors:         Kondo-2350HV & Robokits Ultra Torque: RKI-1203      
IMU:                  9 axis sparkfun MPU 9150
Encoders:             Magnetic Encoders, Bourns EMS22a
Power Supply:         Li-Po batteries 
                       11.1V(3s)×2200mAh for hip motors
                       7.4V(2s)×3000mAh for knee motors
PWM multiplexer:      Adafruit 16-Channel 12-bit: PCA968
Mass:                 3.0 Kg
Total Leg Length      230 mm


Table:  Hardware Description of Stoch 1.0.

<br>

#### What was achieved by Stoch 1.0 ?  ####

The quadruped performed variety of gaits such as walks, bounds, trots, etc...as show in this [video](https://www.youtube.com/watch?v=swcStUm0Nuk&feature=youtu.be)

<br>

####  How we achieved ?  ####

We used on-policy, model-free DRL algorithm based on actor-critic learning framework called Proximal Policy Optimisation (PPO) to generate the gaits in the simulation(PyBullet). It took 30 Million samples (5-7 hours) to learn a particular gait in the simulation. To transfer it on the hardware, we took the end-effector tarjectory form simulation and did principal component analysis to generate different gaits and we deployed on the hardware.

You can find more info in this [paper](https://arxiv.org/abs/1810.03842)

<br>

#### Next what ?  ####

#. How to learn different task with least samples ?

   Model based RL, & Imitation Leanring.

#. How to control & combine different behaviour such as turning, climbing stairs, reacting to external disturbance ?

   Funnel Libraries, & Reactive Control.


I would like to mention here more on the pratical issues(behind the paper stories) and evolution of this project, especially on stoch 2.0

<br>
<br>

## Stoch 1.0 ##

The project was initially motivated by Googles's work on [Sim-to-Real: Learning Agile Locomotion For
Quadruped Robots](https://arxiv.org/abs/1804.10332). The essence of the paper is to imrove the transferbility from learned control policy from simualtion to hardware by:

1. Improving the Robot Model by having:

    1. Accurate URDF by phsyically measuring many parameters
    2. Actuator Model 
    3. Latency (Commuication Delay)

2. Adding Noise to have Robust Controller:

    1. Randomising Dynamic Parameters such as Mass, Friction, etc...
    2. Random Perturbation 
    3. Using a compact observation space

3. Control of the learned policies

   Instead of learning the entire policy from scratch which will reult in lack of  controllability, they decompose the problem into two parts:

    1.  $\bar{a}(t)$ An open loop component that allows a user to provide reference trajectories
    2.  $\pi(o)$ feedback component that adjusts the leg poses on top of the reference based on the observations.


$$ a(t, o) =  \bar{a}(t) + \pi(o) $$


We can infer two importent things: 

  1. We need to have a very gool model to produce good determinstic baseline motion which are vital for safety using classical control.
  2. Fine tuning of the motion is more likeable to be better handle by learning based control.



<br>

#### Why we didn't do what google did ? ####

Well, getting accurate model is vital, it is not trivial task, for example google disassembled their robot and  weighed each component then, modeled their URDF. Our robot rougly costed around 1,200 USD was made out of hobby grade stuff and was very fragile to disassemble. Plus we didn't have accurate torque sensor to model the actuator. For a perspective MIT Cheetah uses ATI force sensor which is roughly the cost of our entire robot. Google had two controller, one high level controller TX2 and another low level motor driver. We had three Ubuntu to RPI3 (via MQTT Ethernet) and from RPI3 to Servo (via PWM multiplexer) which increased our latency and unpredictableness. All this factors made us to look for alternate approach. So we took the end-effector trajectory and used hand-crafted IK solver in Python to run it on our hardware.

<br>

#### Can it walk with hand-crafted tarjectory ? ####

It does. If you hand-craft a trajectory, let us say an ellipse, or circle, it will still walk. and adjust the phase difference to get different gaits.

<br>

#### Then what is the point of using DRL ? ####

Well, the hand crafted may or may not be optimal, but the generated gaits were certainly closer to optimal, given their similrance to other quadruped. 




<br>
<br>

## Stoch 2.0 ##

![Stoch 2.0 Leg-Testing](https://ajaygunalan.github.io/projects/asset/past/stoch/ezgif.com-crop.gif){width=30% height=25%}


As mentioned earlier stoch 1.0 was too fragile. It had lot of issues, so we wanted to have a roboust hardware, "Stoch 2.0". Soon more details would be updated on Stoch 2.0.







<br>
<br>
 
## The Team ##

Team Members: [Shounak Bhattachary](https://sites.google.com/view/shounakoffice/home), [Dhaivat Dholakiya](https://sites.google.com/view/dhaivatdh/home), [Abhik Singla](https://sites.google.com/view/abhiksingla/home) and [myself..!](https://ajaygunalan.github.io/)

Principal Investigators: [Shishir N. Y. Kolathaya](https://shishirny.github.io/),  [Prof. Bharadwaj Amrutur](http://chips.ece.iisc.ernet.in/index.php/Bharadwaj_Amrutur)

I would like to specially thank **Shishir**, & **Prof. Bharadwaj**, for giving me a wonderful oppourtinity to work in this project.


![Robotics Group at RBCCPS](https://ajaygunalan.github.io/projects/asset/past/stoch/team_hangout.jpg){width=30% height=25%}

![Stoch Team](https://ajaygunalan.github.io/projects/asset/past/stoch/stoch_team.jpg){width=30% height=25%}


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

