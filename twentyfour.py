import random, itertools

suits = 'cdhs'
ranks = '1234567890'
target = 24
ops = ["+", "-", "*"]#, "/"]

def get_target(target, values, maxfound):
  nums = []
  for val in values:
    nums.append(str(val))
  found = 0
  ret = []
  # i,j,k,l are indices that show the the integers are being used
  for i in range(4):
    for j in range(4):
      if j == i:
        continue
      for k in range(4):
        if k == i or k == j:
          continue
        l = 1 + 2 + 3 - i - j - k
        # p,q,r are operators
        for p in ops:
          for q in ops:
            for r in ops:
              if found >= maxfound:
                break
              answerstr = str(nums[i] + p + nums[j] + q + nums[k] + r + nums[l])
              answerint = eval(answerstr)
              # print answerstr + " = " + str(answerint)
              if answerint == target:
                found += 1
                s = answerstr + " = " + str(answerint)
                if s not in ret:
                  ret.append(s)
  # end for i
  return ret

def print_solutions(solutions, maxfound):
  n = len(solutions)
  if n == 0:
    print ">>> No solutions found."
    return
  elif n == maxfound:
    print ">>> At least " + str(n) + " solutions found:"
  else:
    print ">>> Found " + str(n) + " solutions:"
  for sol in solutions:
    print sol

def main():
  deck = tuple(''.join(card) for card in itertools.product(ranks, suits))
  hand = random.sample(deck, 4)
  print "Cards drawn: " + str(hand)
  values = []
  for card in hand:
    rank = card[0]
    if rank == '0':
      rank = 10
    values.append(rank)
  sols = get_target(target, values, 10)
  print_solutions(sols, 10)


if __name__ == "__main__":
  main()
