
<h1 class="rsection">Publications</h1>

<ul class="pubs">
    <li>Blake Wulfe, Mykel J. Kochenderfer, S. Chintakindi, S. C. Choi, R. Hartong-Redden, and A. Kodali. “Real-time Prediction of Intermediate-horizon Automotive Collision Risk” in International Conference on Autonomous Agents and Multiagent Systems (AAMAS), 2018.</li>

    <li>Rachael E. Tompa, Blake Wulfe, Mykel J. Kochenderfer, and Michael P. Owen. "Horizontal Maneuver Coordination for Aircraft Collision-Avoidance Systems" in Journal of Aerospace Information Systems, 2018.</li>

    <li>Rachael E. Tompa, Blake Wulfe, Michael P. Owen, and Mykel J. Kochenderfer. "Collision avoidance for unmanned aircraft using coordination tables" in Digital Avionics Systems Conference (DASC), 2016.</li>
</ul>

<h1 class="rsection">Research Descriptions</h1>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
        <img class="rimg" src="{{ site.github.url }}/media/behavior_sig.png" />
    </div>
    <div class="col-md-6">
        <h3 class="rtitle">Intermediate-Horizon Automotive Risk Prediction</h3>
        <p>
        This research considers the problem of predicting whether a car will suffer a collision in the time period 10-20 seconds in the future. We formulate this task as policy evaluation in a MDP with a high-dimensional, continuous state space,  and a reward function dominated by rare events (collisions). We then demonstrate that simulated data and domain adaptation models can be used to improve prediction performance on real-world data.
        </p>
        <a href="https://github.com/wulfebw/risk_prediction" class="md-link btn-default btn rbtn">code</a>
        <a href="https://arxiv.org/abs/1802.01532" class="md-link btn-default btn rbtn">paper</a>
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
        <img class="rimg img-border" src="{{ site.github.url }}/media/multiagent_driver_crop.png" />
    </div>
    <div class="col-md-6">
        <h3 class="rtitle">Learning Human Driver Models through Adversarial Imitation</h3>
        <p>
        One potential method for validating autonomous vehicles is to evaluate them in a simulator. For this to work, you need highly realistic models of human driving behavior. Existing <a href="https://arxiv.org/abs/1701.06699" class="md-link">research</a> learned human driver models using <a href="https://arxiv.org/abs/1606.03476" class="md-link">generative adversarial imitation learning</a>, but did so in a single-agent environment. As a result, the model fails when you execute many of the learned policies simultaneously. This research performs training in a multi-agent setting to address this problem.
        </p>
        <a href="https://github.com/sisl/ngsim_env" class="md-link btn-default btn rbtn">code</a>
        <a href="https://arxiv.org/abs/1803.01044" class="md-link btn-default btn rbtn">paper</a>
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
        <img class="rimg" src="{{ site.github.url }}/media/uav_value.png" />
    </div>
    <div class="col-md-6">
        <h3 class="rtitle">Deep Reinforcement Learning for Collision Avoidance</h3>
        <p>
        We learn UAV collision avoidance policies directly from a simulator with a Deep Q-Network (DQN). This approach not only solves for policies more quickly than value iteration, but also arrives at safer and more efficient solutions by learning a direct mapping from the state space instead of discretizing it.
        </p>
        <a href="{{ site.github.url }}/assets/CS238_Final_Paper.pdf" class="md-link btn-default btn rbtn">paper</a>
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
        <img class="rimg" src="{{ site.github.url }}/media/joint_actions_reduced.jpg" />
    </div>
    <div class="col-md-6">
        <h3 class="rtitle">Multi-agent Action Coordination</h3>
        <p>
        How can UAVs with different collision avoidance strategies coordinate maneuvers so as to minimize collisions? This research presents an approach that enforces reasonable requirements on the behavior of UAVs, and as a result dramatically improves safety in dangerous encounters. The method is essentially to ensure that UAV maneuvers align with the directions of those advised by an optimal joint solution. 
        </p>
        <a href="http://ieeexplore.ieee.org/document/7777958/" class="md-link btn-default btn rbtn">paper 1</a>
        <a href="https://github.com/sisl/HorizontalCoordUAVs" class="md-link btn-default btn rbtn">code 1</a>  
        <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I010576" class="md-link btn-default btn rbtn">paper 2</a>
        <a href="https://github.com/sisl/HCoordTablesUAVs" class="md-link btn-default btn rbtn">code 2</a> 
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
        <img class="rimg" src="{{ site.github.url }}/media/hsRQN.jpg" />
    </div>
    <div class="col-md-6">
        <h3 class="rtitle">Playing Atari with Hierarchical Reinforcement Learning </h3>
        <p>
        How can artificial agents autonomously learn increasingly complex behavior? The <a href="http://people.idsia.ch/~juergen/subgoals.html" class="md-link">traditional</a> <a href="https://people.cs.umass.edu/~mahadeva/papers/hrl.pdf" class="md-link">approach</a> to solving this problem is to identify subgoals, and then to learn options (i.e., skills) useful for achieving those subgoals. In this research, we instead take a bottom-up approach to HRL, wherein the sequential, primitive actions of an agent are modeled as the result of latent variables, which may themselves be used as options (similar in concept to the approach taken <a href="http://www.ausy.tu-darmstadt.de/uploads/Site/EditPublication/Daniel2016JMLR.pdf" class="md-link">here</a>). This research makes an initial step in this direction, using hierarchical recurrent neural networks within a <a href="https://arxiv.org/abs/1507.06527" class="md-link">Recurrent Q-Network</a>.
        </p>
        <a href="{{ site.github.url }}/assets/CS239_Final_Paper.pdf" class="md-link btn-default btn rbtn">paper 1</a>
        <a href="https://github.com/wulfebw/hierarchical_rl" class="md-link btn-default btn rbtn">code 1</a>
        <a href="{{ site.github.url }}/assets/CS221_Final_Paper.pdf" class="md-link btn-default btn rbtn">paper 2</a>
        <a href="https://github.com/wulfebw/playing_atari" class="md-link btn-default btn rbtn">code 2</a> 
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
        <img class="rimg" src="{{ site.github.url }}/media/tsne_reduced.jpg" />
    </div>
    <div class="col-md-6">
        <h3 class="rtitle">Geo-localization of Street View Images</h3>
        <p>
        Given a random, street-level image of a city from around the world, could you identify where the picture was taken? In this project, we collected a dataset of 100,000 images from ten cities, and trained a convolutional neural network to predict the city from the image. We found that the network successfully identifies the city with ~75% accuracy. Research tackling this project at a much larger scale was published concurrently (<a href="https://arxiv.org/abs/1602.05314" class="md-link">PlaNet</a>).
        </p>
        <a href="{{ site.github.url }}/assets/CS231n_Final_Paper.pdf" class="md-link btn-default btn rbtn">paper</a>
        <a href="https://github.com/wulfebw/LittlePlaNet-Models" class="md-link btn-default btn rbtn">code</a> 
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
        <h3 class="rtitle">Language Modeling with Recurrent Generative Adversarial Networks</h3>
        <p>
        <a href="https://arxiv.org/abs/1406.2661" class="md-link">GANs</a> have had a lot of success in generating images; can they be applied with similar effect to natural language? Since natural language is discrete, we formulate this task as a reinforcement learning problem, and use REINFORCE to train a recurrent generative network to maximize rewards produced by a discriminating network. We found this approach did not scale well to the vocab sizes used in realistic datasets (> 60,000 words), but believe improved training methods (e.g., <a href="https://arxiv.org/abs/1502.05477" class="md-link">TRPO</a>) and curriculum learning (e.g., <a href="https://arxiv.org/abs/1511.06732" class="md-link">MIXER</a>) might overcome these issues.
        </p>
        <a href="{{ site.github.url }}/assets/CS224d_Final_Paper.pdf" class="md-link btn-default btn rbtn">paper</a>
        <a href="https://github.com/wulfebw/adversarial_rl" class="md-link btn-default btn rbtn">code</a>  
    </div>
  </div>
