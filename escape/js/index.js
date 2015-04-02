var name = prompt("what is your name?");

var legitanswer = 0;

	var tool = prompt("Which tool you want to use? The Swiss Army Knife or Shovel").toUpperCase();

	switch(tool) {
	  case 'KNIFE':
	   legitanswer=1;
	   var knife = prompt("Would you escape through the door, or the wall?").toUpperCase();
		       switch(knife){
		         case 'DOOR':
		        	alert("You win! You get to spank the loser!");
		         break;
		           
		         case 'WALL':
		           alert("You LOSE! You get spanked!");
		         break; 
		         
		         default:
		         alert("What do you mean? You are very stupid to say that. Please try again" );
		         
		         break;
		      }
	  break;


	  case 'SHOVEL':
	  	legitanswer=1;
	  	var shovel = prompt("Would you escape through the door or the wall?").toUpperCase();
      switch(shovel){
        case 'DOOR':
	  	alert("You LOSE! You get spanked!");
	  break;

	  case 'WALL':
	    alert("You WIN! You get to spank the loser!");}
        break;

	  default:
	  	alert("What do you mean? You are very stupid to say that. Please try again" );
		legitanswer=0;
	  break;}
// No newline at end of file