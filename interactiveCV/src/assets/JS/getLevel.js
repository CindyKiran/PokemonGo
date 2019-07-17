//-------------Level Up Javascript------------------


let bday = "1990,09,09"; // <------ enter here your birthday YYYY,MM,DD

//seperate given birthday into day, month, and year
let bdayYear =	parseInt(bday.substring(0,4), 10);
let bdayMonth=	parseInt(bday.substring(5,7), 10);
let bdayDate =	parseInt(bday.substring(8,10), 10);
let birthdate =	new Date(bdayYear, bdayMonth, bdayDate); //create date object

//seperate current date into day, month, and year
let today =			new Date();
let todayYear =		today.getFullYear();
let todayMonth =	today.getMonth()+1; //+1 because months starts at 0
let todayDate =		today.getDate();


//calculate how close your next bday is based on curent date
function getLevelBar() {
	
	let dateB, dateA, daysLeft, levelBar;
	dateA = moment([todayYear, todayMonth, todayDate]);
	
	if(todayMonth >= bdayMonth){
		if(todayDate >= bdayDate){
			dateB = moment([todayYear+1, bdayMonth, bdayDate]);
		} else {
			dateB = moment([todayYear, bdayMonth, bdayDate]);
		}
	} else {
		dateB = moment([todayYear, bdayMonth, bdayDate]);
	}
	
	//calculate difference between dateA and dateB
	daysLeft = dateB.diff(dateA, 'days');
	levelBar = 1 -(daysLeft/366); //in decimal percentage
	return levelBar;
}

//calculate your age
function getLevel(){
	let level;
	if(todayMonth >= bdayMonth){
		if(todayDate >= bdayDate){
			level = todayYear - bdayYear;
		} else {
			level = (todayYear - bdayYear)-1;
		}
	} else {
		level = (todayYear - bdayYear)-1;
	}
	return level;
}