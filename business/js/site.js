    $(document).ready(function() { 
      $("#end").click(function() { 
        // Отображаем скрытый блок 
 		$("#forma").fadeOut(); // fadeOut - плавное исчезновение 
        return false; // не производить переход по ссылке
      }); 

      $("#to").click(function() {
      	$("#forma").fadeIn();
      	return false;
      })
    }); // end of ready() 