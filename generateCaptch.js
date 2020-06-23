
         function generateCaptcha()
         {
             var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','@','#','$','%','^','&','*','+','1','2','3','4','5','6','7','8','9','0');
             var i;
             for (i=0;i<4;i++){
               var a = alpha[Math.floor(Math.random() * alpha.length)];
               var b = alpha[Math.floor(Math.random() * alpha.length)];
               var c = alpha[Math.floor(Math.random() * alpha.length)];
               var d = alpha[Math.floor(Math.random() * alpha.length)];
               var e = alpha[Math.floor(Math.random() * alpha.length)];
               var f = alpha[Math.floor(Math.random() * alpha.length)];
              }
            var code = a + '' + b + '' + '' + c + '' + d + '' + e + '' + f;
            document.getElementById("mainCaptcha").value = code
          }
         
         
          function CheckValidCaptcha(){
              var string1 = removeSpaces(window.document.forms.farmerLoginForm.mainCaptcha.value);
              var string2 = removeSpaces(window.document.forms.farmerLoginForm.txtInput.value);
              if (string1 == string2){
         
                return true;
              }
              else{       
                return false;
              }
          }
          
          
          function removeSpaces(string){
            return string.split(' ').join('');
          }
          
          
          function checkUname()
          {
          	with(window.document.forms.farmerLoginForm)
          	{
          		
          	}
          }
          
          
          
          
          
          function checkLength(e)
          {	
          	if(e.length!=0)
          	{
          		if(e.length<8)
          			{
          			alert("Password Should contain atlest 8 characters")
          			return false;
          			}
          	}	
          }
          
          
          function Display()
          {
          	with(window.document.forms.farmerLoginForm)
          	{
          			if(farmerUserName.value==""||farmerUserName.value==null)
          			{
          			alert("UserName Should Not Empty")
          			}
          	}
          }
          
          
          function nullInput(e)
          {
          	with(window.document.forms.farmerUserLogin)
          	{
          	//	farmerUserName.value="";
          	}
          }
          
          
          function confirmPassword()
          {
          	with(window.document.forms.farmerLoginForm)
          	{
          		if((firstEnteredPass.value!=""&&confirmedPass.value!=""))
          		{
          		//firstEnteredPassword.style.backgroundColor="red";
          		if(firstEnteredPass.value==confirmedPass.value)
          			{
          				
          			}
          		else
          			{
          				alert("Password Doesnt Match")
          				return false;
          			}
          		}
          	}
          }
          
          
          function checkFormFilling()
          {
          	var x=0;
          	var a="You Can't Submit Form!!! Please Enter ";
          	if(false==CheckValidCaptcha())
          	{
          		x=1;	
          		a=a+"Validate Captcha Correctly";
          	}
          if(false==confirmPassword())
          	{
          		x=1;
          		a=a+" Confirm Password Fiels Correctly";
          	}
          	with(window.document.forms.farmerLoginForm)
          	{
          		if(farmerUserName.value==null||farmerUserName.value=="")
          			{
          				a=a+"Username";
          				x=1;
          			}
          		if(firstEnteredPass.value==null||firstEnteredPass.value=="")
          			{
          				a=a+" Password";
          				x=1;
          			}
          		if(confirmedPass.value==null||confirmedPass.value=="")
          			{
          				a=a+" and confirm Your Password";
          				x=1;
          			}
          		
          		if(false==checkLength(firstEnteredPass.value))
          			{
          				a=a+" Password With Length of 8 characters";
          				x=1;
          			}
          				
          		}
          	if(x==1)
          	{
          		alert(a)
          		return false;
          	}
          	else
          	{
          			alert("Sighned up successfully")
          			return true;
          	}
          	}