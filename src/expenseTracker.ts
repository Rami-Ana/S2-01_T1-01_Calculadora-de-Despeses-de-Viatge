export interface ExpenseReport {
    travelDays: number;           
    expenseDays: number;         
    dailyBudget: number;         
    averageDailyExpense: number;  
    underBudget: boolean;        
    rating: 1 | 2 | 3;            
    feedback: string;              
}


export function generateExpenseReport(dailyExpenses: number[], dailyBudget: number): ExpenseReport {

    if (dailyExpenses.some(expense => expense < 0)) {
        throw new Error("Les despeses no poden ser negatives")
    }

    const travelDays = dailyExpenses.length;
    const expenseDays = dailyExpenses.filter(expense => expense > 0).length;
    const totalExpenses = dailyExpenses.reduce((sum, expense) => sum + expense, 0);
   
   
    const averageDailyExpense = totalExpenses / travelDays;

    const underBudget = averageDailyExpense <= dailyBudget;


    let rating: 1 | 2 | 3;
    let feedback: string;

    if (averageDailyExpense <= dailyBudget) {
        rating = 3;
        feedback = "Excel·lent gestió!";
    } else if (averageDailyExpense <= dailyBudget * 1.2) {
        rating = 2;
        feedback = "Correcte, però ajustat";
    } else {
        rating = 1;
        feedback = "Pot millorar";
    }

    return {
        travelDays,
        expenseDays,
        dailyBudget,
        averageDailyExpense,
        underBudget,
        rating,
        feedback
    };


}

console.log(generateExpenseReport([50, 0, 120, 85], 100));

