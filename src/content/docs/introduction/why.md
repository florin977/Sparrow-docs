---
title: Why an Engine?
description: Why I chose to punish myself with low-level graphics programming.
---

So, you might wonder why, out of all the projects I could have built, I chose a "game" engine?

Well, I don't *really* intend to make a full game. I want to build a **Graphics Playground**.

I want to test rendering techniques, understand how modern games render a frame in 16ms (that's 60 FPS for those struggling with time units), and see how math and physics come together to create pixels. I love seeing the code I write directly impact what appears on screen. I also love optimizing things, so it only feels right to target **real-time rendering**, not offline rendering.

### The Tech Stack: Why make it hard?

You might ask: *"Why Rust and Vulkan? Why not just use Unity?"*

#### 1. Vulkan
It is the industry standard. It receives constant updates and demands that the programmer **actually understands** the graphics pipeline, rather than just moving arrays around and calling it a day.
* *Note:* I already used OpenGL for a previous project. I'll likely reference that work at some point in the future.

#### 2. Rust & Cargo
Yes, Rust is a beautiful language. It provides **memory safety** without the overhead of Garbage Collection (looking at you, Java) and without the segfaults of manual management (looking at you, C/C++).

But the real reason? **Cargo.**
I could have used C++, carefully managing pointers and RAII. But C++ does not have the greatest package manager ever created. I like to solve problems and create things; I do **NOT** like spending 3 hours telling CMake where my libraries are or debugging a `Makefile`.

### The Goal

This project (and some parts of this documentation) will serve as my Bachelor's Thesis.

:::tip[A Note on Timing]
Yes, it is quite early to worry about my thesis. But since an engine is a complex beast, I decided to kill two birds with one stone.
:::

I plan to start development a day or two after writing this, taking a hard-earned rest after finals week.

Along the way, I will explain **why** things are the way they are. I’ll break down how the engine works behind the scenes—from the math of a dot product to the rasterization of a triangle.

So, even if you don't care about my specific engine, if you want to learn the **concepts** behind Graphics Programming, you are in the right place. I will also include interactive visualizers to help you actually *see* the math.

I will try to make these explanations as accessible as I can, so even if you have no prior experience with graphics, you will still understand most (if not all) of it.

So, without further ado, let's get started!
