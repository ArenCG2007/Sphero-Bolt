//Programmer: Aren Gay\
//Team Member: Jordan Gibbs\
//Bolt ID:B0D0
//Date: 4.30.24
//Program: Maze Competition
//Program URL:https://edu.sphero.com/program/16788338/edit
async function startProgram() {
	// Programmer: Aren Gay - Start Text & Audio Commit - Date: 4.30.24
	await scrollMatrixText ("program started", {r: 66, g: 56, b: 255}, 30, true)
	await speak("program started", true);



	//Programmer: Aren Gay  - Blue LED Checkpoint Commit - Date: 5.1.24
	await roll((getHeading() + 0), 68, 2.2);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 255 });

	//Programmer: Aren Gay    - Sound One Checkpoint Commit - Date: 5.1.24
	await roll((getHeading() + 90), 70, 1.6);
	await Sound.Animal.Alligator.play(true);


	//Programmer: Jordan Gibbs         - Red LED Checkpoint Commit - Date: 5.2.24
	await roll((getHeading() + 90), 60, 1.3);
	await delay(1);
	setMainLed({ r: 255, g: 0, b: 0 });
	await roll((getHeading() + 33), 60, 1.1);

	//Programmer: Aren Gay    - Sound Two Checkpoint Commit - Date:
	await roll((getHeading() + 270), 40, .6);
	await roll((getHeading() + 270), 60, 1.3);
	await Sound.Animal.Lion.play(true);


	//Programmer:          - Green LED Checkpoint Commit - Date:



	//Programmer:          - Purple LED & Sound Three Checkpoint Commit - Date:


	//Programmer:          - Finish Text & Audio Commit - Date:




}