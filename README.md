# ✨ Gemini AI 2.0 - Interactive Text Assistant & Inline Doubt Resolution

![Version](https://img.shields.io/badge/version-2.0.0-indigo.svg)
![License](https://img.shields.io/badge/license-MIT-purple.svg)
![UI](https://img.shields.io/badge/UI-Glassmorphism%20Dark-blue.svg)
![Ollama](https://img.shields.io/badge/backend-Ollama%20Local%20LLM-pink.svg)

**Gemini AI 2.0** is an interactive web-based AI response generator equipped with an innovative **Inline Text Selection & Doubt Resolution Assistant**. Built with Vanilla HTML, CSS glassmorphism aesthetics, and JavaScript, it connects directly to local LLM engines (like [Ollama](https://ollama.com)) for private, lightning-fast inference.

---

## 🌟 Key Features

- **⚡ Fast Local AI Generation**: Generate answers, creative writing, or code summaries using local models (`llama3.2:3b`).
- **💡 Interactive Inline Selection Assistant ("Doubt" Tool)**:
  - **Highlight to Query**: Select any word, phrase, or paragraph inside the AI response box.
  - **Context-Aware Tooltip**: A floating `💡 Doubt` pill dynamically aligns with your text selection.
  - **Inline Replacement & Clarification**: Ask for simpler replacement terms or quick inline explanations, and watch the AI modify the document in real time.
- **🎨 Stunning Glassmorphism Dark Interface**:
  - Animated ambient gradient light blobs (`.bg-glow`).
  - Google Fonts integration (`Outfit` and `Inter`).
  - Custom neon highlight glows (`::selection`).
  - Smooth micro-animations on focus, hover, and floating widgets.
- **📱 Fully Responsive**: Fluid container layout optimized for desktop, tablet, and mobile screens.

---

## 📸 How the Selection Assistant Works

```
┌─────────────────────────────────────────────────────────┐
│ 1. Highlight text in output                             │
│    "The quick brown fox jumps over the lazy dog"        │
│                         └─────────┘                     │
│                                                         │
│ 2. Floating Pill Appears ───> [ 💡 Doubt ]              │
│                                                         │
│ 3. Click pill to prompt ────> [ Explain in simple terms ]│
│                                                         │
│ 4. Inline AI Replacement ───> "sluggish canine"         │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Prerequisites & Setup

### 1. Install & Run Ollama

Ensure [Ollama](https://ollama.com/) is installed and running on your local machine.

Pull and run the `llama3.2:3b` model (or any compatible model of your choice):

```bash
ollama run llama3.2:3b
```

> **Note:** By default, Ollama serves requests at `http://localhost:11434`. Ensure CORS allows local web access or run locally.

### 2. Clone the Repository

```bash
git clone https://github.com/Bhanu-Sharma-7/Gemini-New-Feature.git
cd Gemini-New-Feature
```

### 3. Launch the Application

Simply open `index.html` in your browser, or serve it using a local HTTP server:

#### Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

#### Using VS Code:
Right-click `index.html` and select **"Open with Live Server"**.

---

## 📁 Project Structure

```
Gemini-New-Feature/
├── index.html      # Glassmorphic UI container & semantic markup
├── style.css       # Design system, CSS variables, glass effects & keyframe animations
├── script.js       # AI API integration, selection listener & floating doubt logic
├── README.md       # Project documentation & setup guide
└── LICENSE         # MIT Open Source License
```

---

## ⚙️ Configuration & Customization

You can customize the model name or API endpoint directly inside [`script.js`](file:///d:/VS%20Code/Gemini-New-Feature/script.js):

- **Model Selection**: Change `"model": "llama3.2:3b"` to any local model installed in your Ollama setup (e.g., `mistral`, `gemma:2b`, `llama3`).
- **Endpoint**: Update `"http://localhost:11434/api/generate"` if your server is running on a different port or host.

---

## 📜 License

Distributed under the [MIT License](LICENSE). Built for interactive AI feature experimentation.
