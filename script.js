const submissions = [
    {name: 'Jane', score: 95, date: 2020-01-24, passed: true},
    {name: 'Joe', score: 77, date: 2018-05-14, passed: true},
    {name: 'Jack', score: 59, date: 2019-07-05, passed: false},
    {name: 'Jill', score: 88, date: 2020-04-22, passed: true},
];


const addSubmission = (array, newName, newScore, newDate) => {
    const newScoreObject = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
    };

    array.push(newScoreObject);
};


function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 4);


const deleteSubmissionByName = function(array, name) {
    const index = array.findIndex(
        (submission) => submission.name === name
    );

    array.splice(index, 1);
}
deleteSubmissionByName(submissions, "Jill");


function editSubmission(array, index, score) {
    array[index].score = score; 
    array[index].passed = score >= 60 ? true : false;
};


const findSubmissionByName = submissions.find(array => array.name === 'Josh');

function findLowestScore(array) {
    return submissions.forEach(array.score)
};


function findAverageScore(array) {
    let average = 0;
    for (i = 0; i <= array.length; i++) {
        average += array[i];
    }
    return findAverageScore;
};


const filteredPassing = submissions.filter(array => array.passed === true);
console.log(filteredPassing);


const filter90AndAbove = submissions.filter(array => array.score >= 90);
console.log(filter90AndAbove);