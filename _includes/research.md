<!-- <br>
<marquee behavior="scroll" direction="left">Update on Nov 16, 2018: For the next 4-5 month, I'll be focusing on Stoch 2.0 and GRE preparation, So there won't be any new updates.</marquee> -->


<!-- From where I got scrooling -->
<!-- https://www.quackit.com/html/codes/scrolling_text.cfm -->


<br>
1.[Current Projects](#current-projects)<br>
2.[Past Projects](#past-projects)<br>
<!-- 3.[Future Projects](#future-projects)<br> -->
<br>



<hr class="style-four" />

### **Current Projects**

 1. [Experience based Motion Planning](../projects/current/ebmp.html)

     Using experience (memory) to reduce the computation time is the basic principle. The elegance lies in making sure that the time to retrieve and repair a stored trajectory is less than the time to compute from scratch.

    ---


 2. [Funnel Library](../projects/current/funnel.html)

     Not matter how accurately we model the system and plan, there will be uncertainity and noise always. Funnel Library is way of taking uncertainity into account while planning and gives us the guarantee that the motion will be successful given that the uncertainity is within bound. If there is no bound on the uncertainity, then we can give probability on the successfulness of the motion.
   


<br>
<hr class="style-four" />

### **Past Projects**


 1. [Actuators for Robot](../projects/past/motor.html)

	 A robot is essentialy a bunch of motors coupled with varying load. I believe that without understanding the basic building block of robots which is the actuator (motor), it would be very hard to develop an algorithm which could outperform us. Thus, we will see how to influence various parameters of an actuator for best performance of our robot.

    ---

 2. [Stoch](../projects/past/stoch.html)

	 Stoch is a quadruped developed at RBCCPS. I was a small part of the ver 1.0 and was fully involved for the software development of second generation (Stoch 2.0). The goal of the project is to develope a versatile, all-terrain, legged robot.
    
    ---

 3. [Smart Intravenous Dripper](../projects/past/sid.html)

     Automation of IV-drippers to prevent backflow of blood and air blockage.

    ---

 4. [Asimov Robotics](../projects/past/asimov.html)

	 We developed a custom service robot for HDFC bank.


<br>
<hr class="style-four" />

<!-- ### **Future Projects**
 --><!-- 
1. [Control & Learning](../projects/future/control_and_learning.html)

    The work we did at RBCCPS (Stoch-1.0), lead to many open-ended questions such as how to learn a different task in a few samples and how to control and combine different behaviors such as turning, climbing stairs, reacting to external disturbance, etc. Thus the goal is to explore and understand various methods such as Reactive Control-->





<!-- 2. [Funnel Library] -->

<br>
<br>
<br>

<style>
h3 {
      text-align: left;
}

ol li {
	text-align: left; 
}

ol {
    margin-left: 0;
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

/* selected link */
/*a:active {
    color: blue;
} */


hr.style-four {
padding: 0;
border: none;
border-top: medium double #333;
color: #333;
text-align: center;
}
/*hr.style-four:after {
display: inline-block;
position: relative;
top: -0.7em;
font-size: 1.5em;
padding: 0 0.25em;
background: white;
}*/

hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

</style>