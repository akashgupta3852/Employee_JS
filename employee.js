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
    let empDailyHrsMap = new Map();
    
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
        empDailyHrsMap.set(totalWorkingDays, empHrs);
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    
    console.log("UC8 - Employee Wage Map Total Hrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

    // UC9 - Using the Daily Wage Map and Daily Hour Map, performed the given operations using Arrow Functions 
    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }

    let count = 0;
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("UC9A - Emp Wage with Arrow: " + " Total Hours: " + totalHours + " Total Wages: " + totalSalary);
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value, key, map) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full Working Days: " + fullWorkingDays);
    console.log("Part Working Days: " + partWorkingDays);
    console.log("Non Working Days: " + nonWorkingDays);
}

// UC10 - Storing the Day, Hours Worked and Wage Earned in a single object
{
    const MAX_HRS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array();
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
            {
                dayNum: totalWorkingDays,
                dailyHours: empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString() {
                    return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = '
                        + this.dailyWage
                },
            });
    }
    console.log("UC10 - Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);

    // UC11A to UC11D - Using Object Functions along with Arrow Functions
    let totalWages = empDailyHrsAndWageArr
                     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                     .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    let totalHours = empDailyHrsAndWageArr
                     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                     .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
    console.log("UC11A - Total Hours: " + totalHours + " Total Wages: " + totalWages);

    process.stdout.write("UC11B - Logging Full Work Days");
    empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                         .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

    let partWorkingStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
    console.log("\nUC11C - PartWorkingDayStrings: " + partWorkingStrArr);

    let nonWorkingDayNums = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                            .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
    console.log("UC11D - NonWorkingDayNums: " + nonWorkingDayNums);
}