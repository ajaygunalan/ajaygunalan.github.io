% Experience-based Motion Planning (EBMP) 
% Ajay G

### What is Motion Planning ? ###

Given robot at a particular configuration, How to reach the desired configuration without colliding with environment and itself, and possibly minimisisng torque & time ?

It gives a path, or trajectory, which on executing, will reach the desired configuration.

<br>

#### Basic Terminology ####
 
Configuration

:  A particular position, and oreintation, of the robotic arm is known as configuration.

Configuration Space 

:  It is the space where each axis, corresponds to a particular joint angle of the robot. i.e., a N DOF robotic manipulator arm will have N dimensional Configuration Space. A particular configuration, will correspond to a point in C-space.

DOF

:  "N" Degrees of Freedom means the arm has N independent motions which can execute simultaneously.

Path

:  A set of way points which on executing will reach the desired configuration.

Trajectory

:  A path with timed component such as velocity and accleration.

<br>

#### Major Approaches ####

#. **Search Based**

   Discretize the C-space and solve as if finding a path in graph using algorithm such as [ A* ](https://en.wikipedia.org/wiki/A*_search_algorithm)

#. **Sampling Based**

   Sample(Pick a point) the C-space randomly and check whether a path exist, if it does, it solved.

   i. Single-query (Rapidly Random Exploring Tree)

   ii. Multi-query (Probablistic Road Map)


<br>
<br>

### What is Experience Based Motion Planning ? ###

Using the data form the trajectory of the past, to compute the new trajectory quicky rather than Planning From Stratch. (PFS)

<br>
<br>

### To Write On ###

#. How to store the data without redundancy ?
#. How to retrive & repair the past tarjectory much faster than time needed for PFS. ?

<br>
<br>
<br>


	


<!-- Saving Experiences Independently


Experience-Based Planning Approaches:

Categorization of Approaches

#. Methods for Generating Experience
#. Methods for Saving and Recalling 

Incremental Search for Dynamic Environments

#.  Classical Incremental Grid Search
#.   Sampling-based Incremental Search
   Genetic and Evolutionary Incremental Search
#.
Saving Experiences Independently

#.   Trajectory Libraries and Lookup Tables
#.   Recall: Using High-Dimensional Decriptors 
#.   Filtering: Choosing Which Experiences to Save
#.   Lightning Framework
#.   Generation: Learning by Demonstartion

Classic Grid Search Reuse 	

Probabilistic Roadmap Reuse 

Other Experience-Based Techniques

#.   Guididng Sampling Using Attractors
#.   Configuration Space Approximation of Constraints
#.   Dynamic Motion Primitive
	 	 -->




### References ###

<style>
h3, h4 {
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

dl dt{
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

/*body {
   background-color: #faebd7
}*/
</style>
