/*Задание 1.
Изобразить с помощью элементов SVG флаги пяти стран: Россия, Франция, Финляндия, Швейцария, Япония.
Каждый SVG-элемент с флагом должен иметь размер 180 на 120 пикселей.*/

//HTML
<svg width="600" height="600"> 
  <rect x="10" y="10" width="180" height="120" fill='white' stroke='#000'/>
  <rect x="200" y="140" width="180" height="120" fill='red' stroke='#000'/>
  <rect x="200" y="10" width="180" height="120"  fill='white' stroke='#000'/>
  <rect x="10" y="140" width="180" height="120" fill='white' stroke='#000'/>
  <rect x="390" y="10" width="180" height="120" fill='white' stroke='#000'/>
  <circle cx="100" cy="70" r="40" fill='red' stroke='#fff'/>
  <polygon points="245,180 275,180 275,150 315,150 315,180 345,180 345,220 315,220 315,250 275,250 275,220 245,220" fill='white' stroke='#fff'/>
  <rect x="200" y="90" width="180" height="40" fill='red' stroke='#fff'/>
  <rect x="200" y="50" width="180" height="40" fill='blue' stroke='#fff'/>
  <rect x="390" y="50" width="180" height="30" fill='blue' stroke='#fff'/>
  <polygon points="440,10 440,130 470,130 470,10" fill='blue' stroke='#0000FF'/>
  <polygon points="10,140 10,260 70,260 70,140" fill='blue' stroke='#0000FF'/>
  <polygon points="130,140 130,260 190,260 190,140" fill='red' stroke='#FF0000'/>
</svg>



