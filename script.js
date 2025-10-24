const quiz = [

    //Question 1
    {question:`Who has won the most golf majors of all time?`,
    choices:[`Tiger Woods`, `Ben Hogan`, `Jack Nicklaus`, `Phil Mickelson`],
    answer:`Jack Nicklaus`,
    },

     //Question 2
    {question:`What country is home to the Amazon Rainforest`,
    choices:[`Argentina`, `Brazil`, `Mexxico`,  `Australia`],
    answer:`Brazil`,
    },
    
     //Question 3
    {question:`What  U.S. state is known as the sunshine state?`,
    choices:[`Florida`, `Texas`, `Georgia`, `California`],
    answer:`Florida`,
    },

     //Question 4
    {question:`Where did the Olympic games originate?`,
    choices:[`Olympia`, `Athens`, `London`, `Berlin`],
    answer:`Athens`,
    },

     //Question 5
    {question:`What is the largest bone in the human body?`,
    choices:[`Humerus`, `Tibia`, `Pelvis`, `Femur`],
    answer:`Femur`,
    },

     //Question 6
    {question:`What is the liquid inside a thermometer?`,
    choices:[`Mercury`, `Water`, `Boron`, `Melted Iron`],
    answer:`Mercury`,
    },

     //Question 7
    {question:`Who wrote the Harry Potter series?`,
    choices:[`Roald Dahl`, `William Skakespeare`, `J.K. Rowling`, `Suzanne Collins`],
    answer:`J.K. Rowling`,
    },

     //Question 8
    {question:`Which of the following is NOT one of the seven wonders of the world?`,
    choices:[`Christ the Redeemer`, `Great Wall of China`, `Machu Picchu`, `Statue of Liberty`],
    answer:`Statue of Liberty`,
    },

     //Question 9
    {question:`How many degrees do all three angles of a triangle add up to?`,
    choices:[`360`, `180`, `90`, `720`],
    answer:`180`,
    },

     //Question 10
    {question:`What part of the plant conducts photosynthesis?`,
    choices:[`Petals`, `Stem`, `Roots`, `Leaves`],
    answer:`Leaves`,
    }
]

let currentQuestion = 0
let score = 0

const questionEl = document.getElementById("question")
const optionsEl = document.getElementById("answerChoices")
const submitBtn = document.getElementById("submitBtn")
const restartBtn = document.getElementById("restartBtn")
const scoreEl = document.getElementById("score")

function loadQuestion() {
    const currentQuiz = quiz[currentQuestion]
    questionEl.textContent = currentQuiz.question
    optionsEl.innerHTML = ""

    currentQuiz.choices.forEach(choice => {
        const label = document.createElement("label")
        label.classList.add("option")
        label.innerHTML = `
            <input type="radio" name="answer" value="${choice}">
            ${choice}
        `
        optionsEl.appendChild(label)
    })
}

function getSelected() {
    const radios = document.querySelectorAll("input[name='answer']")
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value
        }
    }
    return null;
}

submitBtn.addEventListener("click", () => {
    const selected = getSelected()
    if (!selected) {
        alert("Please select an answer before continuing!")
        return
    }

    if (selected === quiz[currentQuestion].answer) {
        score++
    }

    currentQuestion++

    if (currentQuestion < quiz.length) {
        loadQuestion()
    } else {
        showScore()
    }
})

function showScore() {
    questionEl.textContent = "Quiz Completed!"
    optionsEl.innerHTML = ""
    submitBtn.style.display = "none"
    restartBtn.style.display = "inline-block"
    scoreEl.textContent = `Your Score: ${score} / ${quiz.length}`
}

restartBtn.addEventListener("click", () => {
    location.reload()
})

loadQuestion()