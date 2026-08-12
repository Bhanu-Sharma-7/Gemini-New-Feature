const promptInput = document.querySelector('#promptInput')
const generateBtn = document.querySelector('#generateBtn')
const responseBox = document.querySelector('#response')
let selectedRange = null;
let selectedText = "";
const doubtButton = document.createElement('button')
doubtButton.id = 'doubtButton'
doubtButton.textContent = 'Doubt'
document.body.appendChild(doubtButton)

const doubtInput = document.createElement('input')
doubtInput.id = 'doubtInput'
doubtInput.type = 'text'
doubtInput.placeholder = "Ask your doubt..."
document.body.appendChild(doubtInput)

generateBtn.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();

    if (prompt === "") {
        return;
    }

    responseBox.textContent = "Generating..."

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3.2:3b",
                prompt: prompt,
                stream: false
            })
        })
        const data = await response.json();
        responseBox.textContent = data.response;
    } catch (error) {
        console.log(error);
        responseBox.textContent = "An error occurred while generating the response.";
    }
})

document.addEventListener('mouseup', (e) => {
    if (doubtButton.contains(e.target) || doubtInput.contains(e.target)) {
        return;
    }

    const selection = window.getSelection()
    selectedText = selection.toString().trim()

    if (selectedText === "") {
        doubtButton.style.display = "none";
        doubtInput.style.display = "none";
        return;
    }

    if (!responseBox.contains(selection.anchorNode)) {
        return;
    }

    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    selectedRange = range.cloneRange()

    doubtButton.style.left = rect.left + "px";
    doubtButton.style.top = (rect.bottom + 8) + "px";
    doubtButton.style.display = "block";

    doubtInput.style.display = "none";
})

doubtButton.addEventListener('click', () => {
    const rect = doubtButton.getBoundingClientRect();

    doubtInput.style.left = rect.left + "px";
    doubtInput.style.top = (rect.bottom + 5) + "px";

    doubtInput.style.display = "block";
    doubtInput.focus();
})

doubtInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') {
        return;
    }

    const instruction = doubtInput.value.trim();

    if (!instruction || !selectedText || !selectedRange) {
        return;
    }

    doubtInput.value = "Thinking...";

    const prompt = `
        Selected text: "${selectedText}"

        User request: "${instruction}"

        Give a very short result.
        If a simpler replacement word is appropriate, return only that word.
        Otherwise return a short explanation inside parentheses.
        Do not add extra text.
    `;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3.2:3b",
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.2,
                    num_predict: 30
                }
            })
        });

        const data = await response.json();
        const aiResult = data.response.trim();
        selectedRange.deleteContents();
        const newText = document.createTextNode(aiResult);
        selectedRange.insertNode(newText);
        doubtButton.style.display = "none";
        doubtInput.style.display = "none";
        doubtInput.value = "";
        console.log("Selected:", selectedText);
        console.log("AI:", aiResult);
    } catch (error) {
        console.error("AI Error:", error);
        doubtInput.value = "";
        doubtInput.placeholder = "AI connection failed";
    }
})