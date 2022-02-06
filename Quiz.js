class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.paragraph = '';
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
    questionCounter() {
        return this.paragraph = this.currentQuestionIndex + 1 + '/' + this.questions.length;
    }
    QuestionsTotalPoints(){
        for (let i = 0; i < questions.length; i++) {
            this.totalPoints += questions[i].points;
        }
        return this.totalPoints;
    }
}

let quiz = new Quiz(questions);