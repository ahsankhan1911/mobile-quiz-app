class QuizDataStore {

    radioButtonArrayUI = []

    quizData = []

    getQuizData () {

      return  fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    } 

    manupilateQuizData () {
        
    }

}

const store = new QuizDataStore();

export default store;