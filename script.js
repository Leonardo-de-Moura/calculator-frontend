async function calcular() {
	const n1 = document.getElementById("n1").value;
	const n2 = document.getElementById("n2").value;
	const operation = document.getElementById("operation").value;
	const resultadoDiv = document.getElementById("resultado");

	resultadoDiv.innerHTML = "Calculando...";

	try {
		const response = await fetch("http://calculator-backend-b2vi.onrender.com", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ n1, n2, operation })
		});

		const data = await response.json();

		if (response.ok) {
			resultadoDiv.innerHTML = `Resultado: ${data.result}`;
		} else {
			resultadoDiv.innerHTML = `Erro: ${data.error}`;
		}
	} catch (error) {
		resultadoDiv.innerHTML = "Erro ao conectar com a API";
	}
}