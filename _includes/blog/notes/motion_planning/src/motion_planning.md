% Motion Planning  
% Ajay G


<br>
<br>

#### Introduction ####

  Motion Planning address the question on how to reach the desired configuration without colliding the environment and itself, form given start configuration. It gives a trajectory, which on executing, will reach the desired configuration. Major approaches to motion planning are:

  #. Search Based (Discretization)
  #. Sampling Based
  #. Potential Function

Basic Terminology
 
#. Configuration

   A particular position, and oreintation, of the robotic arm is known as configuration.

#. Configuration Space 

   It is the space where each axis, corresponds to a particular joint angle of the robot. i.e., a N DOF robotic manipulator arm will have N dimensional Configuration Space. A particular configuration, will correspond to a point in C-space. Mostly it will be  topological space.

#. DOF

   "N" Degrees of Freedom means the arm has N independent motions which can execute simultaneously.

#. Path

   A set of way points which on executing will reach the desired configuration.

#. Trajectory

   A path with timed component such as velocity and accleration.

#. Map

   A data containing the information about the environment and robot. It can be represented by three ways: topological, geometric, and grids.

   <!-- image -->

<br>
<br>

#### Search Based ####

   Discretize the C-space and solve as if finding a path in a graph. They are very sensitive to dimensionality of state space. Formulation of the problem:

   1. State Space

      They are usually grids. The choice of grid is crucial to performance and accuracy. In real world it is continous, here we have approximated.

   2. Action

      Moving to a neighboring cell. Actions are also discretized.

   3. Successor Function

      A cell's neighbor. These are largely determined by the action set. Successors may not be known a priori. i.e., you have to try each action in your action set to see which cell you end in

   4. Action Cost

      We try to optimize the cost. Minimum path, smooothnes, etc. Sometimes we use a linear combination of various cost.

   There are several class of algorithms such as Breadth-First, Depth, Dijkstra's, Best-First, A* and its variant. Their major advantage is:

   #. generality
   #. cost minimization.
   #. rigorous guarantees on completeness and quality of solutions.

   However their main disadvantage is:

   #. Not suitable for high-dimensional motion planning problem.
   #. Not suitable when control set can't be easily discretized. 
   #. No uncertainty is taken into account.
   #. Discrete search run-time and memory requirements are very sensitive to  branching factor. 
   #. Number of successors depend on dimension

   Note: Recent research work are wokring to cover and solve many of these issues and they might have been improved.



<br>
<br>


#### Sampling Based ####

   Sampling based method overcomes many of the problems faced by search based method by weakeneing the requirements on the optimality and completness. 

   Ideal                 Practical in High Dimension    
   -------               ------ 
   Complete              Probabilistically Complete   
   Optimal               Feasible (recent methods show asymptotic optimality) 

   Probabilistic completeness: A path planner is probabilistically complete if, given a solvable problem, the probability that the planner solves the problem goes to 1 as time goes to infinity. Feasibility: Path obeys all constraints (usually obstacles). A feasible path can be optimized locally after it is found.

   The main idea is to pick a point in the C-space randomly and check whether a path exist, if it does, it is solved. Major sampling based methods are:

   #. Rapidly Random Exploring Tree 

   #. Probablistic Road Map

   #. Randomized Path Planner

   <br>

###### Rapidly Random Exploring Tree ######
 
   Searches for a path from the initial configuration to the goal configuration by expanding a search tree.
   For each step, it determines a target configuration and expands the tree towards it.
   The target can either be a random configuration or the goal configuration itself, depending upon the probability value defined by the user.
   During expanding, the algorithm only needs to verify whether each step is collision free but does not need to avoid obstacles. 

  <br>

###### Probablistic Road Map ######

   Roadmap $R = (N,E)$  is class of topological map. It is an undirected graph of one dimensional curves in free C-spcae. The nodes $N$ are a set of configuration of the robot. The edges $E$ corresponds to (simple) path and edge (a, b) corresposnds to a feasible path connecting the configurations of a and b.  Some of the major types of roadmap are: visibility maps, deformation retracts, retract-like structure, piecewise retracts and silhouettes. It is called Probabilistic Roadmap (PRM) beacause it is constructed by repeadtedly generating random(probabilistically) C-space free configuration of the robot and connecting these configuration using simple, fast, local planner. Then $R$ postprocessed(expansion phase) to improve the connectivity. This entire process is known as the **learning phase**.

   The final phase is the **query**. In which we ask for a path between two free configuration of the robot. First, It attempts to find a path from the start and goal configurations to the nodes of the roadmap. Next, a graph search is done to find the sequence of edges connecting these nodes on the roadmap. The learning and the query phase does not have to executed sequentially. Instead they can be interwoven. It is known as *multi-query* because if the robot configuration and enivronment didn't change much, we can query multiple number of times to find a new path from a single roadmap.

   Pros of sampling based method:

   #. Find feasible collision-free paths very fast.
   #. Computationally efficient than Search based Algorithm
   #. Scalable to high dimension

   Cons of sampling based method:
  
   #. Typically produce jerky / redundant motion.
   #. Paths require post-processing, smoothing, optimization.
   #. Completeness and optimality are compromised.
   #. Probability of sampling an area depends on the area’s size. i.e., hard to sample narrow passages.

<br>

###### Randomized Path Planner ######
  
  Developed by Barraquand and Latombe in 1991 at Stanford. Main idea: Follow a potential function, occasionally introduce random motion. Potential field biases search toward goal. Random motion avoids getting stuck in local minima.

  Advantage: Doesn’t get stuck in local minima.

  Disadvantage: define potemtial field, decide when to apply random motion, how much random motion to apply.

<br>
<br>


#### Potential Function ####


#### References ####





<style>


h2, h3, h4, h5, h6  {
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

table {
    margin-left:auto; 
    margin-right:auto;
    background: transparent;

  }

table caption {
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


</style>