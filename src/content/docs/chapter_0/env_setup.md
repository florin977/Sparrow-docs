---
title: "Setting up the dev environment"
description: "Installing the required dependencies for the engine"
---

Before we write our first line of code, we need to ensure your machine is equipped with the necessary tools to talk to the GPU. Developing a graphics engine requires a specific handshake between your compiler, the Vulkan loader, and your hardware drivers.
Rust Toolchain

## Rust

We assume you already have the Rust toolchain installed. If not, the standard way is via rustup.rs.

    rustc --version

Ensure your version is 1.75 or higher. We leverage modern Rust editions to ensure our "safe" wrappers around Vulkan are as ergonomic as possible.
Installing the Vulkan SDK

## Vulkan

The Vulkan SDK (Software Development Kit) provides the headers, validation layers, and essential tools like vulkaninfo and vkcube.

**Arch Linux**

On Arch, the SDK is available directly through official packages. This is generally preferred over the manual LunarG installer to avoid library conflicts.

    sudo pacman -S vulkan-devel vulkan-tools vulkan-validation-layers

**Windows**

Download the latest installer from the LunarG Vulkan SDK site. Ensure the Validation Layers component is selected during installation; these are vital for debugging unsafe code.

**macOS**

Install via Homebrew:

    brew install vulkan-sdk

## Graphics Drivers

Vulkan requires an ICD (Installable Client Driver). Even if your desktop is rendering fine, the specific Vulkan entry points might be missing if you are using generic drivers.

    NVIDIA: Use the proprietary drivers (e.g., nvidia or nvidia-dkms on Arch).

    AMD: Ensure the open-source vulkan-radeon (RADV) driver is installed.

    Intel: Ensure the vulkan-intel (ANV) driver is installed.

**Verification**: 
Run vkcube in your terminal. If a window appears with a spinning 3D cube, your Vulkan driver stack is fully functional.

## Project Dependencies

For Sparrow, we use a minimal but powerful stack of crates. We avoid high-level abstractions like wgpu because the goal of this project is to understand the low-level mechanics.

- ash: A 1:1 wrapper over the Vulkan C API. It is "thin" and "unsafe," giving us total control over the GPU.
- winit: The industry standard for Rust-native windowing. It handles the complexities of Wayland and X11 seamlessly.
- raw-window-handle: A tiny crate that allows winit to pass a raw window pointer to ash without them being tightly coupled.
- env_logger: Used to capture output from the engine and, more importantly, the Vulkan Validation Layers.

