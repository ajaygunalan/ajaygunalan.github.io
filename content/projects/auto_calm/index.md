---
title: "Auto-CALM: Autonomous Computer-Assisted Laser Microsurgery" 
summary: "Autonomous Laser Surgery. It has three significant components: Laser Spot Tracking, Target Tracking, and Ablation algorithm."  
date: 2024-06-01

---

---

##### Download

[Paper](https://doi.org/10.1109/TMRB.2024.3468385)
+ [Code and data](https://github.com/ajaygunalan/Compressive-Image-Scanning-Microscope/blob/main/compressive_ism/Compressive-ISM.ipynb) -->
[video](https://www.youtube.com/watch?v=_80ntLEDUYw&feature=youtu.be)

---

##### Abstract

This paper introduces a new controller for real-time dynamic laser ablation: the autonomous computer-assisted laser microsurgery system (Auto-CALM). Auto-CALM allows the surgeon to define the ablation area, which is then precisely ablated by the system while compensating for tissue motions and deformations. This is achieved based on three control blocks: target tracking, laser tracking, and ablation control algorithm. The ablation area, i.e. the target, is defined by the surgeon using a graphics tablet and graphics overlay on the surgical video. This target is then tracked in real-time using improved optical flow and a novel scaling strategy that makes the system robust against tissue deformations. Laser tracking is based on a pretrained Segment Anything Model that localizes the position of the laser in the surgical video. The ablation algorithm generates a trajectory to ablate the target given the dynamically updated laser position and target position. This enables motion compensation, which increases the accuracy of the system. Auto-CALM was validated through laser ablation experiments based on a porcine larynx fixed to a breathing motion simulation stage. The obtained results were also compared with those achieved under manual operation of CALM, and under autonomous ablation using the Track Anything Model as the target tracking algorithm. Furthermore, four different parts of the ex-vivo porcine larynx were tested to investigate different tracking features and the robustness of the system.
Auto-CALM achieved a Dice Similarity Coefficient of 95.49% under the most challenging conditions (including tissue motion and no feature), reaching an ablation speed of 1.43 $mm^{2}/s$. The accuracy and usability of the integrated platform bear potential for the accurate ablation of tissue volumes in clinical settings. Further ex-vivo and in-vivo animal studies shall help translate these findings to clinical use

---


##### Citation

<!-- ```BibTeX
@misc{https://doi.org/10.48550/arxiv.2307.09841,
  doi = {10.48550/ARXIV.2307.09841},
  url = {https://arxiv.org/abs/2307.09841},
  author = {Gunalan,  Ajay and Castello,  Marco and Piazza,  Simonluca and Li,  Shunlei and Diaspro,  Alberto and Mattos,  Leonardo S. and Bianchini,  Paolo},
  keywords = {Image and Video Processing (eess.IV),  Computer Vision and Pattern Recognition (cs.CV),  Signal Processing (eess.SP),  Optics (physics.optics),  FOS: Electrical engineering,  electronic engineering,  information engineering,  FOS: Electrical engineering,  electronic engineering,  information engineering,  FOS: Computer and information sciences,  FOS: Computer and information sciences,  FOS: Physical sciences,  FOS: Physical sciences},
  title = {Compressive Image Scanning Microscope},
  publisher = {arXiv},
  year = {2023},
  copyright = {arXiv.org perpetual,  non-exclusive license}
}
``` -->
