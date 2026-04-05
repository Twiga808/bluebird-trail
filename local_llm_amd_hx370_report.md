# Running Local LLMs on AMD Ryzen AI 9 HX 370: A Practical Guide

This report provides a comprehensive analysis of running local Large Language Models (LLMs) on a machine equipped with the AMD Ryzen AI 9 HX 370 processor, 64GB of shared system RAM, the integrated Radeon 890M GPU, and the AMD XDNA 2 NPU running Windows 11 Pro. The analysis focuses on VRAM allocation, quantization levels, maximum practical model sizes, recommended models, and the optimal software stack.

## 1. VRAM Allocation from 64GB System RAM

The AMD Ryzen AI 9 HX 370 utilizes a unified memory architecture where the integrated Radeon 890M GPU shares the system's DDR5 RAM. On a system with 64GB of RAM, the allocation of memory to the iGPU (VRAM) is a critical factor for LLM inference.

By default, the system dynamically allocates memory to the iGPU as needed. However, for running large LLMs, relying on dynamic allocation can lead to out-of-memory errors or severe performance degradation if the model spills over into slower system memory pathways. 

Users can manually configure the dedicated VRAM allocation in the system BIOS (often referred to as UMA Frame Buffer Size). On a 64GB system, it is typically possible to allocate up to **32GB or even 48GB** of RAM as dedicated VRAM for the iGPU [1][2]. Allocating 32GB to 48GB ensures that large models can be loaded entirely into the GPU's memory space, maximizing the utilization of the memory bandwidth (up to 89.6 GB/s on a 128-bit DDR5-5600 bus) [3]. It is important to leave sufficient RAM (at least 16GB) for the Windows 11 operating system and background processes to ensure system stability.

## 2. Practical Quantization Levels for LLMs

Quantization is the process of reducing the precision of the model's weights (e.g., from 16-bit floating-point to 4-bit or 8-bit integers), which significantly reduces the memory footprint and memory bandwidth requirements, making it feasible to run large models on consumer hardware.

For the AMD Ryzen AI 9 HX 370, the memory bandwidth (89.6 GB/s) is the primary bottleneck for token generation speed [3]. Therefore, aggressive quantization is highly recommended to achieve usable speeds.

| Quantization Level | Bits per Weight | Memory Reduction | Quality Retention | Practicality on HX 370 |
| :--- | :--- | :--- | :--- | :--- |
| **FP16 / BF16** | 16-bit | None (Baseline) | 100% | **Impractical** for models > 14B due to VRAM limits and slow speeds. |
| **Q8_0** | 8-bit | ~50% | Near perfect | **Good** for smaller models (7B-14B) where maximum accuracy is required. |
| **Q5_K_M** | 5-bit | ~65% | Excellent | **Very Good** balance of speed and quality for mid-size models (14B-32B). |
| **Q4_K_M** | 4-bit | ~70% | Very Good | **Highly Recommended**. The sweet spot for running large models (30B+) at usable speeds. |

The **Q4_K_M** format (in GGUF) is the industry standard for local inference on hardware with limited memory bandwidth. It offers the best trade-off, significantly boosting tokens per second (t/s) while maintaining a level of reasoning and coherence that is nearly indistinguishable from the unquantized model for most practical tasks [4].

## 3. Maximum Model Sizes and Usable Speeds

The performance of an LLM is typically measured in tokens per second (t/s). For a comfortable reading experience, a speed of 10-15 t/s is generally considered the minimum usable threshold.

### Performance on the Radeon 890M iGPU

The Radeon 890M is highly capable, but its performance is strictly bound by the system's DDR5 memory bandwidth. 

*   **Small Models (7B - 14B):** Models like Llama 3.1 8B or Qwen 2.5 7B (quantized to Q4) will run exceptionally well, often exceeding **20-30 t/s** [3][5]. These are perfect for fast, interactive coding assistants or general chat.
*   **Medium Models (20B - 32B):** This is the sweet spot for the HX 370 with 64GB RAM. Models like GPT-OSS 20B or Qwen3 30B (using MoE architectures) can achieve **15-25 t/s** [5][6]. A dense 32B model at Q4 will run slower, around 10-15 t/s, which is still highly usable.
*   **Large Models (70B+):** While a 64GB system can technically load a 70B model quantized to Q4 (requiring ~40GB of VRAM), the token generation speed will drop significantly. Users report speeds of **1.5 to 3 t/s** for 70B models on this hardware [5][7]. This is generally too slow for interactive chat but may be acceptable for background batch processing or offline summarization.

### Performance on the AMD XDNA 2 NPU

The XDNA 2 NPU (capable of 50 TOPS) is designed for high-efficiency, low-power AI workloads. Recent software advancements, such as the AMD Lemonade Server and FastFlowLM, have unlocked the ability to run LLMs directly on the NPU.

*   **Efficiency:** Running models on the NPU consumes significantly less power (often under 2W) compared to the iGPU, making it ideal for battery-powered laptop use [8].
*   **Speed:** FastFlowLM reports that optimized models like Llama 3.2 3B can achieve up to **28 t/s** on the NPU, while larger MoE models like GPT-OSS 20B can reach **19 t/s** [8]. 
*   **Limitations:** The NPU currently requires specific, optimized model formats and runtimes. It is best suited for models up to 20B-30B parameters. It is not currently practical for running massive 70B models.

