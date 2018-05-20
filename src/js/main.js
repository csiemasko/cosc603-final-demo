var _v = new Vue({
    el: '#root',
    filters: {
    },
    data: {
        sources: {
            multiAnimal: [
                {text:'cat',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/440px-Kittyply_edit1.jpg'},
                {text:'bat',img:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Golden_crowned_fruit_bat.jpg'},
                {text: 'dog', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Golden_Retriever_medium-to-light-coat.jpg/440px-Golden_Retriever_medium-to-light-coat.jpg'},
                {text:'bird',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Red_Lory_%28Eos_bornea%29-6.jpg/340px-Red_Lory_%28Eos_bornea%29-6.jpg'},
                {text:'snake',img:'https://upload.wikimedia.org/wikipedia/commons/a/aa/Red_milk_snake.JPG'},
                {text:'tiger',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Royal_Bengal_Tiger_at_Kanha_National_Park.jpg/440px-Royal_Bengal_Tiger_at_Kanha_National_Park.jpg'},
                {text: 'shark', img: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tibur%C3%B3n.jpg'},
                {text:'rat',img:'https://upload.wikimedia.org/wikipedia/commons/0/01/Rattus_norvegicus_1.jpg'}],
            multiDomesticCars: ['chevrolet','gmc','buick','ford','lincoln','chrysler','dodge','ram','jeep','tesla']
        },
        inputs: {
            stringLength: null,
            isNumeric: null,
            email: null,
            password: null,
            selectedAnimal: null,
            selectedAnimal2: null,
            domesticCar: null,
            selectedAnimals: []
        }
    },
    methods: {
        stringLength(v) {
            return v == null ? 0 : v.length;
        },
        isNumeric(v) {
            return !isNaN(parseFloat(v)) && isFinite(v);
        },
        validEmail(v) {
            return v == null ? false : v.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null ? false : true;
        },
        validPassword(v) {
            // The string must contain at least 1 lowercase alphabetical character
            // The string must contain at least 1 uppercase alphabetical character
            // The string must contain at least 1 numeric character
            // The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
            // The string must be 6 characters or longer
            return v == null ? false : v.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})") == null ? false : true;
        },
        inAnimals(v){
            return v == null ? false : this.sources.multiAnimal.indexOf(v.toLowerCase()) !== -1;
        },
        notInDomesticCars(v){
            return v == null ? true : this.sources.multiDomesticCars.indexOf(v.toLowerCase()) == -1;
        },
        mammalSelected(v){
            return v == null ? false : ['cat','bat','dog','tiger','rat'].indexOf(v) !== -1;
        }
    }
});