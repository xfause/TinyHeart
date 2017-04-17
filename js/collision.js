// pending distance
function momFruitsCollision()
{
	if (data.gameOver == false)
	{
		for (var i=0;i<fruit.num;i++)
		{
			if (fruit.alive[i])
			{
				// calc len
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if (l<900)
				{
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if (mom.momBodyCount > 7)
						mom.momBodyCount = 7;
					if (fruit.fruitType[i] == "blue")
					{
						data.double = 2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
}
// mom baby collision
function momBabyCollision()
{
	if (data.fruitNum>0 && data.gameOver == false)
	{
		var l = calLength2(baby.x,baby.y,mom.x,mom.y);
		if (l<900)
		{
			// baby recover
			baby.babyBodyCount = 0;
			mom.momBodyCount = 0;
			// score update
			data.addScore();
			// draw halo
			halo.born(baby.x,baby.y);
		}
	}
}