</div>

---

<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
        <h3 class="rtitle">Predicting Social Interaction Outcomes</h3>
        <p>
        In this project, I analyzed a set of ~2,000 pairwise social encounters. Using the audio, visual, and network features from those interactions, I was able to predict their outcomes with about 85% accuracy. While I am more focused on reinforcement learning now, I still think this topic is interesting, and in particular believe that enabling computers to intelligently interact with people (e.g., in healthcare or educational settings) would be widely beneficial.
        </p>
        <a href="{{ site.github.url }}/assets/IS_Final_Paper.pdf" class="md-link btn-default btn rbtn">paper</a>
        <a href="https://github.com/wulfebw/Independent_Study" class="md-link btn-default btn rbtn">code</a> 
    </div>
  </div>
</div>

---
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
        <h3 class="rtitle">3D Map Generation with Autonomous UAVs</h3>
        <p>
        Our goal in this project was to develop a method for collecting imagery of archaeological sites using autonomous UAVs, which could then be used to generate 3D mappings of those sites. We lived in a highland village in Peru for two months while we attempted to collect imagery using the UAVs. The cover image for this website is a photo I took of the archaeological site where we spent the summer. 
        </p>
        <a href="https://www.cambridge.org/core/journals/advances-in-archaeological-practice/article/div-classtitlecapturing-complexitydiv/22A3C3132AA4F5C6ADAB72DEE1265582" class="md-link btn-default btn rbtn">paper</a>
    </div>
  </div>
</div>

---