## 4. Specific Model Recommendations

Based on the hardware capabilities and memory bandwidth constraints, the following models are highly recommended for the Ryzen AI 9 HX 370:

1.  **Qwen 2.5 7B / Llama 3.1 8B (Q4_K_M):** The best choices for blazing-fast, everyday tasks, coding assistance, and general inquiries. They will run effortlessly on the iGPU or NPU.
2.  **Mistral NeMo 12B (Q4_K_M):** An excellent balance of speed and advanced reasoning capabilities, fitting easily within a 16GB VRAM allocation.
3.  **Qwen3 30B A3B (MoE) / GPT-OSS 20B:** These Mixture-of-Experts (MoE) models are the optimal choice for complex reasoning and coding on this hardware. Because MoE models only activate a subset of parameters per token, they require less memory bandwidth per token generated, allowing them to achieve impressive speeds (15-25 t/s) despite their large total size [3][5].
4.  **DeepSeek R1 Distill (14B or 32B):** Excellent for deep reasoning tasks. The 14B version will be very fast, while the 32B version will push the limits of interactive speed (around 10 t/s) but offer superior logic.

## 5. Recommended Tools and Runtimes

The software ecosystem for AMD hardware has matured significantly, offering several robust options for Windows 11 users.

1.  **LM Studio (with Vulkan backend):** LM Studio is the most user-friendly graphical interface for downloading and running local LLMs. For the Radeon 890M, selecting the **Vulkan** backend in LM Studio provides excellent, out-of-the-box performance without complex setup [3][9]. It efficiently utilizes the iGPU and shared memory.
2.  **Ollama:** A powerful command-line tool that is highly popular among developers. Ollama supports AMD GPUs via ROCm. Recent updates have improved ROCm support for the HX 370, allowing Ollama to effectively utilize the iGPU for fast inference [5]. It is ideal for integrating local LLMs into other applications or workflows.
3.  **AMD Lemonade Server:** AMD's official, open-source server designed specifically for Ryzen AI PCs. It provides an OpenAI-compatible API and uniquely supports **Hybrid execution**, utilizing both the NPU and iGPU simultaneously for optimized performance and power efficiency [10]. This is the recommended tool for users wanting to leverage the XDNA 2 NPU.
4.  **FastFlowLM:** A highly optimized, lightweight runtime specifically built for AMD NPUs. It offers exceptional power efficiency and speed for supported models running entirely on the NPU, making it perfect for maximizing battery life on laptops [8].

## Conclusion

The AMD Ryzen AI 9 HX 370 with 64GB of RAM is a highly capable platform for local AI. By allocating 32GB+ of RAM to the iGPU and utilizing Q4_K_M quantized models, users can achieve excellent, interactive speeds (15-30 t/s) on highly capable 8B to 30B parameter models. While 70B models are technically loadable, their slow generation speed makes them impractical for real-time use. For the best experience, users should leverage LM Studio (Vulkan) for ease of use, or AMD Lemonade Server/FastFlowLM to unlock the power-efficient capabilities of the built-in NPU.

## References

[1] Framework Community. "Framework Laptop 13 Ryzen 300 - Configuring graphics memory." https://community.frame.work/t/framework-laptop-13-ryzen-300-configuring-graphics-memory/65389
[2] Reddit r/LocalLLaMA. "How to allocate more memory for Ryzen HX 370 iGPU in Linux." https://www.reddit.com/r/LocalLLaMA/comments/1qo4t84/how_to_allocate_more_memory_for_ryzen_hx_370_igpu/
[3] Miguel Filipe. "This is how SLOW Local LLMs Are On My Framework 13 AMD Strix Point." https://msf.github.io/blogpost/local-llm-performance-framework13.html
[4] Enclave AI. "Practical GGUF Quantization Guide." https://enclaveai.app/blog/2025/11/12/practical-quantization-guide-iphone-mac-gguf/
[5] Reddit r/LocalLLaMA. "Local LLM performance on AMD Ryzen AI 9 HX 370 iGPU (Radeon 890M) or NPU." https://www.reddit.com/r/LocalLLaMA/comments/1p5dale/local_llm_performance_on_amd_ryzen_ai_9_hx_370/
[6] Rajat Pandit. "Performance over Portability? Running Local LLMs on the Asus ProArt 13." https://rajatpandit.com/running-llms-on-asus-proart-13
[7] YouTube. "Can This $500 Mini PC Run 70B AI Models!" https://www.youtube.com/watch?v=tp_iQpjSctM
[8] FastFlowLM. "The fastest, most efficient LLM inference on NPUs." https://fastflowlm.com/
[9] It's FOSS. "I Switched From Ollama And LM Studio To llama.cpp And..." https://itsfoss.com/llama-cpp/
[10] AMD Developer Central. "Unlocking a Wave of LLM Apps on Ryzen™ AI Through Lemonade Server." https://www.amd.com/en/developer/resources/technical-articles/unlocking-a-wave-of-llm-apps-on-ryzen-ai-through-lemonade-server.html
