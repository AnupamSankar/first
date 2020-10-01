fruits = ["berries", "apples", "grapes", "oranges"]
vegetables = ["kale", "broccoli", "lettuce"]
fruits.extend(vegetables)
# print(fruits)
vegetables.append("bean")
# print(vegetables)
vegetables.sort()
# print(vegetables)
vegetables.sort(reverse=True)
# print(vegetables)
# print(fruits.count("berries"))
# print(fruits.index("grapes"))
fruits.insert(0, "banana")
# print(fruits)
fruits.pop()
# print(fruits)
vegetables.remove("kale")
# print(vegetables)
# del vegetables
# print(vegetables)
fruits = [
    ["apples", "berries", "kiwi"],
    ["oranges", "berries", "plums"],
    ["mangoes", "bananas", "coconuts"],
    ["pineapples"]
]
# print(fruits[1][2])
for i in fruits:
    for j in i:
        print(j)
# f = ("a", "b", "c")
# for x in f:
#   print(x)

animals = tuple(("lion", "tiger", "bear"))
del animals

f = {"A", "B", "C"}
f.add("D")
print(f)
f.update(["X", "Y"])
print(f)
f.remove("Y")
print(f)
fruits.clear()
print(fruits)
myCar = {
    "brand": "WagonR",
    "model": 2009,
    "color": "silver"
}
print(myCar)
print(len(myCar))
myCar["model"] = 2018
print(myCar)
print(myCar.get("brand"))
myCar.update({"tyre": 4})
print(myCar)
b = myCar.keys()
print(b)
myCar.pop("tyre")
print(myCar)
myCar.clear()
print(myCar)


def demo():
    print(" poda appa ")


def sum1(x, y=9):
    print(x+y)


sum1(5)


def greeting():
    def say_hello():
        return "hello"
    return say_hello()


hello = greeting
print(hello())













