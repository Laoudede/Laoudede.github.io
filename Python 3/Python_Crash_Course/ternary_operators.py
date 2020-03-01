age = 22
if 18 <= age < 65:
    message = "Eligible"
else:
    message = "Not eligeble"

#message = age >= 18 ? "Eligible" : "Not Eligible" (detta är versionen som används i språk som t.ex C# och C++)

message = "Eligible" if age >=18 else "Not eligeble"

print(message)
