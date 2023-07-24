const addbtn=document.querySelector('#addBtn');
const main=document.querySelector('#main');
addbtn.addEventListener('click',
function(){
   addnote()
}
)
function savenotes(){
    const notes=document.querySelectorAll('.note textarea');
    console.log(notes)
    const data=[];
    notes.forEach((note)=>{data.push(note.value)});
    console.log(data);
   if(data.length===0){
    localStorage.removeItem('notes');
   }
   else{
    localStorage.setItem('notes',JSON.stringify(data))}
}

function addnote(text=''){
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`<div class="tool">
    <i class="save   fas fa-save"></i>
    <i class="trash  fas fa-trash"></i>
</div>
<textarea>${text}</textarea>`
note.querySelector('.trash').addEventListener('click',
function(){
    note.remove();
    savenotes();
} )
note.querySelector('.save').addEventListener('click',
function(){
    savenotes();
})
note.querySelector('textarea').addEventListener('focusout',
function (){
    savenotes();
})
main.appendChild(note);
savenotes();
}

(function displaynotes(){
const lsnotes=JSON.parse(localStorage.getItem('notes'));
if(lsnotes===null){
    addnote();
}
else(
lsnotes.forEach((lsnotes)=>addnote(lsnotes)));
} )()






