/*Barra de pesquisa*/
    function search() {
        var input=document.getElementById('searchInput').ariaValueMax.toLowerCase();
        var resultsSearch=document.getElementById('results');

        resultsSearch.innerHTML=''; /*limpar pesquisas anteriores*/
    
        var items = ["", "", "", "", ""]; /*itens para pesquisar incluir depois*/
   
        items.forEach(function(item){
            if(item.toUpperCase().includes(input)) {
                var result = document.createElement('p');
                result.textContent=item;
                resultsSearch.appendChild(result);
            }
        })
    }
/**/


