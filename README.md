## The card game

24 is a card game that I often play. From [Wikipedia](http://en.wikipedia.org/wiki/24_Game):
> The 24 Game is an arithmetical card game in which the object is to find a way to manipulate
> four integers so that the end result is 24. Addition, subtraction, multiplication, or division,
> and sometimes other operations, may be used to make four digits from one to nine equal 24.
> For example, card with the numbers 4,7,8,8, a possible solution is the following: (7-(8/8))*4=24.

### Description

Deck of cards is generated, and 4 cards are randomly drawn. Ace has a value of 1, and face cards are discarded.

    Ranks: Ace = 1, 2-10 normal, JQK not used
    Suits: 'c' = Clubs, 'd' = Diamonds, 'h' = Hearts, 's' = Spades

### Input

"Deal" button will draw 4 random cards using the ranks and suits above. Users can also input any number in the input fields (non-numbers will be ignored).

### Notes & Issues
* Python solution available [here](https://github.com/dsoegijono/code-bits/blob/master/solvers/twentyfour.py).
