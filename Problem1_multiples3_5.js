
	/* Variables */
	var sumMultiples = 0;

	/* Iterate through all the numbers from 1 to 1000 and check if multiple of 3 or 5 */
	for(var i = 0; i<1000; i++)
	{
		/* Check if the number is a multiple of 3 or 5, then add to sumMultiples */
		if(!(i%3) || !(i%5))
			sumMultiples+=i;

	};