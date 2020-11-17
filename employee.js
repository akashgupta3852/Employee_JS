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
}