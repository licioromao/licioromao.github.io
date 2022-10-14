---
layout: default
Title: "ResearchSummary"
---

<link href="../assets/css/ResearchSummaryStyle.css" rel="stylesheet" type="text/css">

A non-exaustive list of projects that I have been recently involved is presented below. 

### Abstractions of discrete-time stochastic systems

This is a joint work with [Prof. Nils Jensen](http://www.cs.ru.nl/personal/nilsjansen/) and [Thom Badings](https://thombadings.nl/) from the Radboud University, NL, as well as with [Prof. Alessandro Abate](https://www.cs.ox.ac.uk/people/alessandro.abate/home.html). This project involves the construction of abstractions for discrete-time stochastic systems using a non-trivial connection with the scenario approach theory. The generated abstraction consists of an interval Markov Decision process, which we leverage to design feedback control policies for reach-avoid specifications with formal guarantees.


The main representative papers are:

1. T. Badings, A. Abate, N. Jensen, D. Parker, H. Poonawala, M. Stoelinga, "Sampling-based Robust Control of Autonomous Sysmtems with Non-Gaussian Noise", AAAI, 2022. **Award-winning paper** 
2. T. Badings, L. Romao, A. Abate, N. Jensen, "Probabilities Are Not Enough: Formal Controller Synthesis for Stochastic Dynamical Models with Epistemic Uncertainty", Submitted to AAAI 2023.
3. T. Badings, L. Romao, A. Abate, D. Parker, H. Poonawala, M. Stoelinga, N. Jensen, "Robust Control for Dynamical Systems with Non-Gaussian Noise via Formal Abstractions". Submitted to Journal of Artificial Intelligence Research (JAIR).

<p style="text-align:center;">
   <img src="../assets/img/orbit.png" border="1" height="300" width="400">
  <figcaption> Fig. A space rendezvous problem. The chaser spacecraft (white) must navigate to the target (green), while not colliding with the one in red. </figcaption> 
</p>


### Scenario approach theory

The scenario approach theory provides a beautiful mathematical property of the optimal solution of scenario programs (see optimisation problem below), which can be used to approximate the solution to chance-constraint optimization problems.
\\[\begin{align}
\mathrm{minimize} \quad  c^\top x \\
\quad \mathrm{subject~to} \quad  g(x,\delta) \leq 0, \forall \delta \in S. 
\end{align}\\]

I have contributed to the theoretical foundations of the scenario approach theory by showing a tighter bound on the probability of constraint violation when constraints are discarded. This is a joint work with [Prof. Kostas Margellos](https://kostasmargellos.github.io/) and [Prof. Antonis Papachristodoulou](http://sysos.eng.ox.ac.uk/wiki/index.php/User:Antonishttp://sysos.eng.ox.ac.uk/wiki/index.php/User:Antonis). Relevant papers are:

1. L. Romao, A. Papachristodoulou, K. Margellos, "On the exact feasibility of convex scenario programs with discarded constraints", IEEE Transaction on Automatic Control, 2022. To appear.
2. L. Romao, K. Margellos, A. Papachristodoulou, "Probabilistic feasibility guarantees for convex scenario programs with an arbitrary number of discarded constraints", Automatica, 2022. To appear.
3. L. Romao, K. Margellos, A. Papachristodoulou, "Tight generalization guarantees for the sampling and discarding approach to scenario optimization", 59th Conference on Decision and Control (CDC), 2020.
4. L. Romao, K. Margellos, A. Papachristodoulou, "Tight sampling and discardind bounds for scenario programs with an arbitrary number of removed samples", L4DC, 2021.

### Distributionally robust dynamic programming

A common and powerful way to think about stochastic systems is through the lens of stochastic kernels, which are measurable maps from the state space (possibly also control space) to the space of probability measures over the state space. Motivated by the fact that we live in a data-rich world, we are exploring how to develop control policies that are robust against kernels that belong ambiguity sets constructed using the available data. My collaborators in this research direction are [Prof. Ashish Hota](http://www.facweb.iitkgp.ac.in/~ahota/index.html), IIT Kharagpur, and [Prof. Alessandro Abate](https://www.cs.ox.ac.uk/people/alessandro.abate/home.html). 

This is an ongoing work and I hope to share results here soon.

### Robustness in reinforcement learning

Robustness in RL is an important and exciting research topic. In this project we charcaterize a notion of robustness for RL policies and propose an algorithm that leverages lexicographic optimisation to obtain a policy that is robust according to our definition. This is a joint work with Daniel Jarne and [Prof. Manuel Mazo Jr](https://mmazojr.3me.tudelft.nl/) from TU Delft, NL, as well as with [Prof. Alessandro Abate](https://www.cs.ox.ac.uk/people/alessandro.abate/home.html). Relevant papers are:

1. D. Jarne, L. Romao, L. Hammond, M. Mazo Jr, A. Abate, "Observational Robustness and Invariances in Reinforcement Learning via Lexicographic Objectives". Submitted to ICLR 2023.




