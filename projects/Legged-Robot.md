---
title: Legged Robot
summary: "Developed a robust, all-terrain quadruped robot using carbon fiber tubes, 3D printed components, and servo-motors, achieving various gaits through Proximal Policy Optimization in simulation and hardware deployment, inspired by Google's agile locomotion research."
date: 2019-06-01
---

![](attachments/stoch.gif)


### Problem Statement
The goal was to develop a robust, all terrain, legged robot.


### Solution
| Hardware         | Description                                    |
| ---------------- | ---------------------------------------------- |
| Materials        | Carbon fiber (CF) tubes & 3D printed (PLA)   \ |
| Servo-motors     | Kondo-2350HV & Robokits Ultra Torque: RKI-1203 |
| IMU              | 9 axis sparkfun MPU 9150                       |
| Encoders         | Magnetic Encoders, Bourns EMS22a               |
| Power Supply     | Li-Po batteries                                |
|                  | 11.1V(3s)×2200mAh for hip motors               |
|                  | 7.4V(2s)×3000mAh for knee motors               |
| PWM multiplexer  | Adafruit 16-Channel 12-bit: PCA968             |
| Mass             | 3.0 Kg                                         |
| Total Leg Length |       230 mm                                            |


The quadruped performed a variety of gaits such as walks, bounds, trots, etc...as show in this [video](https://www.youtube.com/watch?v=swcStUm0Nuk&feature=youtu.be) by using on-policy, model-free DRL algorithm based on actor-critic learning framework called Proximal Policy Optimisation (PPO) to generate the gaits in the simulation(PyBullet). It took 30 Million samples (5-7 hours) to learn a particular gait in the simulation. To transfer it on the hardware, we took the end-effector trajectory form simulation and did the principal component analysis to generate different gaits and we deployed on the hardware. You can find more info in this [paper](https://arxiv.org/abs/1810.03842) (my name is in the acknowledgment).



### Next Steps

1. How to learn different tasks with **least samples**? (Model-based RL, Imitation Learning?)
2. How to **control & combine different behavior** such as turning, climbing stairs, reacting to external disturbance? (Funnel Libraries, & Reactive Control ?)


### Inspiration

The project was initially motivated by Googles' work on [Sim-to-Real: Learning Agile Locomotion For
Quadruped Robots](https://arxiv.org/abs/1804.10332). The essence of the paper is to improve the transferability from learned control policy from simulation to hardware.


### Why we didn't do what Google did?

Well, getting accurate model is vital, it is not a trivial task, for example, google disassembled their robot and  weighed each component then, modeled their URDF. Our robot roughly cost around 1,200 USD was made out of hobby grade stuff and was very fragile to disassemble. Plus we didn't have accurate torque sensor to model the actuator. For a perspective, MIT Cheetah uses ATI force sensor which is roughly the cost of our entire robot. Google had two controllers, one high-level controller TX2 and another low-level motor driver. We had three, Ubuntu to RPI3 (via MQTT Ethernet) and from RPI3 to Servo (via PWM multiplexer) which increased our latency and unpredictableness. All these factors made us look for an alternate approach. So we took the end-effector trajectory and used hand-crafted IK solver in Python to run it on our hardware.



### Version 2.0

![](attachments/stoch2leg.gif)




## The Team

Team Members: [Shounak Bhattachary](https://sites.google.com/view/shounakoffice/home), [Dhaivat Dholakiya](https://sites.google.com/view/dhaivatdh/home), [Abhik Singla](https://sites.google.com/view/abhiksingla/home) and [myself](https://ajaygunalan.github.io/). Principal Investigators: [Dr. Shishir N. Y. Kolathaya](https://shishirny.github.io/),  [Prof. Bharadwaj Amrutur](http://www.cense.iisc.ac.in/bharadwaj-amrutur). I would like to specially thank **Shishir** and **Prof. Bharadwaj**, for giving me a wonderful oppourtinity to work in this project.


![](attachments/stcohTeam.jpg)
