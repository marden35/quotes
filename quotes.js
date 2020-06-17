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