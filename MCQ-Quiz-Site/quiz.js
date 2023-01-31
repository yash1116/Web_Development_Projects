const quizData = [
    {
        question:"What is the full-form of HTML ?",
        a:'HyperText Markup Language',
        b:'HighText Machine Language',
        c:'HyperText and links Markup Language',
        d:'None of these',
        correct:'a'
    },
    {
        question:"HTML is what type of language ?",
        a:'Programming Language',
        b:'Markup Language',
        c:'Scripting Lamguage',
        d:'Network Protocol',
        correct:'b'
    },
    {   
        question:"Which of the following tag is used for inserting the largest heading in HTML ?",
        a:'<h3>',
        b:'<h5>',
        c:'<h1>',
        d:'<h6>',
        correct:'c'
    },
    {
        question:"Which of the following is the container for <tr>, <th>, and <td> ?",
        a:'<data>',
        b:'<table>',
        c:'<group>',
        d:'All of the above',
        correct:'b'
    },
    {
        question:"Which of the following tag is used to insert a line-break in HTML ?",
        a:'<a>',
        b:'<pre>',
        c:'<b>',
        d:'<br>',
        correct:'d'
    }
    ];
    let currentQuestion=0;
    const QuestionEl=document.getElementById('Question')
    const a_text=document.getElementById('a_text')
    const b_text=document.getElementById('b_text')
    const c_text=document.getElementById('c_text')
    const d_text=document.getElementById('d_text')
    
    const a_ans=document.getElementById('a')
    const b_ans=document.getElementById('b')
    const c_ans=document.getElementById('c')
    const d_ans=document.getElementById('d')
    
    const Question=[]
    
    loadQuiz();
    function loadQuiz()
    {   
        if(currentQuestion<quizData.length)
        {
            const currentQ=quizData[currentQuestion]
            QuestionEl.innerText=currentQ.question
            a_text.innerText=currentQ.a
            b_text.innerText=currentQ.b
            c_text.innerText=currentQ.c
            d_text.innerText=currentQ.d
        }
       
    }
    function uncheckAll()
    {
        var el = document.getElementsByName("answer");
        for(var i=0;i<el.length;i++)
           el[i].checked = false;
    }
    let score=0;
    function onSubmit()
    { 
        const a_check=document.getElementById('a').checked
        const b_check=document.getElementById('b').checked
        const c_check=document.getElementById('c').checked
        const d_check=document.getElementById('d').checked   
             
        if(currentQuestion<quizData.length)
        {
            const currentQ=quizData[currentQuestion]
            if(a_check)
            {   
                if(a_ans.id==currentQ.correct)
                {
                    score++;
                }
            }
            else if(b_check)
            {
                if(b_ans.id==currentQ.correct)
                {
                    score++;
                }
            }
            else if(c_check)
            {
                if(c_ans.id==currentQ.correct)
                {
                    score++;
                }
            }
            else
            {
                if(d_ans.id==currentQ.correct)
                {
                    score++;
                }    
            }
            currentQuestion++;
            loadQuiz()
            uncheckAll()       
        }
        else
        {
            window.alert(score)
        }
    }