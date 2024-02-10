// Variables
let btn=document.querySelector('#new-quote');
let quoteclass=document.querySelector('.quote');
let presonclass=document.querySelector('.person')

const quotes = [
    { 
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
    },
    {
        quote: "பொருளாதாரம் உடைத்திடும் உட்கார்க்கை ஒருவன்\nபொருளாதாரத் தானே வரும்.",
        person: "திருவள்ளுவர்"
    }
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    quoteclass.innerText=quotes[random].quote;
    presonclass.innerText=quotes[random].person;
})