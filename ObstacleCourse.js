//Programmer: Aren Gay\
//Team Member: Jordan Gibbs\
//Bolt ID:B0D0
//Date: 4.24.24
//Program: Obstacle Course
//Program URL:  https://edu.sphero.com/program/16752513/edit

async function startProgram() {
	await roll((getHeading() + 0), 60, 1.7);
	await delay(1);

	await roll((getHeading() + 90), 10, 2);
	await delay(1);

	await roll((getHeading() + 0), 50,1.4);
	await delay(1);
}