const billInput = document.querySelector('.bill');
const numberOfPeople = document.querySelector('.num');
const customTip = document.querySelector('.customTip');
const tipButtons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset');
const tipAmountPerPerson = document.querySelector('.tip-amount');
const totalAmountPerPerson = document.querySelector('.total-amount');
const errorMsg = document.querySelector('.errMsg');

tipButtons.forEach((btn) => {
    btn.addEventListener('click',() => {
        let bill = billInput.value;

        if(bill=='' || numberOfPeople.value ==''){
          bill = 0;
        }
        else{
          const totalTip = (bill*btn.value);

          tipAmountPerPerson.textContent = '$' + Math.floor((totalTip/numberOfPeople.value) * 100) / 100;
            
          totalAmountPerPerson.textContent = '$' + Math.round(((+bill + totalTip)/numberOfPeople.value) * 100) / 100;    
        
        }
    });
  });

  customTip.addEventListener('input', () => {
    const bill = billInput.value;
    const totalTip = (bill*(customTip.value/100));

            tipAmountPerPerson.textContent = '$' + Math.floor((totalTip/numberOfPeople.value) * 100) / 100;

            totalAmountPerPerson.textContent = '$' + Math.round(((+bill + totalTip)/numberOfPeople.value) * 100) / 100;
  });

  resetBtn.addEventListener('click', () => {
      tipAmountPerPerson.textContent = '$0';
      totalAmountPerPerson.textContent = '$0';
      billInput.value = '';
      numberOfPeople.value = '';
      customTip.value = '';
  });

  numberOfPeople.addEventListener('input', () => {
    if(numberOfPeople.value != 0 || numberOfPeople.value == '' ){
        numberOfPeople.style.borderColor="hsl(172, 67%, 45%)"
        errorMsg.innerText = ""
       }
       else if(numberOfPeople.value == 0){
        numberOfPeople.style.borderColor ="hsl(353, 69%, 44%)";
        errorMsg.innerText = "Can't be zero"
       }
  })
