var floatAge, floatDays, floatMonths, intWeeks, intFortnights
     floatAge = parseFloat(prompt("Age (in years)")).toFixed(5);
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14)

     alert("Your age calculations are ready! \n Your inputted age in years: "+ floatAge + "\n Your age in days: " +floatDays +"\n Your age in months: " +  floatMonths +  "\n Your age in weeks: " +  intWeeks + "\n Your age in fortnights: " +  intFortnights + "\n \n Thank you for using the age calculator! Goodbye!");

     /* 
This program calculates age in a variety of ways and then outputs the results back to the user.
Line breaks are added for a cleaner look when displaying the results. In addition, float type variables
are rounded up to 2 decimal places to be concise, with the exception of the user's input in case a user would prefer to be very specific
about their exact age.
     */