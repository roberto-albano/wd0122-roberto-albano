  function testVariable() {
            var strText = document.getElementById("textone").value;          
            var strText1 = document.getElementById("textTWO").value;
            var age = document.getElementById("age").value;
            var result = strText + ' ' + strText1 + ' ' + age;
            document.getElementById('spanResult').textContent = result;
             
        }

