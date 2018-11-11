% Math for Robotics
% Ajay G 

Disclaimer: The goal is to cover all the relevant concepts in a short, and coherent, way so that the user can explore further. Not on mathematical rigorousness.

<br>

#### Space ####

  As under-graduate engineer, the space we use the most are cartesian space, cylindrical and maybe even sphereical. So, we think those spaces are space. It make perfect sense to us(enegineers), but not to Mathematician. In-fact what we have been using are special subset of space. They think space in a more abstract way and they generalise to the extant that in certain a space we can't measure the distance! e.x.,topological space. A space is set with some structure(constraint) imposed.

  <br>


  <!-- #### Homeomorphic and Diffeomorphic #### -->

  The following terms will be used while defining the constraints on various space:

  <!--![Mapping, Source[howie_choset]](https://ajaygunalan.github.io/projects/asset/current/math_for_robotics/diffeo_homeo.png)  -->

#. Surjective (onto)

   If each element of the codomain(T) is mapped to by at least one element of the domain(S).

#. Injective (one-one)

   If each element of the codomain(T) is mapped to by at most one element of the domain(S).

#. Bijective

   Map that are both injective and bijective.

#. Smoothness

   A function with continuous derivatives up to a certain order, say k. Then it is $C^{k}$ smooth. If it exist for all positive integers, then is $C^{\infty}$ or smooth.

#. Homeomorrphic

   A continuous bijective map with contiuous inverse

#. Diffeomorphic

   A continuous bijective map with smooth inverse
  
#. Neighbourhood of a point

   A set of points containing that point where one can move some amount in any direction away from that point without leaving the set.


   <!--![Mapping, Source[wiki]](https://ajaygunalan.github.io/projects/asset/current/math_for_robotics/neighbhourhood.png)  -->

#. Connectedness

   A space is connected, if every two point can be connected by a path. 
   
   A space is simply-connected, if any two paths connecting the same endpoints can be continuously deformed into other. In other words every loop can be contracted to a point. 

#. Compactness

   A space is compact, if we find a finite number of open intervals(open subcover) so that, every element  of the space is in at least one of them. Inutuitively it has to be closed and bounded.

   <!-- [The interval $A = (- \infty, −2]$ is not compact because it is not bounded. The interval $C = (2, 4)$ is not compact because it is not closed. The interval $B = [0, 1]$ is compact because it is both closed and bounded. Source[refer_wiki]](https://ajaygunalan.github.io/projects/asset/current/math_for_robotics/compact.png) -->



<br>
 
#### Topological Space #### 

 Let $S$ be a set. A set $O$ of subset $S$ is called topology(and the elements of $O$ are called open set), if:


  #. Any union of any collection of a open set is a open set.
  #. if $U_1, U_2 \in O,$ then $U_1 \cap U_2 \in O$
  #. $\emptyset \in S$ and $S \in O$


  The pair $(S, O)$ is called a topological space. When there is no ambiguity about the topology, $S$ alone is called the topological space. Every set $S \setminus U$, where $U\in O$, is called a closed set.

  <!-- ![Example: The blue circle represents the set of points (x, y) satisfying x2 + y2 = r2. The red disk represents the set of points (x, y) satisfying x2 + y2 < r2. The red set is an open set, the blue set is its boundary set, and the union of the red and blue sets is a closed set., Source[wiki]](https://ajaygunalan.github.io/projects/asset/current/math_for_robotics/set.png) -->

  It Formalize the relation of "being near" a point. Qualitative: does not quanity how near.It is a set with the least structure necessary to define the concepts of nearness and continuity. A donut is topologically the same as cup of coffe.

  <!-- ![Topological equivalence, Source[GMS_news_online]](https://ajaygunalan.github.io/projects/asset/current/math_for_robotics/coffe_mug.jpeg) -->

 
 <br>

#### Metric space ####

  A metric space is a set X together with a function d (called a metric or "distance function") which assigns a real number d(x, y) to every pair x, y belongs X satisfying the properties (or axioms):

  #. $d(x, y) \geq 0$ & $d(x, y) = 0 \iff x = y$,
  #. $d(x, y) = d(y, x)$,
  #. $d(x, y) + d(y, z) \geq d(x, z)$

<br>

#### Manifold ####

  A topological space $M$ is a manifold (resp. a smooth maifold) if every point $x \in M$ has an open neighborhood homeomorphic (resp. diffeomorphic) to an open ball of $R^m$, for some $m$ independent of $x$. $m$ is the dimesnion of the manifold. [refer_jean_claude]


<br>

#### Lie Bracket ####

<br>

#### Gradient Descent ####

<br>


<br>

#### To Do ####

  Not all configuration spaces are manifold. 

<br>

#### References ####

<br>
<br>
<br>
































































<style>
h2 {
      text-align: center;
}

h3, h4  {
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