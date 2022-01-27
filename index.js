let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')   
content.append(header) 
let img = document.createElement('img')
img.src = "assets/rizzo.jpg"
img.append('img')
content.append(img)