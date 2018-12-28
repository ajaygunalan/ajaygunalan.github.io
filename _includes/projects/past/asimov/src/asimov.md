% ASIMOV Robotics Pvt. Ltd, Kochi
% Ajay G

<br>

<!-- Disclaimer: This about my Internship experience at ASIMOV Robotics Pvt. Ltd, Kochi, India and not about Hondas' Asimo robot. -->

<br>

![](https://ajaygunalan.github.io/projects/asset/past/asimov/saya.PNG){width=30% height=60% .saya_pic}
![](https://ajaygunalan.github.io/projects/asset/past/asimov/saya_robot_at_asimov_robotics.jpg){width=30% height=60% .saya_pic}
\begin{figure}[!h]
\caption{The Service robot developed at Asimov Robotics. }
\end{figure}


<br>
<br>


#### Projects at Asimov Robotics ####

The task was to develop a [service robot](https://www.youtube.com/watch?v=5vjY1c8N1rk) as shown in the above figure. The hardware was built by using [Dynamixel servos](http://www.robotis.us/dynamixel/), [Hokuyo laser](https://www.hokuyo-aut.jp/search/index.php?cate01=1), and [Intel-NUC](https://www.intel.com/content/www/us/en/products/boards-kits/nuc.html). The software was architectured using ROS [smach](http://wiki.ros.org/smach). Users can interact with the robot through the screen at the front and based upon the user query, the robot would do a particular task. The task consists of some gestures and navigation. Gestures were performed by simple record and playback, while navigation was done using [amcl](http://wiki.ros.org/amcl) package. During my six month stay, the various tasks I did are:


<br>

* Gravity compensation for assistive mode (didn't work well, was **oscillating** a lot..!).
* Position and  Velocity control of DC motor as a replacement for dynamixel servos in the base. 
* TCP/IP communication between ROS and non-ROS module.
* To perform basic motion planning simulation in Gazebo using ROS and MoveIt.
* Sensor Integration
  + *IMU sensor with ROS for Navigation.*
  + *Tactile sensor(FSR) for Human-Robot Interaction.*
  + *Ultrasonic sensor with ROS for Obstacle avoidance.*

<br>

<!-- #### The Best Place to Work #### -->

<p style="text-align: justify;">It wasn't a huge company. But being in a hardware start-up taught me more than I could ever possibly imagine. I was fortunate to get my hands around hardware and was able to see how real products were being built and how they approached a real-world problem. Most importantly my coding and debugging skills improved a lot, thanks to my mentors [Gokul Narayanan](https://www.linkedin.com/in/gokul-narayanan/) and [Rajashekaran T](https://www.linkedin.com/in/rajashekaran-t-071ab49b/) and also would like to thank [Jayakrishnan T](https://www.linkedin.com/in/jayakrishnan-t-61647125/)(CEO) and [Anto John](https://www.linkedin.com/in/antojohn/)(CMO) for giving me a wonderful opportunity in ASIMOV Robotics Pvt. Ltd, Kochi. </p>



<br>
<br>



 



<br>
<br>
<br>



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

p img {
  align-content: center;
}

.author {
    text-align: center;

}

/*.saya_pic {
    
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}*/

table {
    margin-left:auto; 
    margin-right:auto;
    background: transparent;

  }

table caption {
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

h3 {
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

ul li {
  text-align: left;
}

/*.saya {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    height: 30px; 
}

#saya_me{
    text-align:center;
*/


</style>