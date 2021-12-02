
VERSION = '0.1.0'

class MyAlgorithm:
  # N: total number of button presses
  def __init__(self, N, K = 10):

#assigning variables
    self.N = N
    self.st = [0]*K
    self.pb = [0]*K
    self.j= 1000;
    self.each_pressed = [0]*K
    self.success_pressed = [0]*K

#using state to select the options
  def ch(self, m):

    if (((m/self.N)*100) <= 20): 
        self.j = self.j + 1
        self.each_pressed[n%10] += 1
        return int(m % 10)
       reward =  0
        p = 0
        q = 0
        for j in self.state: 
            if (j > reward ):
                if (self.pb[p] > 0.6):
                    reward = i
                    q = p
            p = p + 1  
        self.each_pressed[q] += 1
    return int(q)



  def answer(self, n, rw, index):
    self.st[index] += rw
    if (rw != 0):
        self.success_pressed[index] += 1
    if (self.each_pressed[idx]  != 0):
        self.pb[index] = self.success_pressed[index] / self.each_pressed[index]  
    else: 
        self.pb[index] = 0