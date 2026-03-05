# Trabalho Final Angular

1) O que é rota dinâmica?
R: Uma rota dinâmica é uma rota que possui parâmetros variáveis na URL, permitindo carregar conteúdos diferentes usando o mesmo componente. No exemplo da atividade, quando clico no botão "mais detalhes" do primeiro contato, vai para uma página em que carrega os detalhes referentes a essa pessoa, e se eu clicar em outro contato, vão carregar detalhes diferentes correspondendo a quem cliquei.

2) O que é paramMap?
R: paramMap é um recurso do roteador do Angular usado para acessar os parâmetros presentes na URL de uma rota, especialmente em rotas dinâmicas. Nessa atividade acessamos os detalhes de cada usuário colocando a ID do mesmo na url, ou apertando o botão "mais detalhes" ao lado do contato escolhido. Isso é dinâmico, cada contato terá seus detalhes e por isso a página a ser carregada terá informações diferentes.

3) Onde usei Observable e por quê?
R: Usei primeiro quando usei o paramMap. Esse objeto funciona como um Observable porque o Angular precisa observar mudanças na rota. O segundo uso acontece quando eu chamo o método do UserService pra buscar o usuário pelo ID. Esse método retorna um Observable porque a busca de dados envolve uma requisição HTTP para uma API (por termos usado uma API publica), que não acontece instantaneamente. O Observable permite que o Angular aguarde a resposta do servidor e execute funções quando os dados chegam.
Resumindo, usei Observable porque tanto os parâmetros da rota quanto a resposta da API podem levar um tempinho pra chegar. O observable permite que o angular "observe" esses eventos e execute ações quando os valores são recebidos ou quando ocorre algum erro. 
