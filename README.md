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

### Sample Output

    Cards drawn: ['7d', '8s', '0s', '8c']
    >>> Found 8 solutions:
    8*10-7*8 = 24
    8*10-8*7 = 24
    10*8-7*8 = 24
    10*8-8*7 = 24
    10*8-7*8 = 24
    10*8-8*7 = 24
    8*10-7*8 = 24
    8*10-8*7 = 24

### Notes & Issues
* Python solution available [here](https://github.com/dsoegijono/code-bits/blob/master/solvers/twentyfour.py).
- 10 cards are represented by '0', Aces are represented by '1'
- Doesn't consider divisions: Divisions don't play well with integers :(
- Displays same but rearranged solutions
