const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}
// G E E F D D C D E F G G G
$array = ["G","E","E","F","D","D","C","D","E","F","G","G","G"];

// function play(){
//   for( i = 0;i < $array.length ;i++){
//     setTimeout(function(){
      
//       a=$array[0]; 
//       console.log(a);
//       $( '.'+a ).click();
//     }, 600);
//   }  
// }
i = 0
function play(){
   
    setTimeout(function(){
      
      a=$array[i]; 
      console.log(a);
      $( '.'+a ).click();
      i=i+1;
     if(i < $array.length){
       play();
     }else{
       i=0;
     }
    }, 600);
 
}
