window.onload=()=>
{
    if(localStorage.getItem('id')=='home'||
     localStorage.getItem('id')=='about'
     || localStorage.getItem('id')=='contact')
    {
        createVideo();
    }
    
    createBioText();
    createAboutText();
    
}
var createVideo=()=>
{
    const box = document.getElementById('box');
    if(typeof box!='undefined')
    {
        const video = document.createElement('video');
        video.autoplay = true;
        video.controls = false;
        video.muted = true;
        video.loop=true;
      
        if (video.canPlayType('video/mp4')) 
        {
            video.src = 'assets/video/programmer.mp4';
        }
    
        const  div_row = document.createElement('div');
        div_row.className='row';
        
        div_row.append(video);
    
        box.append(div_row);
    }
    
}

var createBioText=()=>{

    if(typeof box2!='undefined')
    {
        bio=['<b>My Bio </b>','Hi, I am Future kgaphola a ',
    '<span class="badge bg-success">software developer</span></br>',
    'I specialize in  <span class="badge bg-success">web and mobile development</span>',
    ', framework that i use is <span class="badge bg-success">xamarin.android</span>, and ',
    'currently learning <span class="badge bg-success">react</span>. ',
    'database that i am familiar with are <span class="badge bg-success">firebase</span>',
    'and  <span class="badge bg-success">mysql</span> Database.<br>',
    'I went to Tshawane University Of Technology and Studied Software Development For 3 years.<br>',
    'Currently enroled in a <span class="badge bg-success">Boot Camp at Mlab</span>',
    'for the <span class="badge bg-success">2023 intake</span>.'];

    const box2 = document.getElementById('box2');
    var divCol1=document.createElement('div');
    divCol1.className='col-lg-6';
    var h1_=document.createElement('h1');
    h1_.innerHTML="Future kgaphola";
    var p_=document.createElement('p');
    for (let index = 0; index < bio.length; index++) {
        p_.innerHTML+=bio[index];
    }

    divCol1.append(h1_);
    divCol1.append(p_);

    const  div_row = document.createElement('div');
    div_row.className='row';


    div_row.append(divCol1);
    div_row.append(createProfileImage());


    box2.append(div_row);

    }

};

var createAboutText=()=>
{
    h4s=['Personal Details','Education','Skills'];
    personal=['Name and Surname: Future kgaphola',
    'Gender: Male'];
    education=['High School: Mamagogo High School',
    'Tertiary Institution: Tshwane University Of Technology'];
    skills=[`PHP fudermentals<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 64%;" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100">64%</div>
  </div>`,`C++ fundermentals
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 73%;" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100">73%</div>
  </div>`,`C# fundermentals
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
  </div>`,`HTML fundermentals
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 58%;" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">58%</div>
  </div>`,`JavaScript fundermentals
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 58%;" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">58%</div>
  </div>`,`Git fundermentals
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
  </div>`,`Xamarin.android
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 78%;" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
  </div>`];
    //About me
    var box3 = document.getElementById('box3');
    
    var h1_about=document.createElement('h1');
    
    h1_about.innerHTML='About Me';
    var divCol3=document.createElement('div');
    divCol3.className='col-lg-6';
    var ol=document.createElement('ol');
    const  div_row = document.createElement('div');
    div_row.className='row';
    
    divCol3.append(h1_about);

    for (let parentindex = 0; parentindex < h4s.length; parentindex++) {
        var h4_=document.createElement('h4');
        h4_.innerHTML=h4s[parentindex];
        ol.append(h4_);

        //sub data personal details
        if(parentindex==0)
        {
            for (let index = 0; index < personal.length; index++) {

                let li=document.createElement('li');
                li.innerHTML=personal[index];
                ol.append(li);    
            }
        }
        if(parentindex==1)
        {
            for (let i = 0; i < education.length; i++) {

                let l=document.createElement('li');
                l.innerHTML=education[i];
                ol.append(l);   
            } 
        }
        if(parentindex==2)
        {
            for (let i = 0; i < skills.length; i++) {

                let l=document.createElement('li');
                l.innerHTML=skills[i];
                ol.append(l);
                
            }
            
        }

    }
    divCol3.append(ol);


    div_row.append(divCol3);
    //apend anoter
    div_row.append(createProfileImage());

    box3.append(div_row);

}

function createProfileImage()
{
    var divCol2=document.createElement('div');
    divCol2.className='col-lg-6';
    var img=document.createElement('img');
    img.className='profImg';
    img.alt="profile image";
    img.width="300";
    img.height="300";
    img.src='assets/img/futurek.jpg';
    divCol2.append(img);

    var divinner=document.createElement('div');
    divinner.className='alert alert-success d-flex align-items-center';
    divinner.role='alert';
    var img_git=document.createElement('img');
    img_git.width="28";
    img_git.height="28";
    img_git.src='assets/img/github.png';
    var anch=document.createElement('a');
    anch.href='https://github.com/FutureKgaphola/Ticket-System';
    anch.innerHTML='Here is one of my projects on GitHub';
    divinner.append(img_git);
    divinner.append(anch);

    divCol2.append(divinner);
    languagesArray=['assets/img/c-sharp.png',
    'assets/img/c++.png',
    'assets/img/css.png',
    'assets/img/html-5.png',
    'assets/img/js.png',
    'assets/img/github.png',
    'assets/img/php.png'];
    for (let index = 0; index < languagesArray.length; index++) {
        
        let sm=document.createElement('img');
        sm.src=languagesArray[index];
        sm.width="28";
        sm.height="28";
        divCol2.append(sm);
    }

    return (divCol2);
}






