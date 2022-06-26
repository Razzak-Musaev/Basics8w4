document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loan-form");
    const summa = document.getElementById("amount");
    const rate = document.getElementById("interest");
    const years = document.getElementById("years");
    const tMonth = document.getElementById("total-amount");
    const tSumma = document.getElementById("total-t");
    const tRate = document.getElementById("total-interes");
    const err = document.getElementById("erorr");
    const loader = document.getElementById("loader");
    loader.style.display = "none";
    const output = document.getElementById("output");
    output.style.display = "none";
    err.style.display = "none";
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      loader.style.display = "block";
  
      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
  
      const summaValue = summa.value;
      const rateValue = rate.value;
      const yearsValue = years.value;
  
      if (
        summaValue === "" ||
        rateValue === "" ||
        yearsValue === "" ||
        summaValue === 0 ||
        rateValue === 0 ||
        yearsValue === 0
      ) {
        err.style.display = "block";
      } else {
        output.style.display = "block";
        err.style.display = "none";
      }
  
      const month = rateValue * 12;
  
      const resultSumma = (summaValue / 100) * rateValue + Number(summaValue);
      tSumma.innerHTML = resultSumma;
  
      const resultRate = (summaValue / 100) * rateValue;
      tRate.innerHTML = resultRate;
  
      const resultMonth = resultSumma / month;
      tMonth.innerHTML = resultMonth;
    });
  });
  