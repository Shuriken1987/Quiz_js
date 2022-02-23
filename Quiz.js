class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalPoints = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer) {
        if (answer === this.getCurrentQuestion().answer) {
            this.score += this.getCurrentQuestion().points;
        }
        this.currentQuestionIndex++;
    }

    isEnd() {
        return this.currentQuestionIndex === this.questions.length;
    }

    questionsCounter() {
        return this.currentQuestionIndex + 1 + '/' + this.questions.length;
    }

    questionsTotalPoints() {
        for (let i = 0; i < this.questions.length; i++) {
            this.totalPoints += this.questions[i].points;
        }
        return this.totalPoints;
    }
}

let xml = new XMLHttpRequest();
xml.open('get', 'questions.json');
xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
        let db = JSON.parse(xml.responseText);
        let quiz = new Quiz(db);
        mainCode(quiz);
    }
};
xml.send();


