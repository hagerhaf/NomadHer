# NomadHer
For Android:


A-Emulator Section
1-In your Smartphone device,download the 'Expo' Application,It is a React Native emulating platform will help you visualize in real time the project changes.

https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr

B-Importing and building Section
1-Install Node: https://nodejs.org/en/download/
2- Install the Expo CLI command line utility: npm install -g expo-cli
3-Import the project folder . (In case you don't know how the command is 'git clone https://github.com/hagerhaf/nomadher.git ')
4-Using the command line,go to the nomadher directory.
5-Using the command line,run the project either with :

npm start
OR
exp start
OR
expo start

6-If the building goes fine,a QR code will be generated.

7-The QR code is the 'identifiyer' of your application version,So scan it using the Expo application that you download.

8-The app will recognize the QR code and run the corresponding project

9-You can visualize in real time in your device the changes that you make to your project files everytime you click 'save'.



C-Files presentation

1-In this repository you will find a file called 'App.js'.This will be our main project page.For the sake of analogy,it is to React Native what index.php is to PHP project.

2-Open the 'App.js' file and replace line 3 with the page you want to visualize/test.For instance if I want to test my 'Chatroom.js' page,I go to 'App.js' file and write 'import Chatroom from './pages/Chatroom';' and replace line 11 with <Chatroom/>.

3-You will create and test the required pages in directory 'pages'.This is where you can find the other pages like Signup and Login...


If there is anything unclear please let me know
Good Coding ! :)
