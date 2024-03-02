# Procedure

What we would like to see as the experiment itself. 

0. Dimension of linear block code and its rate. 
    * Given generator matrix and/or parity check matrix, write down the dimension of the code and its rate. 
1. Encoding
    * For given generator matrix of the linear code, learn how to encode a message vector  
2. Learn how to calculate minimum distance.
    * For given generator matrix, calculate all codewords and the minimum weight. 
3. Learn how to compute parity check matrix, given generator matrix in systematic form. 
    * Compute the two blocks $I_{n-k}$ and $P^T$ and the overall structure of the parity check matrix.  
4. Learn to identify the codewords
    * Given parity check matrix, check if given vector is a codeword or not.     
    

___

## To do :

0. We want to start on the "Aim" page as the index page. 
    * We want to have "next" page previous page link on each page, in bottom and top? 
1. Make the experiment two staged. First stage to do 0,1,2. Second stage does 3,4. 
2. Every experiment should have an 'experimental quality', that is, the user can try and fail to do it correctly. In that case the user should be told why the entry was incorrect or why the experiment faile, and the user can be guided to do the experiment correctly. See more of this in the below general schema for experiments. 
3. Further, the procedure.md file should be updated after the experiment is completed, to make user understand how the experiment is to be performed. 
4. Pretest quiz: On basic binary operations, vector linear combinations, linear independence, matrix rank, rowspan.  
5. Post-test: Identify dimension, minimum distance, parity check matrix of code, vector is in code or not in code? 

## General schema for the experiments. 

### Aim:
One clear aim for the whole exp. Make sure that the learner is 
Theory: 
Whatever theory you want to add here. (Ideally multimodal, pictures, videos?)
 
### PreTest : 
Prerequisites (Set of questions to be answered by student to perform/understand the experiment). Q&A to be specified in json file ONLY! This is to enable them to be dynamically loaded. 
 
### Procedure: 
How to do the exp? 
 
### Simulation:
One or more simulations - initially have a demo where the student sees things happening (not much interaction - show exactly how ), then another where the simulations are run actually with the users input (with handholding/pointing-out-mistakes), then finally one thing where they are not going to be handholded, they perform it, but then you give feedback only at the very end. 
 
### Post Test:  
Similar to pre-test, please test learning of student through simulation (should not have been able to answer before). MCQs were shown as example. Have explanations for correct as well as incorrect answers (therefore the wrong options cannot be random options! Questions and Options should be carefully chosen/framed). Q&A to be specified in json file. 
 
### References: 
 
Very very important to ensure whatever content is referred to, those references is available here. Make sure the most content is written originally! Plagiarism is TO BE AVOIDED. Right now our discretion matters and they don't have 
 
### Contributors: 
 
### Add list of contributors here. Can change for different experiments. Subject Matter experts , Developers kept separate. 
 
Feedback:?? 
____