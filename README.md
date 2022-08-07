# Tic-Tac-Toe

## Abstract:
Everyone loves a classic game of tic tac toe, and this application allows you and a friend to play as many rounds together as you please! It will not only keep track of whose turn it is and the current score, but will also automatically restart a new game after a win or draw, so that you both can get lost in the fun and smile about your adorable cat or dog token.

## Preview of App:

![alt text](https://user-images.githubusercontent.com/103962335/183304656-da8bdc76-4fb0-45a3-b044-097eea801a6e.png "Tic-Tac-Toe Preview")

## Context:
Creating this application entirely from scratch was our final solo project assigned at the end of Module 1 during Week 5 at Turing.

## Contributors:
Tori Fields:
* LinkedIn: https://www.linkedin.com/in/victoria-ashley-fields/
* GitHub: https://github.com/vfields

## Learning Goals:
While implementing semantic HTML and dynamic, concise CSS were both pieces of this project’s learning goals, the main focus was on writing DRY, clean JavaScript that showcased both a knowledge of data-model-first manipulation of the DOM, and an understanding of event delegation.

## Wins + Challenges:
One of my biggest wins from working on this project was successfully making the game fully playable in the console before making it interact with the DOM. While I feel I’ve had an understanding of data-model-first DOM manipulation conceptually, in practice I’ve historically had a much easier time manipulating the DOM first. Attempting to make the game fully playable in the console forced me into a data-model-first mindset and bolstered my understanding of the power of class-to-class interaction, and I’m proud of my final script.

That said, while I do feel I’ve DRYed and cleaned a good portion of my code, I can tell that there is a cleaner, simpler way to check for wins. I believe my isWin method in my Game class is verbose, and I imagine there is a way to store winning combinations in my Game’s properties as arrays, and compare the game board to those combinations; however, although I did try, I couldn’t quite crack how to accomplish that logic in practice.
