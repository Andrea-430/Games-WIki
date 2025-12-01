const TitoloCercato = document.getElementById("Input");
const ListaGiochi = document.querySelectorAll("#Griglia .collegamenti");

TitoloCercato.addEventListener("keydown", ricerca);


function ricerca(evento)
{
    if(evento.key === "Enter")
    {
        const filtro = TitoloCercato.value.toLowerCase();
        for(let i = 0; i < ListaGiochi.length; i++)
        {
            const link = ListaGiochi[i];
            const titolo = link.dataset.titolo.toLowerCase();

            if(titolo.includes(filtro))
            {
                link.style.display = "";
            }
            else
            {
                link.style.display = "none"
            }
        }
    }
}
