function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {

    let now = Date.now();
    let dateOfBirth = new Date(birthday);
    let born = dateOfBirth.getTime();
    let diff = now - born;
    let miliSecYear = ((3 * 31536000000) + 31622400000) / 4;
    let age = Math.round(diff / miliSecYear);

    return age >= 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (sound === undefined) {
        return null;
        } else {
            return sound;
        }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += parseInt(marks[i]);
    }

    const average = sum / marks.length;
    const roundedAverage = Math.round(average);

    return roundedAverage;
}