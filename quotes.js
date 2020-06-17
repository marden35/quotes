var quotesArray = [
{
	message: "Aiutatemi ad aiutarvi",
	author: "AT"
},
{
	message: "Tout Court",
	author: "AT"
},
{
	message: "Troietta!",
	author: "SD"
},
{
	message: "Io sono Batman",
	author: "MF"
},
{
	message: "Thread!",
	author: "LM"
},
{
	message: "Facciamo un forum",
	author: "LM"
},
{
	message: "Mi chiedevo se anche voi sentivate l'esigenza di un sistema più automatizzato di notifiche di questi rilasci, come noi abbiamo fatto con il webhook su Slack",
	author: "AG"
},
{
	message: "Aiutatemi",
	author: "AT"
},
{
	message: "Non voglio farti perdere ulteriore tempo, grazie infinite",
	author: "AT"
},
{
	message: "Perdonami, sono duro di comprendonio",
	author: "AT"
},
{
	message: "Ragazzi nella card di offerte il 'te' deve essere minuscolo non maiuscolo, come scritto in sidebar",
	author: "Sconosciuto, il giorno del rilascio"
},
{
	message: "Ragazzi sia in home che in fatture 'Altri prodotti' deve andare con la 'p' minuscola",
	author: "Sconosciuto, il giorno del rilascio"
},
{
	message: "Kotlin!!!1!11!!",
	author: "AG"
},
{
	message: "CIRO CIRO CIRO CIRO CIRO CIRO",
	author: "Il Team"
},
{
	message: "sul cliente in oggetto nel momento in cui passa alla versione beta del wsc il cognome passa da LUPO a MERLUZZO. Ho escluso qualsiasi anomalia di disallineamento tra codice contratto e codice cliente, inoltre non abbiamo nessun Merluzzo in anagrafica.",
	author: "Sconosciuto, il giorno del rilascio"
}
];

var quoteCard = new Vue({
	el: '#quoteCard',
	data: {
		message: null,
		author: null,
		quotes: quotesArray
	},
	methods: {
		random: function() {
			var random = Math.floor(Math.random() * this.quotes.length);
			this.message = this.quotes[random].message;
			this.author = this.quotes[random].author;
		}
	},
	created(){
		this.random()
	},
})
