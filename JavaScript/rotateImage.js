const rotateImage = (matrix) => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if (i === j) break;

			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		matrix[i] = matrix[i].reverse();
	}
};
