function trocaImagem(op){
	if(op == 1){
		document.getElementById("verde").src = '../imagens/alavanca_verde_click.png';
	}
	if(op == 2){
		document.getElementById("amarelo").src = '../imagens/alavanca_amarela_click.png';
	}
	if(op == 3){
		document.getElementById("azul").src = '../imagens/alavanca_azul_click.png';
	}
	if(op == 4){
		document.getElementById("vermelho").src = '../imagens/alavanca_vermelha_click.png';
	}
}

function reverteImagem(op){
	if(op == 1){
		document.getElementById("verde").src = '../imagens/alavanca_verde.png';
	}
	if(op == 2){
		document.getElementById("amarelo").src = '../imagens/alavanca_amarela.png';
	}
	if(op == 3){
		document.getElementById("azul").src = '../imagens/alavanca_azul.png';
	}
	if(op == 4){
		document.getElementById("vermelho").src = '../imagens/alavanca_vermelha.png';
	}
}

function paginaAtual(op){
	
	if(op==1){
	document.getElementById("contorno").style.border = '4px solid rgba(255,229,45,1)';
	document.getElementById("amarelo").src = '../imagens/alavanca_amarela_click.png';
	}
	if(op==2){
	document.getElementById("contorno").style.border = '4px solid rgba(255,229,45,1)';
	document.getElementById("azul").src = '../imagens/alavanca_azul_click.png';
	}
	if(op==3){
	document.getElementById("contorno").style.border = '4px solid rgba(255,229,45,1)';
	document.getElementById("vermelho").src = '../imagens/alavanca_vermelha_click.png';
	}
}