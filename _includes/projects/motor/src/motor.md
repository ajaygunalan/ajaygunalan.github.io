% Design, Dynamics, Drive of BLDC Motor 
% Ajay G 
% August 24, 2018 

## Why BLDC ? ##

  High energy efficiency
  High Power to Weight ratio
  Quick dynamic respone

## Design ##

#### Basic Terminology ####

![Stator & Rotor, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/motor_1.png){width=30% height=25%}


![Tooth & Slot, Source:[@colton_design_2010]](https://ajaygunalan.github.io/projects/asset/motor/motor_2.png){width=30% height=25%}

#### Air Gap ####
#### Slot ####
#### Winding Configuration ####
  They have three phase windings and can be connected to each other in wye or delta configuration. Wye has higher torque (theoretically torque constant is greater by a factor $\sqrt{3}$ [@kalouche_design_2016, p. 25]) because in the wye configuration, at any time one of phase is open and other two-phase are in series thus equal current flows through them whereas in delta it gets divided into two phases. Thus more current in each phase causes more torque, one will push and another phase will pull in the wye configuration.

## Dynamics ##
## Drive ##

Simon has done the gr8 job. what he does is actually amazing. [@kalouche_design_2016]
This is proper documentation

His work was based on condition.[@colton_design_2010]

$$\frac{\partial \vec{u}}{\partial t} + (\vec{u} \cdot \nabla) \vec{u} = - \frac{1}{\rho} \nabla p + \nabla \sigma + \vec{f}$$

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{u}) = 0$$

Testing whether it works..!

## References ##


<style>
h2
{
      text-align: left;
}
</style>
