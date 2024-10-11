/**
	{
		"api":1,
		"name":"Hourly to Yearly Salary",
		"description":"Calculates the yearly salary from an hourly rate and hours worked per week.",
		"author":"BooperScripts",
		"icon":"dollarsign.circle",
		"tags":"salary,calculate,job"
	}
**/

function main(state) {
    try {
        let input = state.text.trim().split(",");
        let hourlyRate = parseFloat(input[0].trim());
        let hoursPerWeek = input.length > 1 ? parseFloat(input[1].trim()) : 40; // Default to 40 hours per week if not provided
        let yearlySalary = hourlyRate * hoursPerWeek * 52; // 52 weeks in a year
        
        state.text = `Yearly Salary: $${yearlySalary.toFixed(2)}`;
    }
    catch(error) {
        state.postError("An error occurred: " + error.message);
    }
}
