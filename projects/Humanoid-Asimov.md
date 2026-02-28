---
title: "Humanoid"
summary: "Developed a service robot at Asimov Robotics for a private bank in India, involving hardware integration with Dynamixel servos and Hokuyo laser, and software architecture using ROS and smach, focusing on tasks like gestures, navigation, and sensor integration."
date: 2017-12-01
---



The task was to develop a [service robot](https://www.youtube.com/watch?v=5vjY1c8N1rk) at [Asimov Robotics](https://www.asimovrobotics.com/) for private bank in India.

  ![](attachments/asimov.jpg)

The hardware was built by using [Dynamixel servos](http://www.robotis.us/dynamixel/), [Hokuyo laser](https://www.hokuyo-aut.jp/search/index.php?cate01=1), and [Intel-NUC](https://www.intel.com/content/www/us/en/products/boards-kits/nuc.html). The software was architectured using ROS, [smach](http://wiki.ros.org/smach). Users can interact with the robot through the screen at the front and based upon the user query, the robot would do a particular task. The task consists of some gestures and navigation. Gestures were performed by simple record and playback, while navigation was done using [amcl](http://wiki.ros.org/amcl) package. During my six month stay, the various tasks I did are:



-   Gravity compensation for assistive mode (didn't work well, was **oscillating** a lot..!).
-   Position and Velocity control of DC motor as a replacement for dynamixel servos in the base.
-   TCP/IP communication between ROS and non-ROS module.
-   To perform basic motion planning simulation in Gazebo using ROS and MoveIt.
-   Sensor Integration
    -   _IMU sensor with ROS for Navigation._
    -   _Tactile sensor(FSR) for Human-Robot Interaction._
    -   _Ultrasonic sensor with ROS for Obstacle avoidance._



It wasn't a huge company. But being in a hardware start-up taught me more than I could ever possibly imagine. I was fortunate to get my hands around hardware and was able to see how real products were being built and how they approached a real-world problem. Most importantly my coding and debugging skills improved a lot, thanks to my mentors [Gokul Narayanan](https://www.linkedin.com/in/gokul-narayanan/) and [Rajashekaran T](https://www.linkedin.com/in/rajashekaran-t-071ab49b/) and also would like to thank [Jayakrishnan T](https://www.linkedin.com/in/jayakrishnan-t-61647125/)(CEO) and [Anto John](https://www.linkedin.com/in/antojohn/)(CMO) for giving me a wonderful opportunity in ASIMOV Robotics Pvt. Ltd, Kochi.
