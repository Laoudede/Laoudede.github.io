course = "  Python Programming"
print(course.upper())
print(course.lower())
print(course.title())

print(course.strip()) #removes whitespace in front of and behind the string
print(course.lstrip()) #removes whitespace to the left of the string
print(course.rstrip()) #removes whitespace to the right of the string

print(course.find("Pro"))
print(course.replace("P", "-"))

print("Programming" in course)
print("Programming" not in course)
