% Fusion of Control and Learning
% Ajay G
% Sep 19, 2018

# Design of BLDC #

$$ v(s) = \mathbb E [R_{t+1} + \gamma(R_{t+2} + \gamma R_{t+3}) | S_t = s] $$
$$ v(s) = \mathbb E [R_{t+1} + \gamma G_{t+1}| S_t = s] $$

$$ \mathbb E(a + b) = \mathbb E(a) + \mathbb E(b) $$
$$ \mathbb E(A) =  \mathbb E(\mathbb E(A|B) ) =  \sum_{b_i} p(B = b_{i})\mathbb E(A|b_{i}) $$

$$ v(s) = \mathbb E [R_{t+1} | S_t = s] + \mathbb E [\gamma G_{t+1}| S_t = s] $$
$$ v(s) = \mathbb E [R_{t+1} | S_t = s] + \gamma \mathbb E[G_{t+1}| S_t = s] $$

$$ v(s) = \mathbb E[G_t  |  S_t = s] $$

$$ v(s) = \mathbb E [R_{t+1} | S_t = s] + \mathbb E [\gamma v(S_{t+1}) | S_t = s] $$

