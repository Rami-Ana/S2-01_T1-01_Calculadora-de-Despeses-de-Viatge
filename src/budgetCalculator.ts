type BudgetMessage =
  | "Sota pressupost ✈️"
  | "Dins pressupost ✅"
  | "Sobre pressupost ⚠️";

  console.log(calculateBudgetStatus(850, 1000));

export function calculateBudgetStatus(
  totalExpenses: number, 
  budget: number
):BudgetMessage {
    const percentage = (totalExpenses / budget) * 100; 
    if (percentage < 80) {
      return "Sota pressupost ✈️";
    } else if (percentage <= 100) {
      return "Dins pressupost ✅";
    } else{
      return "Sobre pressupost ⚠️";
  } 
}

