% Control & Learning
% Ajay G



### Introduction ###

In RBCCPS, we used on-policy, model-free DRL algorithm based on actor-critic learning framework called Proximal Policy Optimisation (PPO) to generate the gaits in the simulation(PyBullet). It took 30 Million samples (5-7 hours) to learn a particular gait in the simulation. To transfer it on the hardware we took the end-effector tarjectory form simulation and did principal component analysis to generate different gaits and we deployed on the hardware.

Result ?

The quadruped performed variety of gaits such as walks, bounds, trots, etc... but it lead to two improtant question ?

   1. How to learn different task with least samples ?

	  Model based RL, & Imitation Leanring.

   2. How to control & combine different behaviour such as turning, climbing stairs, reacting to external disturbance ?

	  Funnel Libraries, & Reactive Control.

Our goal here would be to get a intution of the above topics by explaining few relevalant latest resercah paper on the above topic.


<br>
<br>

### Strategy to be followed ###

Instead of delving right into the research topic, I would like to get the basic fundamental, thus I'm gonna do the following courses,

#. Finish Math for Robotics
#. ANN course by Brilliant
#. RL course by David Silver
#. Underactauted Robotics by Russ Tedrake
 

 After that, I'll make intution of latest relavant research topics.

 <br>
 <br>
 <br>


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

/*body {
   background-color: #faebd7
}*/
</style>
































<!-- ### Hmailtonian Jacobi Bellman Equation ###

From [@landau_mechanics_2007, p. 147] we have, 

$$ \frac{\partial S}{\partial t}  + H(q, p,t ) = 0 $$

where $S(q, t)$ is the Action and replacing momenta $p$ with $\frac{\partial S}{\partial t}$, you get the Hmailton-Jacobi equation

$$ \frac{\partial S}{\partial t}  + H(q, \frac{\partial S}{\partial t},t ) = 0 $$

So now what is $S$ and what is $H$ ?

$$ S = \int_{t_1}^{t_2} Ldt \implies \frac{dS}{dt} = L$$

$L$ is the non-relativistic Lagrangian for a system of particles and It can be defined by $$L = T -V $$,

where $T$ is the total kinetic energy and $V$ is the total potential energy of the system. 

$$ \frac{dS(q, t)}{dt} =  \frac{\partial S}{\partial t} + \frac{\partial S}{\partial q} \dot{q}$$

$$ 	L =  \frac{\partial S}{\partial t} + \frac{\partial S}{\partial q} \dot{q}$$


http://math.ucr.edu/home/baez/classical/

http://www.damtp.cam.ac.uk/user/tong/dynamics.htm -->



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
/*}*/

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
