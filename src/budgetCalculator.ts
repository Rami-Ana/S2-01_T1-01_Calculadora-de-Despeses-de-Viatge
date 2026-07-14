type BudgetMessage =
  | "Sota pressupost ✈️"
  | "Dins pressupost ✅"
  | "Sobre pressupost ⚠️";


  console.log(calculateBudgetStatus(850, 1000));

//Utilitzar ESM (mòduls) amb tipat:
// export function calculateBudgetStatus(...)

function calculateBudgetStatus(
  totalExpenses: number, 
  budget: number
) 
  :BudgetMessage {
    const percentage = (totalExpenses / budget) * 100; 
    if (percentage < 80) {
      return "Sota pressupost ✈️";
    } else if (percentage <= 100) {
      return "Dins pressupost ✅";
    } else{
      return "Sobre pressupost ⚠️";
  } 
}



// let totalExpenses = document.getElementById("gastos").value;
// let budget = document.getElementById("presupuesto").value;

// let result = calculateBudgetStatus(totalExpenses ,budget); 

// function calculateBudgetStatus  (totalExpenses ,budget ){
// const result = (totalExpenses / budget) * 100; 

// if ( result < 80 ){
// return alert("Sota pressupost ✈️")
// } if else(result > 80 && result < 100){
// return alert("Dins pressupost ✅")
// }else{
// return alert("Sobre pressupost ⚠️")
// }
// }