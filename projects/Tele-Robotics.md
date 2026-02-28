---
title: Tele-Robotics
summary: "Developed real-time audio, video, and point cloud streaming for tele-operated robots in virtual reality using ROS services, Multi-Threading in C++, and sensor integration with Nvidia Jetson, enhancing the user interface for remote operations."
date: 2020-10-01
---


A part of the team developing a user interface team in virtual reality for tele-operated robots.

<iframe src="https://www.youtube.com/embed/vl5wQ8cF8U4" title="IIT and INAIL are working together to increase safety of workers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

My primary task was developing real-time audio, video, and point cloud (PCL) streams to VR when the user requested via ROS services. I used Multi-Threading in C++ to parallelly open several sensors using OpenCV and custom encoders to reduce latency. The software design is described in the slideShow below.

<iframe src="https://www.youtube.com/embed/db5fdoCdh4U" title="Design of Vicario Sever" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Then, I interfaced the gas sensor, temperature sensor, mic, and thermal camera with Nvidia Jetson and experimented with beam forming on the XMOS Microphone array using the ODAS library.
