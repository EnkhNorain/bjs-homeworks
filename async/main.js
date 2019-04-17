
function setAlarm(time, callback) {
	return (currentTime) => (currentTime !== time) || callback();
}

function setDailyRhythm(wakeTime = '6:00', sleepTime = '22:30') {
	const checkTime = setAlarm(wakeTime, goodMorning);

	const NightTime = setAlarm(sleepTime, goodNight);
	
	setInterval(() => {
		const nowTime = String(new Date()).substring(16, 21);
		checkTime(nowTime); 
		NightTime(nowTime); }, 1000);
}

const goodMorning = () => alert('Доброе утро, Вася');
const goodNight = () => alert('Спокойной ночи, Вася!');

setDailyRhythm('6:00', '22:30');
