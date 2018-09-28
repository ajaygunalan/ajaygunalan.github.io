% Machine Learning Control
% Ajay G

# Hmailtonian Jacobi Bellman Equation #

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

http://www.damtp.cam.ac.uk/user/tong/dynamics.htm






## This is proper documenation ##



# Refernces #

<style>
h2
{
      text-align: left;
}
</style>

<style>
h4
{
      text-align: left;
}
</style>
