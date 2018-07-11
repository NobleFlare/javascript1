let userName = prompt("Please enter your name");
let favColor = prompt("Which of these is your favorite color? Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White or Grey?");

switch(favColor.toLowerCase()){
  case "red":
    alert(`${userName} picked red, the "r" in rgb`);
    break;
  case "orange":
    alert(`Hey ${userName}, did you know the word orange derives from the Sanskrit naranga and the Persian narang?`);
    break;
  case "yellow":
    alert(`Did you know ${userName} that in America "yellow belly" is what you call a coward but in Japan yellow it considered the color of Courage?`);
    break;
  case "green":
    alert(`Green is the color used for night vision goggles because the human eye is most sensitive and able to distinguish the most shades in that color. You ever want to own night vision goggles ${userName}?`);
    break;
  case "blue":
    alert(`Do you know why royalty were called "blue bloods"? The first Blue dye had to be created from the stone Lapis Lazuli that was centraly mined from Afghanistan 6000 years ago. Only royalty could afford to pay for the rare dye and this is also why the term "royal blue" exists. Strange to think of a world where the color blue was so rare eh ${userName}? `);
    break;
  case "pink":
    alert(`No fun fact here ${userName}. Pink is just half-assed red. Refresh and pick a better color.`);
    break;
  case "purple":
    alert(`I see you picked the color that does not really exist ${userName}. Scientificallly, purple is not a color because there is no beam of pure light that looks purple. There is no light wavelength that corresponds to purple as it is some mix of other lights like white light. We see purple because the human eye can't tell what is really happening when red a blue light is mixed.`);
    break;
  case "black":
    alert(`Nothing really to say about black ${userName}. It was the first color to used in painting and is the easiest color to make to paint with.`);
    break;
  case "white":
    alert(`Your favorite color is white ${userName}? Well... to each their own I guess.`);
    break;
  case "grey":
    alert(`Grey is only slightly worse than pink. It's still a half-assed "color" though. Refresh and pick a different one ${userName}.`);
    break;
  default:
    alert("Please enter one of the colors given.");
    break;
}
