Welcome to my project on hospital management system for covid-19 patients.
In this file, I have defined clear steps to run the application.

Steps

1) Create a fresh folder and name it anything you like.

2) Unzip the application code file using any software of your choice. On unzipping make sure you have only the code files in the directory. (Unzip choudhari_project.zip)

3) Install node js on your local system from https://nodejs.org/en/download/ 

4) To check if node has been successfully installed, run the command "node -v" in the terminal to see the version node installed. If there is no output then there was an issue while installing node. Check on google for the error or contact me if there is an issue.

==================== OPTIONAL NOT  REQUIRED ==================================================    
Extra steps optional or if some error in packages is encountered

a) Install npm by typing the command "npm install -g npm" in the terminal.

b) Check if it has successfully installed by running the command "npm -v" in the terminal. Again if there is an error, check on google for the error or contact me if there is an issue.

c) That is all we need to download :) Now, type the command **npm install** in the terminal and wait for all the packages to be downloaded and installed. Done, the setup has finished.


=======================================================================================

5) *Warning*: Before running the code, make sure the appropriate database (hospital) has been created in MYSQL 8.0.22. There will be an issue if MYSQL 5 or any other is used. Just execute the hospital_final_reports.sql file in the MYSQL Workbench, and make sure that the hospital database has been created.

Important Step -> If not done code will not work*
1) In the dbcon.js file change the username and password of the createConnection function to as per your database credentials.
2) In MYSQL WorkBench or through the shell execute the command
In place of username and password give your own username and password for the database.

ALTER USER 'usename'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'


6) Execute the command "npm start", and wait for the site to be up. In the terminal, you will see the http address on which the site has started. Open the link in a web browser. In the terminal check for the message MYSQL Connected !!!, which indicates that the server has connected with the database. Follow the interaction guide below to get the best out of the system.
Remember: Execute this command where the files are located. (Path where bin,controllers,... folders are located ).

Interactions within the site.

In the beginning you are greeted with the homepage. 
The user can login with three different roles.

Role 1: Patient
Go to the login page > Enter in the patient creadentials. 

As an example, I have listed the usernames below and all have a common password for simplicity.


====================================================================================
**Patient Usernames**     
sampat     
adampat    
sarahpat    
montypat    
amypat   

**Password**      
qwerty55      

=====================================================================================
Once you are logged in, have a look around. There you can access patients "Appointments and Prescription History", "Lab Reports" and "Medical Bills" information. Logout, when done.

Role 2: Doctor
Go to the login page > Enter in the doctor credentials. 
As an example I have listed the usernames below and all have a common password for simplicity.

=======================================================================================
**Doctor Usernames**     
lauradoc     
jamesdoc    
sandydoc    
seandoc    

**Password**    
qwerty123    

======================================================================================    
Once you are logged in, have a look around. There you can access doctors "Patient Records", "Salary Records" and "Book a room". 
Disclaimer: For the purpose of demonstration, I have fixed the room booking for the 25th of November, and only for that day. Due to time constraint and other subject project, I was not able to complete it, but in the future work, I will include dynamic room booking functionality that will handle bookings for different days.
Logout, when done.

Role 3: Admin
Go to the login page > Enter in the doctor credentials. 

As an example I have listed the usernames below and all have a common password for simplicity.

=======================================================================================    
**Doctor Usernames**
admin

**Password**
admin

========================================================================================
This feature was added just a day before submission, and has the least security functionality. I will keep updating it to make it better. But, on logging in with the admin credentials there is a dashboard that the admin can interact with. The left menu gives the limited but fulfilling options that the admin can perform on the database.
Return to the main homepage after finishing the task.

On an endnote, I would like to keep updating this system, to add in many more functionalities, and to improve the system as a whole. Thank you for your time today. Stay healthy, stay safe. Cheers!
