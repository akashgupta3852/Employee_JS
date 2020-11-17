// UC1 - Checking Employee Presence
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }
}

// UC2 - Calculating Employee Wage
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee Wage: " + empWage);

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
}