//-------------Level Up Javascript------------------


let bday = "1990,07,09"; // <------ enter here your birthday in "YYYY,MM,DD"

//seperate given bday into day, month, and year
	let bdayYear =	parseInt(bday.substring(0,4), 10);
	let bdayMonth=	(parseInt(bday.substring(5,7), 10)-1); //month starts at 0
	let bdayDate =	parseInt(bday.substring(8,10), 10);
//create date object
	let birthdate =	new Date(bdayYear, bdayMonth, bdayDate); 

//print out birthdate
	console.log("Entered birthdate: " + birthdate);

//seperate current date into day, month, and year
	let today =			new Date();
	let todayYear =		today.getFullYear();
	let todayMonth =	today.getMonth();
	let todayDate =		today.getDate();

//print out todays date
	console.log("Today: " + today);



//calculate how close your next bday is based on current date
function getLevelBar() {
	let dateB, dateA, daysLeft, levelBar;
	
	//compare difference with this date to dateB
	dateA = moment([todayYear, todayMonth, todayDate]);
	console.log("dateA: " + moment(dateA).format('MM/DD/YYYY'));
	
	//decide what dateB should be
	if(todayMonth < bdayMonth) {		
	//if todayMonth is before bdayMonth
		dateB = moment([todayYear, bdayMonth, bdayDate]);
	}
	else if(todayMonth == bdayMonth) {
	//if todayMonth is same as bdayMonth
		if (todayDate < bdayDate) {		
		//if birthday not passed yet
			dateB = moment([todayYear, bdayMonth, bdayDate]);
		}
		else {							
		//if birthday already passed
			dateB = moment([todayYear+1, bdayMonth, bdayDate]);
		}
	} 
	else {								
	//if todayMonth passed the bdayMonth
		dateB = moment([todayYear+1, bdayMonth, bdayDate]);
	}
	
	console.log("dateB: " + moment(dateB).format('MM/DD/YYYY'));
	
	//calculate difference between dateA and dateB
	daysLeft = dateB.diff(dateA, 'days');
	console.log("days left:" + daysLeft);
	levelBar = 1 -(daysLeft/366); //in decimal percentage
	console.log("Level Bar: " + levelBar);
	return levelBar;
}

//calculate your age
function getLevel(){
	let level;
	
	if(todayMonth < bdayMonth) {
	//if todayMonth is before bdayMonth
		level = (todayYear - bdayYear)-1;
	}
	else if(todayMonth == bdayMonth) {
	//if todayMonth is same as bdayMonth
		if (todayDate < bdayDate) {
		//if birthday not passed yet
			level = (todayYear - bdayYear)-1;
		}
		else {
		//if birtday passed
			level = (todayYear - bdayYear);
		}
	} 
	else {
	//if todayMonth passed the bdayMonth		
		level = (todayYear - bdayYear);
	}
	
	return level;
}