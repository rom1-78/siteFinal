function valider() {
	// Collecter les réponses
	const answers = document.querySelectorAll('.answer');
	var results = new Array();

	for (let i = 0; i <= 9; i++) {
		if (answers[i].checked) {
			newResults = results.push(1);
		} else {
			newResults = results.push(2);
		}
	}

	console.log(results);

	// Nombre de bonnes et mauvaises réponses
	let correct = 0;
	let incorrect = 0;

	results.forEach(e => {
		if (e === 1)
			correct += 1;
		else if (e === 2)
			incorrect += 1;
	})

	// Afficher le résultat
    const json = {
        "0": "Où se trouve le one piece ?",
        "1": "Qui est la premiere recrue de luffy ?",
        "2": "Quel est le but de luffy ?",
        "3": "Pourquoi Nico Robin est t'elle recherché par le gouvernement mondial ?",
        "4": "Qui a concu le bateau de l'equipage au chapeau de paille ?",
        "5": "Quelle est la premiere prime de luffy ?",
        "6": "Quel est le nom de leur premier bateau ?",
        "7": "Qu'est ce qui a déclenché la guerre au sommet ?",
        "8": "Combien de temps a durée l'elipse ?",
        "9": "De quelle mer est originaire luffy ?"
    };
    document.write(`<link rel="stylesheet" type="text/css" href="qcm.css">`);
	document.write(`Correction dynamique du QCM<br><br>`);
	for (let i = 0; i <= results.length - 1; i++) {
		document.write(` ${json[i]} <li>La réponse est ${results[i] == 1 ? 'correct' : 'incorrect'}</li>` + "<br>");
	}
	document.write(`${correct} bonnes réponses <br>${incorrect} mauvaises réponses <br>Score final : ${correct}/${answers.length} => ${correct/10*100}% de bonnes réponses`);
    document.write(`<br>`)
    document.write(`<input type="button" id="retour" class="button button1" value="Retour au QCM" onclick="document.location.href='qcm.html';">`)
}