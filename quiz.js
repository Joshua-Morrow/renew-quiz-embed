function submitQuiz() {
    const form = document.getElementById('quizForm');
    const questions = form.querySelectorAll('.question');
    let scores = {
        Category1: { correct: 0, total: 0 },
        Category2: { correct: 0, total: 0 },
        Category3: { correct: 0, total: 0 },
        Category4: { correct: 0, total: 0 }
    };

    questions.forEach(question => {
        const inputs = question.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            if (input.checked) {
                const category = input.value;
                const isCorrect = input.getAttribute('data-correct') === 'true';

                scores[category].total++;
                if (isCorrect) {
                    scores[category].correct++;
                }
            }
        });
    });

    displayResults(scores);
}

function displayResults(scores) {
    let resultText = '';
    for (let category in scores) {
        const score = scores[category];
        const percentage = (score.correct / score.total) * 100;
        resultText += `${category}: ${percentage.toFixed(2)}%<br>`;
    }
    document.getElementById('results').innerHTML = resultText;
}