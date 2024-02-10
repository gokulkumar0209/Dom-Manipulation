// Variables
let btn=document.querySelector('#new-quote');
let quoteclass=document.querySelector('.quote');
let presonclass=document.querySelector('.person')

const quotes = [
    { 
        quote: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு",
        person: "திருவள்ளுவர்"
    },
    {
        quote: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்\nநற்றாள் தொழாஅர் எனின்",
        person: "Thiruvalluvar"
    },
    {
        quote: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்\nநிலமிசை நீடுவாழ் வார்",
        person: "Thiruvalluvar"
    },
    {
        quote: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பை இல",
        person: "Thiruvalluvar"
    },
    {
        quote: "இருள்சேர் இருவினையும் சேரா இறைவன்\nபொருள்சேர் புகழ்புரிந்தார் மாட்டு",
        person: "திருவள்ளுவர்"
    },
    {
        quote: "பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க\nநெறிநின்றார் நீடுவாழ் வார்",
        person: "திருவள்ளுவர்"
    },
    {
        quote: "தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்\nமனக்கவலை மாற்றல் அரிது",
        person: "திருவள்ளுவர்"
    },
    {
        quote: "அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்\nபிறவாழி நீந்தல் அரிது",
        person: "திருவள்ளுவர்"
    },
    {
        quote: "கோளில் பொறியின் குணமிலவே எண்குணத்தான்\nதாளை வணங்காத் தலை",
        person: "திருவள்ளுவர்"
    },
    {
        quote: "பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்\nஇறைவன் அடிசேரா தார்",
        person: "திருவள்ளுவர்"
    }
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    quoteclass.innerText=quotes[random].quote;
    presonclass.innerText=quotes[random].person;
})