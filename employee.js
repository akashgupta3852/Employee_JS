// UC1 - Checking Employee Presence
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("UC1 - Employee is Absent");
    } else {
        console.log("UC1 - Employee is Present");
    }
}

// UC2 - Calculating Employee Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC2 - Employee Wage: " + empWage);

// UC3 - Function for daily working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
 }

// UC4 - Calculating wages for a month
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("UC4 - Total Hrs: " + empHrs + " Employee Wage: " + empWage);

// UC5 - Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
{
    const MAX_HRS_IN_MONTH = 100;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 - Total Days: " + totalWorkingDays +
        " Total Hrs: " + totalEmpHrs + " Employee Wage: " + empWage);
}

//UC6 - Storing the Daily Wage along with the Total Wage
{
    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    const MAX_HRS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
        empDailyWageArr.push(calcDailyWage(totalEmpHrs));
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC6 - Total Days: " + totalWorkingDays +
        " Total Hrs: " + totalEmpHrs + " Employee Wage: " + empWage);
    console.log("Array: " + empDailyWageArr);


    //UC7A - Calculating total wage using Array forEach traversal
    let totalEmpWage = 0;
    function sum(dailyWage){
        totalEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("UC7A - Total Working days: " + totalWorkingDays + 
        " Total EmpHrs: " + totalEmpHrs + " Total EmpWages: " + totalEmpWage);

    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("UC7A - Employee Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

    //UC7B - Showing the day along with daily wage using array map helper function
    let dailyCntr = 0;
    function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("UC7B - Daily Wage Map: " + mapDayWithWageArr);

    //UC7C - Showing days when full time wage of 160 were earned
    function fullTimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
    console.log("UC7C - Daily wage filter when full time wage earned: " + fullDayWageArr);

    //UC7D - Finding the first occurance when full time wage was earned using find function
    function findFullTimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC7D - First time fulltime wage was earned on day: " + mapDayWithWageArr.find(findFullTimeWage));

    //UC7E - Checking if every element of full time wage is truely holding full time wage
    function isAllFullTimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC7E - Check all emp have full time wage: " + mapDayWithWageArr.every(isAllFullTimeWage));

    //UC7F - Checking if there is any part time wage
    function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80");
    }
    console.log("UC7F - Check if any part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

    //UC7G - Finding the number of days the employee worked
    function totaldaysWorked(numOfDays, dailyWage){
        if(dailyWage > 0) 
            return numOfDays + 1;
        return numOfDays;
    }
    console.log("UC7G - Number of days emp worked: " + empDailyWageArr.reduce(totaldaysWorked, 0));
}

//UC8 - Storing Daily Wage in a Map
{
    const MAX_HRS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
    
    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }    

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(totalEmpHrs));
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    
    console.log("UC8 - Employee Wage Map Total Hrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
}