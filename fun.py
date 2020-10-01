from abc import ABC


class Instructors(ABC):
    companyName = 'Qburst'

    def __init__(self, course, duration):
        self.course = course
        self.duration = duration

    def printinfo(self):
        print("CompanyName is ", Instructors.companyName)


learning = Instructors('mail', 9)
l2 = Instructors('django', 8)
learning.printinfo()
print(l2.course)
print(learning.duration)
learning.duration = 19
del learning.duration
print(learning.duration)



