
Implementation of a simplified version of the space invader game using HTML5 and JavaSript.


########################
# 		       # 
# NAME: HOJUN LIM      #
# STUDENT#: 997097332  #
# CDF: C2LIMHOJ        #
#		       #
# NAME: ZHIYONG LU     #
# STUDENT#: 999671993  #
# CDF: G3LUZHIY        #
#                      #
########################

List of Objects and functionality:

*Aliens:
- movement left to right 
- movement top to bottom 
- destruction on laser hit 
- laser firing at player
- animated explosion upon the destruction
- repeatedly reload enemies when none left + faster movement.

*Spaceship 
- movement left to right
- laser firing at enemies
- animated explosion upon the destruction

*Stars
- movement top to bottom

*Game over states
*Multi levels playable
*Score
*Lives 
*Animated space look background
*Image loaded representation of aliens, spaceship and firing

Game Instruction:

2 possible Game-over states
- if any enemy reaches the bottom of the space
- if the given initial 3 lives get exhausted 
// No winning scenario/state implemented, the goal is to get as many score as possible 
 
MultiLevel playing mode available
- the higher the level is, the more the aliens exist

Restricted player from multiple shooting;  

Menu mode: mouse interaction used.
Game mode: keyboard interaction used.

Implementation Documentation: Brief explanation of how everything works:

4 difference layers of canvas used, each represents;
- background:	var bctx, background_Canvas
- menu mode: 	var mctx, menu_Canvas
- game mode: 	var ctx, myCanvas
- score board: 	var sctx, socre_health_Canvas

4 major intervals, each used for;
- background:	 			backgroundInterval()
   // calls background(): updates and draws game background
- menu: 		 			menuInterval() //menu mode
   // calls menu(): updates and draws menu mode
- updating objects within game mode;	mainInterval()  //game mode    // calls move(): updates and draws objects existing in game mode 
- updating enemy bullet    			enemyBulletInterval()  //game mode
   // calls enemy_bullet_main(): creates enemy shooting laser

———————————————- Menu and game mode implementation ———————————————

Condition variables to be recognized before reading:
//all initially false:
when TRUE, following means:
var goodToGo: the player chose to start the game, but no desired level has been selected yet.
var game_trg (game trigger): player selected a desired level, ready for playing
var game_over: game is over

init_menu() is called very first as the main, which initialize the intervals needed for the menu mode
//while game_trg variable == false, the player is in the menu mode

step 1. when clicked on start, then goodToGo = true.
step 2. when a level is selected, then after  3 seconds of waiting time, game_trg = true.
//mouseClick() detects the clicks and make changes respect to the click event.
step3.
- init_enemy(): initializes the matrix representation of enemies.
- init_player(): initializes the player spaceship
- init(): initializes all the intervals needed for the game mode
step4. if either of two game over conditions becomes true, then
	var game_over becomes true, display game over sign and the final score.

———————————————— Background Implementation ——————————————————
“background is separated event and never gets disturbed by any other events at all time”

var stars: array containing all the stars; each star is an object.
mainly, background() calls two functions:

update(): 
- updates for each existing stars in the stars array
- at random interval, creates a new star instance and pushes into the array  
// new star is created in Star().

draw(): for each existing stars in the stars array, draw on the background canvas.





