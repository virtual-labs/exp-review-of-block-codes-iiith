# Theory 

## Linear Block Codes

Linear Block Codes are arguably the most popular class of forward error correcting codes used in communication systems. 

A linear block code $\mathcal{C}$ has three important parameters of interest, the blocklength $n$, the rate $R$ of the code given by the ratio $k/n$ of its dimension $k$ to its length $n$, and its minimum distance, which is the least Hamming distance between any pair of distinct codewords. In the case of linear block codes, the minimum distance of the code is exactly equal to the minimum weight of any non-zero codeword in the code. We denote the minimum distance of the code as $d_{\min}(\mathcal{C})$. 

## Binary Linear Block Codes, Codewords, Dimension of a Code, Number of Codewords, and Rate 

Our focus is on binary linear block codes. A binary linear block code is a subspace of the $n$-dimensional vector space $\mathbb{F}^n_2$ over the finite field $\mathbb{F}_2$ with two elements $\{0,1\}$, with the operations addition and multiplication modulo $2$. 

The *dimension* of a linear code is typically denoted by $k$. Observe that $1\leq k \leq n$. We call such a binary linear code as $[n,k]$ binary linear code, where $n$ refers to the *blocklength* of the code, and $k$ refers to its dimension. Since the dimension of the code subspace is $k$, the code itself contains *$2^k$ codewords*, corresponding to all possible linear combinations. The *rate* of a $[n,k]$ linear block code is defined as the ratio $\frac{k}{n}$, which signifies the fraction of the message bits to the number of bits in the codeword. 

## Generator Matrix and the code as its Rowspace

A *generator matrix* $G$ of an $[n,k]$ binary linear code $\cal C$ is a $k\times n$ matrix over $\mathbb{F}_2$, containing a basis of the code space as its rows. In other words, the code $\cal C$ is the rowspace of the matrix $G$. Let us see an example. 

$$
\begin{aligned}
G_1=\begin{bmatrix}
1&0&0&0&1&1&1\\
0&1&0&1&0&1&1\\
0&0&1&1&1&0&1
\end{bmatrix}
\end{aligned}
$$
The *rowspace* of $G_1$ is the code $\mathcal{C}_1$ is the set of all the linear combinations of all rows of $G_1$. Since the three rows of $G$ are linearly independent, we will obtain $8$ unique codewords, as follows. 
$$
\mathcal{C}_1=
\begin{Bmatrix}
(0&0&0&0&0&0&0)\\
(1&0&0&0&1&1&1)\\
(0&1&0&1&0&1&1)\\
(0&0&1&1&1&0&1)\\
(0&0&1&1&1&0&1)\\
(1&1&0&1&1&0&0)\\
(1&0&1&1&0&0&1)\\
(0&1&1&0&1&1&0)
\end{Bmatrix}
$$
Note that the dimension of this code is $k=3$. Observe that the all-zero vector is a codeword of this code. Indeed, the all-zero vector is a member of every codeword. 

## Parity Check Matrix of a Code

A parity check matrix of an $[n,k]$ binary linear code $\mathcal{C}$ is $l\times n$ matrix $H$, with entries from $\mathbb{F}_2$ such that $H$ contains exactly $n-k$ linearly independent rows and $H\boldsymbol{c}^T=\boldsymbol{0}, \forall \boldsymbol{c}\in\cal{C}$. Thus, the codewords of $\cal{C}$ are orthogonal to the rows of $H$. If the generator matrix $G$ of the code $\cal C$ is of the form $[I_k | P]$ (a column-wise concatenation of a $k\times k$ identity matrix $I_k$, and a $k\times n-k$ matrix $P$), then a parity check matrix for the code can be written as $[P^T|I_{n-k}]$, where $P^T$ denotes the transpose of the matrix $P$. For the example code $\cal{C}_1$ with generator matrix $G_1$ described before, we see that such parity check matrix is given by
$$
H_1=\begin{bmatrix}
0&1&1&1&0&0&0\\
1&0&1&0&1&0&0\\
1&1&0&0&0&1&0\\
1&1&1&0&0&0&1
\end{bmatrix}. 
$$
Observe that $n-k=4$ in this case, and thus we see the $4\times 4$ identity submatrix in $H_1$. However, this is not the only parity check matrix for $\cal{C}_1$. The following matrix $H_2$ is also a valid parity check matrix for the code. 
$$
H_2=\begin{bmatrix}
1&1&0&1&1&0&0\\
1&0&1&0&1&0&0\\
1&1&0&0&0&1&0\\
0&0&1&0&0&1&1
\end{bmatrix}. 
$$
How do we verify that both $H_1$ and $H_2$ are valid parity check matrices for $\cal{C}_1$? We do this by observing that both have rank $n-k=4$ (they contain $4$ linearly independent rows over $\mathbb{F}_2$) and also that $H_1\boldsymbol{c}^T=H_2\boldsymbol{c}^T=\boldsymbol{0}$, for all the $8$ codewords $\boldsymbol{c}\in\cal{C}_1$ shown above. 

Observe that the property that $H_1\boldsymbol{c}^T=\boldsymbol{0}$ signifies that the codeword $\boldsymbol{c}$ (which is a $n$-tuple $\boldsymbol{c}=(c_0,...,c_{n-1})$) satisfies $n-k$ linearly independent equations. These are as follows. 
$$
\begin{aligned}
c_1+c_2+c_3&=0\\
c_0+c_2+c_4&=0\\
c_0+c_1+c_5&=0\\
c_0+c_1+c_2+c_6&=0.
\end{aligned}
$$
Further, we also observe that, since $H$ has rank exactly equal to $n-k$, the code $\mathcal{C}$ is precisely the set of all $n$-length vectors $\boldsymbol{v}$ taken from $\mathbb{F}_2^n$ which satisfy the equations given by $H\boldsymbol{v}^T=\boldsymbol{0}$. That is, we can write
$$
\mathcal{C}=\{\boldsymbol{v}\in\mathbb{F}_2^n : H\boldsymbol{v}^T=\boldsymbol{0} \}. 
$$
For the example discussed in this page, you can observe that, out of the set of all $2^7$ binary vectors of length $7$, it is exactly the set of $8$ vectors $\boldsymbol{v}\in\mathbb{F}_2^n$, which are the codewords of $\mathcal{C}$ which satisfy the equation $H\boldsymbol{v}^T=\boldsymbol{0}$. 

## Encoding

The way an $[n,k]$ code $\cal C$  is used in communication is as follows. The *message vector* $\boldsymbol{m}$ of length $k$ is multiplied with the generator matrix $G$ to obtain a codeword $\boldsymbol{c}$ of length $n$. This codeword is then transmitted through the communication channel. For example, consider the message vector $\boldsymbol{m}=(1,0,1)$ for the code $\cal{C}_1$. The corresponding codeword is given as 
$$
\boldsymbol{m}G_1=(1,0,1)\begin{bmatrix}
1&0&0&0&1&1&1\\
0&1&0&1&0&1&1\\
0&0&1&1&1&0&1
\end{bmatrix}=(1,0,1,1,0,1,0).
$$
This codeword $(1,0,1,1,0,1,0)$ is transmitted through the channel, when we want to communicate the $3$-bit message vector $(1,0,1)$. 

We will discuss decoding aspects of these codes in the subsequent experiments. 
