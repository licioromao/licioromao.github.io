---
layout: default
Title: "ResearchSummary"
---

<link href="../assets/css/ResearchSummaryStyle.css" rel="stylesheet" type="text/css">

Below you can find a list of non-exaustive projects that I am currently working on. Feel free to contact me if youwould like to build a collaboration in one of these topics and related areas.

### Abstractions of discrete-time stochastic systems

This is a joint work with [Prof. Nils Jensen](http://www.cs.ru.nl/personal/nilsjansen/) and [Thom Badings](https://thombadings.nl/) from the Radboud University, NL, as well as with [Prof. Alessandro Abate](https://www.cs.ox.ac.uk/people/alessandro.abate/home.html). The main idea of the research project is to define abstractions of discrete-time stochastic systems without assuming knowledge of the noise distribution. We developed a non-trivial connection between scenario optimization and the abstraction generation process that is then leveraged to build an interval Markov Decision Process that represents a sound model for our orginal model. 


The main representative papers in this research direction are:

1. T. Badings, A. Abate, N. Jensen, D. Parker, H. Poonawala, M. Stoelinga, "Sampling-based Robust Control of Autonomous Sysmtems with Non-Gaussian Noise", AAAI, 2022. **Award-winning paper** 
2. T. Badings, L. Romao, A. Abate, N. Jensen, "Probabilities Are Not Enough: Formal Controller Synthesis for Stochastic Dynamical Models with Epistemic Uncertainty", Submitted to AAAI 2023.
3. T. Badings, L. Romao, A. Abate, D. Parker, H. Poonawala, M. Stoelinga, N. Jensen, "Robust Control for Dynamical Systems with Non-Gaussian Noise via Formal Abstractions". Submitted to Journal of Artificial Intelligence Research (JAIR).

<p style="text-align:center;">
   <img src="./assets/img/orbit.png" border="1" height="300" width="400">
  <figcaption> Fig. A space rendezvous problem. The chaser spacecraft (white) must navigate to the target (green), while not colliding with the one in red. </figcaption> 
</p>


### Scenario approach theory

The scenario approach theory provides a mechanism to approximate the solution to chance-constraint optimization problem by means of available data. It produces guarantees on the probability of constraint violation for the optimization problem give by 
\\[\begin{eqnarray}
\mathrm{minimize} \quad  &c^\top x \nonumber \\
\mathrm{subject~to} \quad  &g(x,\delta) \leq 0, \forall \delta \in S. 
\end{eqnarray}\\]

I have worked on the development of a new theoretical result on the guarantee of the probability of constraint violation of the above optimization problem when some of the constraints are discarded. My collaborators in this research direction include [Prof. Kostas Margellos](https://kostasmargellos.github.io/) and [Prof. Antonis Papachristodoulou](http://sysos.eng.ox.ac.uk/wiki/index.php/User:Antonishttp://sysos.eng.ox.ac.uk/wiki/index.php/User:Antonis). The relevant papers of this research direction are:

1. L. Romao, A. Papachristodoulou, K. Margellos, "On the exact feasibility of convex scenario programs with discarded constraints", IEEE Transaction on Automatic Control, 2022. To appear.
2. L. Romao, K. Margellos, A. Papachristodoulou, "Probabilistic feasibility guarantees for convex scenario programs with an arbitrary number of discarded constraints", Automatica, 2022. To appear.
3. L. Romao, K. Margellos, A. Papachristodoulou, "Tight generalization guarantees for the sampling and discarding approach to scenario optimization", 59th Conference on Decision and Control (CDC), 2020.
4. L. Romao, K. Margellos, A. Papachristodoulou, "Tight sampling and discardind bounds for scenario programs with an arbitrary number of removed samples", L4DC, 2021.

### Distributionally robust dynamic programming

A common and powerful way to think about stochastic systems is through the lens of stochastic kernels, which are measurable maps from the state space (possibly also control space) to the space of probability measures over the state space. Given that we are able to approximate the underlying kernel using data, we are exploring how to develop control policies that are robust against kernel that belong to a class of ambiguity sets. My collaborators in this research direction are [Prof. Ashish Hota](http://www.facweb.iitkgp.ac.in/~ahota/index.html), IIT Kharagpur, and [Prof. Alessandro Abate](https://www.cs.ox.ac.uk/people/alessandro.abate/home.html). 

I will be happy to share a relevant paper in this direction once we finilise a draft of it. 

### Robustness of reinforcement learning

This is another exciting research direction that aims to characterize robustness of policies in reinforcement learning schemes. Indeed, RL algorithms are having tramenduous impact in several industries and also in academia, both due to its generality (being a model-free approach) and to the challenges in proving theoretical convergence to the optimal policy. In this research direction we are planning to characterize robustness notions of RL schemes and produce algorithms that converge to one of these robust policies. This work is under development in collaboration with [Prof. Manuel Mazo Jr](https://mmazojr.3me.tudelft.nl/) and Daniel Jarne, from TU Delft, NL, as well as with [Prof. Alessandro Abate](https://www.cs.ox.ac.uk/people/alessandro.abate/home.html).

I will be sharing a research draft on this topic as soon as possible.


### Industrial project

Safety-critical applications, in which the designed controller must be safe at all times, are the main source of motivation of my research, in addition of having a strong mathematical relevance. One area in which I am particular interest is space applications, thus I am also a member of the Oxford Space community (please check up [their website](https://www.space.ox.ac.uk/) for further details).


