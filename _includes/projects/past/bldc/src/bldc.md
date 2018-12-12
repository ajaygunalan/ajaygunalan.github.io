% BLDC-Drive with CAN communication
% Ajay G

## Content ##


* [Introduction](#introduction)
* [What is a motor driver?](#what-is-a-motor-driver)
* [Skills required to build a  BLDC driver]




<br>

#### Introduction ####

 

 The article, "Actuators for dexterous and agile robots" would have explained the need for 4Q control motor driver. Here let us look at how to build a custom BLDC motor driver. The reasons to make a BLDC driver compared to others are energy-efficiency, scalable(BLDC driver can run other types of motors too), cheaper compared to commercially available BLDC drivers and in case if you want to make 8-phase BLDC motor, its best you start with a 3-phase BLDC driver.

 <br>

#### What is a motor driver? ####

 A motor driver is a circuit while applies the required voltage on the motor based upon the user input. The user input can be a position, velocity, current, or any combinations of them. Mostly, motor driver consists of three main parts: microcontroller, gate-driver, inverter. Let us look into each one of them starting from the inverter. The inverter is nothing but a bunch of transistors (MOSFET) arranged like shown in the following figure. By switching these transistors at an appropriate time, you can convert the DC voltage into Variable AC voltage(thus inverter) required by the BLDC motor. The transistors in the inverters have to be switched ON/OFF by the microcontroller. But, the transistors are on the high-power side, and the microcontroller is on the low-power side. Thus, we need protection between them. That’s why we use a GATE-driver which drives (switches) the transistors at the high-power region based upon the signals from the microcontroller at lower power. This ensures safety. The microcontroller receives the input from the user through some communication buses like UART, CAN, EtherCAT. Then, based upon the algorithms like (FOC, sensorless, etc.), the microcontroller gives appropriate signals to the gate-driver to switch on the corresponding MOSEFTs which in turn powers the BLDC motor.  

 <br>

#### Skills required to build a BLDC driver ####

 * PCB design
 * EMI/EMC check
 * Power Electronics
 * Real-Time Embedded System Programming
 * Knowledge on how motors work and their limitations 
 * Familiarity with Communication Protocol

  Out of these six skills, I have learned the last four to a certain basic level. In this article, I’m going to explain about a few critical concepts involved in the previous four topics. Each one of them requires considerable time and effort to master them. Mastering all of them is a possibility, but it would demand a significant amount of time, energy and money. 

  <br>

#### Power Electronics ####

#### Real-Time Embedded System Programming ####

#### Knowledge on how motors work and their limitations ####

#### Familiarity with Communication Protocool ####







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