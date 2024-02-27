# Theory 

Linear Block Codes are arguably the most popular class of forward error correcting codes used in communication systems. A linear block code $\mathcal{C}$ has three important parameters of interest, the blocklength n, the rate of the code given by the ratio $k/n$ of its dimension $k$ to its length $n$, and its minimum distance, which is the least Hamming distance between any pair of distinct codewords. In the case of linear block codes, the minimum distance of the code is exactly equal to the minimum weight of any non-zero codeword in the code. We denote the minimum distance of the code as $d_{min}(\mathcal{C})$. 


Our focus is on binary block codes, i.e., those codes which are subspaces of the $n$-dimensional vector space $\mathbb{F}^n_2$ over the finite field $\mathbb{F}_2$ with two elements $\{0,1\}$, with the operations addition and multiple modulo 2. A straightforward algorithm for decoding these codes is the minimum distance decoding, where the decoder’s estimate is the codeword that is closest in the sense of Hamming distance to the received codeword. Linear Codes are also characterizable via their generator and parity check matrices. The generator matrix of a linear code captures the basis of code subspace, while the parity check matrix contains rows corresponding to the basis of the dual subspace of the code subspace.

$$\begin{aligned}
f(x)&=x^2+2x+2\\
&=x^2+2x\\
&=\begin{bmatrix}1&0\\
0&1
\end{bmatrix}
\end{aligned}

$$