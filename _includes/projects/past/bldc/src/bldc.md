% Open-Source BLDC-Drive with CAN communication
% Ajay G

## Content ##


* [Why Custom BLDC driver?](#why-custom-bldc-driver?)
* [What is a motor driver?](#what-is-a-motor-driver)
* [Skills required to build a  BLDC driver]
* [Real-Time Embedded System Programming](#real-time-embedded-system-programming)
  + [Introduction](#introduction)
    - [Embedded Programming](#embedded-programming)
    - [Real-Time System](#real-time-system)
    - [Why have a GPOS causing unpredictableness in execution time?](#why-have-a-gpos-causing-unpredictableness-in-execution-time)
    - [Then, why we need a Real-Time System?](#then-why-we-need-a-real-time-system)
  + [Hello World using ChibiOS]()

* [Knowledge on how motors work and their limitations](#knowledge-on-how-motors-work-and-their-limitations)
* [Familiarity with Communication Protocol](#familiarity-with-communication-protocol)






<br>

## Why Custom BLDC driver? ##

 The article, "Actuators for dexterous and agile robots" would have explained the need for 4Q control motor driver. Here let us look at how to build a custom BLDC motor driver. The reasons to make a BLDC driver compared to others are energy-efficiency, scalable(BLDC driver can run other types of motors too), cheaper compared to commercially available BLDC drivers and in case if you want to make 8-phase BLDC motor for having a minimun torque ripple, its best you start with a 3-phase BLDC motor and it's driver.

 <br>

## What is a motor driver? ##

 A motor driver is a circuit while applies the required voltage on the motor based upon the user input. The user input can be a position, velocity, current, or any combinations of them. Mostly, motor driver consists of three main parts: microcontroller, gate-driver, inverter. Let us look into each one of them starting from the inverter. The inverter is nothing but a bunch of transistors (MOSFET) arranged like shown in the following figure. 


<!-- ![BLDC Driver, Image courtesy of Nidec.com](https://ajaygunalan.github.io/projects/asset/past/bldc/bldc_driver.png) -->


 By switching these transistors at an appropriate time, you can convert the supplied DC voltage into Variable AC voltage(thus inverter) required by the BLDC motor. The transistors in the inverters have to be switched ON/OFF by the microcontroller. But, the transistors are on the high-power side, and the microcontroller is on the low-power side. Thus, we need protection between them. That’s why we use a GATE-driver which drives (switches) the transistors at the high-power region based upon the signals from the microcontroller at lower power. This ensures safety. The microcontroller receives the input from the user through some communication buses like UART, CAN, EtherCAT. Then, based upon the algorithms like (FOC, sensorless, etc.), the microcontroller gives appropriate signals to the gate-driver to switch on the corresponding MOSEFTs which in turn powers the BLDC motor.  

 <br>

## Skills required to build a BLDC driver ##


 
  <ul style="width:50%; float:left;">
    <li>Real-Time Embedded System Programming</li>
    <li>Knowledge on how motors work and their limitations</li>
    <li>Familiarity with Communication Protocol</li>
  </ul>

  <ul style="width:50%; float:left;">
    <li>Power Electronics</li>
    <li>EMI/EMC check</li>
    <li>PCB design</li>
  </ul>

  Out of these six skills, I have learned the first three to a certain level. In this article, I’m going to explain about a few critical concepts involved in the some of the topics. Each one of them requires considerable time and effort to master them. Mastering all of them is a possibility, but it would demand a significant amount of time, energy and money. 

  <br>

<!-- #### :construction: Work in Progress :no_entry_sign: #### -->

## Real-Time Embedded System Programming ##

<br>

#### Introduction ####


 

###### Embedded Programming ######

 When you learn to programme (in 21st century), the first exercise would be Hello World. You would probably think of computer as a black box and after some practice, would generalize that programming means using the appropriate functions with right arguments and using the returns at the right place. It's true for most of the High-Level Programming Languages, not for Embedded Programming. In Embedded, everything is about writing and reading data from a register. A register is an expensive memory block, closest to CPU, resulting in low access time for the CPU.



 <br>


###### Real-Time System ######

 Some think that real-time means super-fast execution such that everything happens in an instance with no delay. This is far from the truth. Real-Time means guaranteed implementation of the programme within a specified period. To achieve it there should be no variable delay in the execution of the programme which implies avoiding certain paradigms such as scheduler in a general purpose operating system like Windows, Linux (Ubuntu) and Macintosh which causes unpredictablness in execution time. A trivial example would be to check the execution time for the classic Hello World example. Run the following code snippet. (Make sure you that matplot package is installed) 

 <br>


```
#!/usr/bin/python
import time
import matplotlib.pyplot as plt

for i in range(10000):
  begin = time.time()
  print ("Hello World")
  delay = time.time() -begin
  delay =  delay*1000 # sec to milli sec
  print (delay)
  plt.scatter (i, delay)
  plt.pause (0.000000000001)
  plt.xlabel('Iterations') 
  plt.ylabel('Delay in Milliseconds')
  plt.title('Unpredictablness of exact execution time') 
  plt.ylim(0, 0.1)

plt.show()

```
 
<br>

You would get a output like shown below

![Unpredictableness of exact execution time](https://ajaygunalan.github.io/projects/asset/past/bldc/delay.png)

The test was on conducted my laptop with the following CPU and 8 GB of system ram.

<br>

```
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    2
Core(s) per socket:    2
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 61
Model name:            Intel(R) Core(TM) i7-5500U CPU @ 2.40GHz
Stepping:              4
CPU MHz:               1078.814
CPU max MHz:           3000.0000
CPU min MHz:           500.0000
BogoMIPS:              4789.18
Virtualization:        VT-x
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              4096K
NUMA node0 CPU(s):     0-3
```

<br>

###### Why have a GPOS causing unpredictableness in execution time? ######

The GPOS(General Purpose Operating System) have been designed to maximize the through-output of the process executed on the machine. Whether the task is executed within a fixed time limit is not of prime concern here, and that's why the scheduler of a GPOS  focuses on increasing the number of processes executed by the CPU.

<br>


###### Then, why we need a Real-Time System? ######

When it comes to a General Purpose Computers, having an OS to increase the through-output is good since the average user only cares about the over-efficacy. However, In robotics, We have two major requirements for  a real-time system. First, BLDC driver must work in real-time for ensuring appropriate switching of transistors without any variance in timing. Secondly, for reading sensor values and writing actuator values because control, and planning, algorithms require the value within a certain delay. The latter case may consist of a Single Board Computer (like RPI3) with RTOS like xenomai. The former case may consist of a microcontroller using an Embedded RTOS like ChibiOS.

<br>

#### Hello World using ChibiOS ####

<br>
 
## Knowledge on how motors work and their limitations ##

It's a vast topic covering various aspects of motors and their dynamics; I tried to cover the basics over [here](https://ajaygunalan.github.io/blog/notes/motor/motor.html) 

<br>

## Familiarity with Communication Protocol ##

Motor driver must communicate with the main controller board for sending and receiving data. Communication can be either serial or parallel. [Serial](https://learn.sparkfun.com/tutorials/serial-communication/serial-intro) can be further classified as synchronous or asynchronous. Synchronous serial includes [SPI](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all), [I2C](https://learn.sparkfun.com/tutorials/i2c/all). Asynchronous
includes two physical hardware pins for transmitting and receiving, combined they are known as UART. UART supports a wide variety of protocol such as RS-232, RS-422, RS-485 and [ICS](https://kondo-robot.com/w/wp-content/uploads/ICS3_5SoftwareManual_V1English.pdf).


<br>

What is CAN?

Controller Area Network is an Asynchronous Serial Bus. It was invented by Robert Bosch to **reduce the wiring** associated in an automobile and to be more **robust to noise**. According to OSI seven layers, CAN was defined only for *Physical Layer* and *Data Link Layer* by Bosch. This meant we could build a custom protocol on top of it or use some existing layers such as OpenCAN, DeviceNet.

In OpenCAN there are things like  PDO, SDO, Heart Beat, NMT, Arbitration, etc, which is a vast topic.  In case, you are interested have a look at the following book. You can get it form [libgen.io](http://libgen.io/)

```
1.  Embedded Networking with CAN and CANopen
    by Olaf Pfeiffer, Andrew Ayre and Christian Keydel

2.  Understanding and Using the Controller Area Network Communication Protocol: Theory and Practice
    by Marco Di Natale, Haibo Zeng, Paolo Giusto, Arkadeb Ghosal
```
CAN for roboticist,

I think, unless you are developeing a piece of code for one of the layers, You could just learn to read and write data from CAN Bus using a fully developed stack such as [SocketCAN](https://github.com/linux-can/can-utils). Of course, It works with linux only, I can't imagine doing robotics in windows!


<br>

![](https://ajaygunalan.github.io/projects/asset/past/bldc/20180808_170030.jpg)

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

h3, h6 {
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