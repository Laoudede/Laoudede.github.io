message2 = "b" #globala variabler bör inte ändras. Det skapas då istället en lokal variabel

def greet():
    if True:
        message = "a" #lokala variabler går att komma åt överallt. De är inte låsta till där de defineras
    print(message)
