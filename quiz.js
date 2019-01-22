const questions = [
    {
        question: "What is Athena's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    },
    {
        question: "What is 10 + 18?",
        options: ["8", "20", "28", "30"],
        answer: "28"
    },
    {
        question: "What is 10 -2?",
        options: ["8", "20", "28", "30"],
        answer: "8"
    },
    {
        question: "What is 10 + 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "30"
    },
    {
        question: "What is roche's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    }, {
        question: "What is aj's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {



    document.querySelector("#question").innerHTML = questions[question_number].question;
    options = document.querySelector("#options")
    options.innerHTML = ''

    questions[question_number].options.forEach(option => {
        options.innerHTML += `<button class="option">${option}</button>`;

    });


    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {

            if (option.textContent == questions[question_number].answer) {

                question_number++;
                correct++
                document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;

                check()

            }
            else {
                question_number++;
                document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;


                check()
            }

        }
    });
}
function gameover() {

    document.querySelector("#question").innerHTML = "quiz completed";
    document.querySelector("#options").innerHTML = '';
    document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;

}

function check() {

    if (question_number == questions.length) {
        gameover()
    }
    else {
        load_question()
    }
}