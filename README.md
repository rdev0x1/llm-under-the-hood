# LLM Under the Hood

**Understanding LLMs from Scratch**

A text-first, interactive course explaining large language models from the lowest useful abstractions upward.

## Current scope

### Chapter 1 — Math Foundations

Complete enough to move into Autograd:

- tensors and shapes
- elementwise operations, transpose, reshape, and mean
- matrix multiplication with `@`
- axes and reductions
- broadcasting
- linear transformations
- functions and derivatives
- partial derivatives and gradients
- gradient descent
- the chain rule
- probability distributions
- logits, exponentials, logarithms, and softmax
- cross-entropy / negative log-likelihood
- interactive final checkpoint

### Next

Chapter 2 will implement Autograd from scratch: computation graphs, local derivatives, reverse-mode differentiation, topological traversal, and `backward()`.

## Teaching model

Every important concept is presented through complementary views:

1. **Intuition** — why it exists
2. **Math** — the precise operation
3. **Code** — how it is implemented
4. **LLM connection** — where it appears inside a real model

More advanced mathematics is introduced just in time in later chapters rather than front-loaded into Chapter 1.

## Run locally

Open `index.html` in a browser. No build step or dependency is required.
