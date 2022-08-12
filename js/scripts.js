function setTracks(id,tema) {
   var disco  = document.getElementById(id)
   var imagem = disco.children[0]
   var faixas = disco.children[1]
   var roboto = document.getElementById('roboto')

   disco.style.pointerEvents = 'none'

   document.documentElement.style.setProperty('--timeAnimation', '1000ms')

   if(faixas.style.display === 'none') {
      openTracks(imagem,faixas)
   } else {
      closeTracks(imagem,faixas)
   }

   if(roboto.checked) {
      changeTheme(tema)
   }

   setTimeout(() => {disco.style.pointerEvents = 'all'}, 1000)
}

function openTracks(imagem,faixas) {
   imagem.classList.remove('imageOpen')
   imagem.classList.add('imageClose')
   faixas.style.display = 'flex'
   faixas.style.animation = 'animate-in 1s'
}

function closeTracks(imagem,faixas){
   imagem.classList.remove('imageClose')
   imagem.classList.add('imageOpen')
   faixas.style.animation = 'animate-out 1s'
   setTimeout(() => {faixas.style.display = 'none';
                     
                     }, 1000)
}

function changeTheme(cTema) {
   document.querySelector('html').classList.toggle(cTema)

   setTimeout(() => {document.documentElement.style.setProperty('--timeAnimation', '0')}, 1000)
}