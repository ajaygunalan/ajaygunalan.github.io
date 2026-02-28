---
title: "Auto-CALM: Autonomous Computer-Assisted Laser Microsurgery"
summary: "Autonomous Laser Surgery. It has three significant components: Laser Spot Tracking, Target Tracking, and Ablation algorithm."
date: 2024-06-01
---

---

##### Download

- [Paper](https://doi.org/10.1109/TMRB.2024.3468385)
- [video](https://www.youtube.com/watch?v=_80ntLEDUYw&feature=youtu.be)

---

##### Abstract

This paper introduces a new controller for real-time dynamic laser ablation: the autonomous computer-assisted laser microsurgery system (Auto-CALM). Auto-CALM allows the surgeon to define the ablation area, which is then precisely ablated by the system while compensating for tissue motions and deformations. This is achieved based on three control blocks: target tracking, laser tracking, and ablation control algorithm. The ablation area, i.e. the target, is defined by the surgeon using a graphics tablet and graphics overlay on the surgical video. This target is then tracked in real-time using improved optical flow and a novel scaling strategy that makes the system robust against tissue deformations. Laser tracking is based on a pretrained Segment Anything Model that localizes the position of the laser in the surgical video. The ablation algorithm generates a trajectory to ablate the target given the dynamically updated laser position and target position. This enables motion compensation, which increases the accuracy of the system. Auto-CALM was validated through laser ablation experiments based on a porcine larynx fixed to a breathing motion simulation stage. The obtained results were also compared with those achieved under manual operation of CALM, and under autonomous ablation using the Track Anything Model as the target tracking algorithm. Furthermore, four different parts of the ex-vivo porcine larynx were tested to investigate different tracking features and the robustness of the system.
Auto-CALM achieved a Dice Similarity Coefficient of 95.49% under the most challenging conditions (including tissue motion and no feature), reaching an ablation speed of 1.43 $mm^{2}/s$. The accuracy and usability of the integrated platform bear potential for the accurate ablation of tissue volumes in clinical settings. Further ex-vivo and in-vivo animal studies shall help translate these findings to clinical use

---


##### Citation

```BibTeX

@ARTICLE{10697472,
  author={Li, Shunlei and Gunalan, Ajay and Azam, Muhammad Adeel and Penza, Veronica and Caldwell, Darwin G. and Mattos, Leonardo S.},
  journal={IEEE Transactions on Medical Robotics and Bionics},
  title={Auto-CALM: Autonomous Computer-Assisted Laser Microsurgery},
  year={2024},
  volume={6},
  number={4},
  pages={1423-1435},
  keywords={Laser ablation;Target tracking;Surgery;Lasers;Microsurgery;Calibration;Medical robotics;Surgical robotics;laser microsurgery;autonomous medical procedure;vision-based control},
  doi={10.1109/TMRB.2024.3468385}
}
```
