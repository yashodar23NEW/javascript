let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

        function displayCalculation(){
          document.querySelector('.js-calk')
          .innerHTML=calculation;
        }
      
