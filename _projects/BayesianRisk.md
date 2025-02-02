---
layout: page
title: Bayesian Risk Assesment Using Cybersecurity Data
description: In this project, we compute the probabilistic risk of exploitation for different assets using Bayesian Network.
img: assets/img/bayesian.jpg
importance: 2
category: work
giscus_comments: true
---

In the realm of data analysis and modeling, **Bayesian statistics** and **Machine Learning** (ML) offer powerful tools, each with distinct strengths and applications. 

**Bayesian statistics** provides a principled framework for probabilistic reasoning, enabling the incorporation of prior knowledge, quantification of uncertainty, and dynamic updating of beliefs as new data becomes available. Unlike frequentist methods, Bayesian inference treats parameters as probability distributions, making it particularly well-suited for small datasets, decision-making under uncertainty, and problems requiring sequential learning. Its applications span diverse fields, from finance and healthcare to cybersecurity and artificial intelligence, where interpretability and adaptability are crucial. 

On the other hand, **Machine Learning (ML)** shines in processing large, complex datasets, identifying patterns and anomalies, and performing real-time analysis. It is ideal for automation and handling unstructured data, providing robust solutions for dynamic and evolving environments. Understanding when and why to use each approach can significantly enhance your analytical capabilities and decision-making processes.

Mastering Bayesian techniques can significantly improve analytical depth, making them indispensable for robust decision-making in uncertain environments.

# Project Overview  

In this project, we apply Bayesian statistics to real-world cybersecurity data in order to assess the risk of successful cyberattacks on various assets in a network. You will use pre-processed data provided to build a Bayesian Network and compute the probabilistic risk of exploitation for different assets. The ultimate goal is to provide a ranked list of assets based on their risk levels, along with actionable insights for mitigation.

Here, We analyze four datasets that capture the relationships among **four key nodes**:  

- **Assets**  
- **Vulnerabilities**  
- **Threat Actors**  
- **Attack Vectors**  

These datasets define the interactions between these nodes as follows:  

1. **Asset-Vulnerability Dataset**  
   - **Fields**: `Asset`, `Vulnerability`, `CVSS_Score`, `Exploit Probability`  

2. **Vulnerability-Attack Vector Dataset**  
   - **Fields**: `Vulnerability`, `Attack Vector`, `Success Probability`  

3. **Threat Actor - Asset Dataset**  
   - **Fields**: `Threat Actor`, `Asset`, `Target Probability`  

4. **Threat Actor - Attack Vector Dataset**  
   - **Fields**: `Threat Actor`, `Attack Vector`, `Success Rate`  

This structured approach enables us to model relationships between assets, vulnerabilities, and threats effectively, forming the foundation for Bayesian Network construction and analysis.  

## Outcomes 

1. We constructed a **Bayesian Network** based on the given data.
2. We calculate the **posterior probabilities** of successful exploitation for each asset by integrating prior attack probabilities, conditional probabilities of attack success, and relationships between assets, vulnerabilities, and attack vectors.
3. We **ranked assets** based on risk and provide insights into which assets are most vulnerable.

The link for project code in Python is found in my repository: <strong><a href="https://github.com/dbhanuprakash233/BayesianRiskAssesment/tree/main" style="color:#d93025;">Bayesian Risk Assessment </a></strong>
