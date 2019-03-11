let quiz = {
    title: 'A really cool quiz',
    questions: [
        {
            text:"Jack and Jill went... ",
            responses: [
                {text: 'Up the hill', correct:true},
                {text: 'To the seaside'},
                {text: 'To the forest'},
                {text: 'To the market'}
            ]
        }, {
            text:"Eensy weensy spider climbed up... ",
            responses: [
                {text: 'The water spout', correct:true},
                {text: 'The crumbling wall'},
                {text: 'The bedpost'},
                {text: 'The lamp'}
                ]
        }, {
             text:"Three little kittens have lost their... ",
            responses: [
                {text: 'Mittens', correct:true},
                {text: 'Bowls of porridge'},
                {text: 'Lust for life'},
                {text: 'Socks   '}
                ]
       }, {
             text:"Goldilocks and the three... ",
            responses: [
                {text: 'Bears', correct:true},
                {text: 'Koala bears'},
                {text: 'Squid'},
                {text: 'Kittens'}
                ]
       },
       {
             text:"Who did the black sheep not give any wool to?",
            responses: [
                {text: 'The King', correct:true},
                {text: 'The Master'},
                {text: 'The dame'},
                {text: 'The little boy who lived down the lane '}
                ]
       },
       {
             text:"Twinkle, twinkle little... ",
            responses: [
                {text: 'star', correct:true},
                {text: 'jewel'},
                {text: 'diamond'},
                {text: 'emerald'}
                ]
       },
       {
             text:"How did the Big bad Wolf attempt to demolish the homes of the little piggies? ",
            responses: [
                {text: 'He huffed and puffed', correct:true},
                {text: 'He used a bulldozer'},
                {text: 'Brick by brick'},
                {text: 'They welcomed him in '}
                ]
       },
       {
             text:"Who stole the Queen of Hearts's tarts? ",
            responses: [
                {text: 'The Knave of hearts', correct:true},
                {text: 'The Prince of Mince'},
                {text: 'The King of Wings'},
                {text: 'Jack (from the beanstalk) '}
                ]
       },
       {
             text:"Ringa, ringa rosy, a pocket full of... ",
            responses: [
                {text: 'Posy', correct:true},
                {text: 'Dandelions'},
                {text: 'Sleepsand'},
                {text: 'Stars'}
                ]
       },
       {
             text:"This little piggy went to the market, this little piggy... ",
            responses: [
                {text: 'Stayed at home', correct:true},
                {text: 'Had roast beef'},
                {text: 'did not'},
                {text: 'Cried wawawa all the way home  '}
                ]
       },
        {
            text:"Jack and Jill went... ",
            responses: [
                {text: 'Up the hill', correct:true},
                {text: 'To the seaside'},
                {text: 'To the forest'},
                {text: 'To the market'}
            ]
        }, {
            text:"Eensy weensy spider climbed up... ",
            responses: [
                {text: 'The water spout', correct:true},
                {text: 'The crumbling wall'},
                {text: 'The bedpost'},
                {text: 'The lamp'}
                ]
        }, {
             text:"Three little kittens have lost their... ",
            responses: [
                {text: 'Mittens', correct:true},
                {text: 'Bowls of porridge'},
                {text: 'Lust for life'},
                {text: 'Socks   '}
                ]
       }, {
             text:"Goldilocks and the three... ",
            responses: [
                {text: 'Bears', correct:true},
                {text: 'Koala bears'},
                {text: 'Squid'},
                {text: 'Kittens'}
                ]
       },
       {
             text:"Who did the black sheep not give any wool to?",
            responses: [
                {text: 'The King', correct:true},
                {text: 'The Master'},
                {text: 'The dame'},
                {text: 'The little boy who lived down the lane '}
                ]
       },
       {
             text:"Twinkle, twinkle little... ",
            responses: [
                {text: 'star', correct:true},
                {text: 'jewel'},
                {text: 'diamond'},
                {text: 'emerald'}
                ]
       },
       {
             text:"How did the Big bad Wolf attempt to demolish the homes of the little piggies? ",
            responses: [
                {text: 'He huffed and puffed', correct:true},
                {text: 'He used a bulldozer'},
                {text: 'Brick by brick'},
                {text: 'They welcomed him in '}
                ]
       },
       {
             text:"Who stole the Queen of Hearts's tarts? ",
            responses: [
                {text: 'The Knave of hearts', correct:true},
                {text: 'The Prince of Mince'},
                {text: 'The King of Wings'},
                {text: 'Jack (from the beanstalk) '}
                ]
       },
       {
             text:"Ringa, ringa rosy, a pocket full of... ",
            responses: [
                {text: 'Posy', correct:true},
                {text: 'Dandelions'},
                {text: 'Sleepsand'},
                {text: 'Stars'}
                ]
       },
       {
             text:"This little piggy went to the market, this little piggy... ",
            responses: [
                {text: 'Stayed at home', correct:true},
                {text: 'Had roast beef'},
                {text: 'did not'},
                {text: 'Cried wawawa all the way home  '}
                ]
       },
    ]

};



new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array(quiz.questions.length).fill(false),
            answers: {},
            correctAnswers: {}
        },

        methods: {
            updateAnswers(questionIndex, answer) {
                questionIndex += 1;
                if (answer.correct !== undefined) {
                    answer.isCorrect = true;
                }else{
                    answer.isCorrect = false;
                }
                let key = 'question-' + questionIndex;
                this.answers[key] = answer;
                if (answer.isCorrect == true) {
                    this.correctAnswers[key] = answer.text;
                }
                console.log(Object.values(this.correctAnswers));
            }
            
        }
        
        
});
 
