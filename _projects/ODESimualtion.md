---
layout: page
title: Numerical Simulation of a Two-Stage Rocket
description: This project simulates the vertical flight of a two-stage rocket by solving a system of ordinary differential equations (ODEs) numerically using scipy.integrate.solve_ivp with the RK45 method. 
img: assets/img/Rocket.jpeg
redirect: https://unsplash.com
importance: 3
category: work
---

# Numerical Simulation of a Two-Stage Rocket

## Overview
This project simulates the vertical flight of a two-stage rocket by solving a **system of ordinary differential equations (ODEs)** numerically using `scipy.integrate.solve_ivp` with the RK45 method. The simulation accounts for quadratic air drag and gravitational forces but does not include parachute deployment during descent.

## Project Structure

### Functions

| Function | Description |
|----------|-------------|
| **`Calculations.one_stage()`** | Estimates motor delay (coast time), max velocity, and peak altitude for a one-stage rocket. Uses equations from [RocketMime](http://www.rocketmime.com/rockets/qref.html). A more accurate analysis requires numerical methods to account for dynamic mass. |
| **`Calculations.two_stage()`** | Similar to `one_stage()`, but for a two-stage rocket. Uses equations from [RocketMime](http://www.rocketmime.com/rockets/multistg.html). |

### Input Parameters in `data_run.py`

| Parameter | Description |
|-----------|-------------|
| **Rocket Stage Data** |
| | **Stage Area**: Cross-sectional area of each rocket stage. |
| | **Empty Mass**: Mass of each stage without fuel. |
| **Engine Data** |
| | **1st Stage Motor**: [CESARONI P38-4G WHITE THUNDER (I470)](https://www.apogeerockets.com/Rocket_Motors/Cesaroni_Propellant_Kits/Cesaroni_Certification_Special/38mm_Certification_Propellants/Cesaroni_P38-4G_White_Thunder_I470#faqs) |
| | **2nd Stage Motor**: [CESARONI P38-5G BLUE STREAK (J357)](https://www.apogeerockets.com/Rocket_Motors/Cesaroni_Propellant_Kits/38mm_Motors/5-Grain_Motors/Cesaroni_P38-5G_Blue_Streak_J357) |

This project provides a simplified yet insightful look into two-stage rocket dynamics using numerical methods.

The link for project code in Python is found in my repository: <div style="border:2px solid #4CAF50; padding:10px; background-color:#f0fff0; color:#333;">
  <strong><a href="https://github.com/dbhanuprakash233/ODESimulation_TwoStageRocket/" style="color:#d93025;">Two-stage rocket simulation with ODEs. </a></strong>
</div>
