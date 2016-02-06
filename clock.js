function clockBuild() { 
    var h,m,s, text; 
 
    // Get the value of the input fields 
    m = document.getElementById("min").value; 
    s = document.getElementById("sec").value; 
    h = document.getElementById("hrs").value;

    //Convert the strings to int
    h=parseInt(h);
    m=parseInt(m);
    s=parseInt(s);
 

    

    // If x is Not a Number or less than one or greater than 10 
    if (isNaN(h) || h < 0 || h > 24||isNaN(m) || m < 0 || m > 60||isNaN(s) || s < 0 || s > 60)  
    { 
        text= "Input not valid"; 
    }  
    else if (h==null|| h=="" || m==null || m=="" || s== null || s=="") 
    { 
        text= "Please fill in all of the boxes"; 
    } 
    else 
    { 
        text = "Input valid"; 
    } 
     
    
     	document.getElementById("valid").innerHTML = text; 

 	//Set User's time on Clock
    	document.getElementById("hClock").innerHTML = h;
     	document.getElementById("mClock").innerHTML = m;  
        document.getElementById("sClock").innerHTML = s;
    	

    	//Start the clock (Only Once when user Presses button everytime)
   	startClock();
} 
 


function startClock(){

	//Get Current time in the clock that is being Displayed to user (You can also pass the variables sClock,mClock,hClock instead)
        
        m = document.getElementById("mClock").innerHTML; 
    	s = document.getElementById("sClock").innerHTML; 
    	h = document.getElementById("hClock").innerHTML;

        h=parseInt(h);
    	m=parseInt(m);
    	s=parseInt(s);
	



//This function will run every 1 second. All you need to do is increment second variable and check if it affects mins and hours
	if(s==59){	//If 59 sec
		s=0;
		if(m==59){	//If 59 sec and 59 mins
			m=0;
			if(h==23){	//If 59 sec, 59mins, and 23 hrs
				h=0;
			}
			else{
				h=h+1;
			}
		}
		else{
			m=m+1;
		}
	}
	else{
		s=s+1;
	}


	//Set the new time on clock
        document.getElementById("hClock").innerHTML = h;
        document.getElementById("mClock").innerHTML = m;
        document.getElementById("sClock").innerHTML = s;

	//Call the start Clock function every 1 second. 
    	setTimeout(function() { startClock(); }, 1000);
}
