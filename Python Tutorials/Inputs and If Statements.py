x = input("What is x? ")
x = int(x)
x += 1
print(x)
name = input("What is name? ")
print("Your name is", name)
a = 0
if a == 1:
    print("a is equal to 1")
elif a > 1:
    print("a is greater than 1")
else:
    print("a is less than 1")
age = input("What is your age? ")
age = int(age)
if age >= 18:
    print("You are an adult")
elif age >= 12:
    print("You are in middle school")
elif age >= 5:
    print("You are in elementary school")
else:
    print("You are younger than 5")
