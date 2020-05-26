---
slug: "/projects/card-game-engine"
title: "Card Game Engine"
date: 2017-12-07
excerpt: "Make and play custom card games"
languages:
  - OCaml
  - JSON
repo_link: "https://github.com/cakoch10/Generic_Card_Game_Engine"
image: "../images/cardgameengine.png"
---
## an ocaml card game engine
![Desktop screenshot](./images/cardgameengine.png)

An OCaml card game engine that allows users to build their own custom card game
and then play it through the terminal

# languages and technologies used
- OCaml
- JSON

# background
This was the final project for my functional programming course that I built with
3 other group members. We wanted to design an engine that allowed users to write
their own card game rules and then play the game. Using a custom card game language
to define the rules, users can encode a card game in our engine and then play it.

Using our card game language we have already built some card game config files to use:
- Blackjack
- Crazy Eights
- 5 Card Draw

# my role

## front-end
- Built the command-line interface and REPL to render the card game and update state
accordingly when a player makes a move

## back-end
- Helped design the card game language we used to encode rules as strings in
JSON card game rule files
- Built the structure used to encode the game state, and helped write update functions
for the state
- Designed the lexer and parser for the custom card game rules (encoded strings
as abstract syntax trees to be evaluated)
