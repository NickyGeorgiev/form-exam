# This is contact form

You need to fill all fields and press the "Send form" button

## Information about you:

Your name
Your age
Your gender
Your email
Your phone
Some information about you

Notice: all field are required. The phone number must be minimum 6 characters. If don't, you will see alert window and can't continue with the registration!


## Information about your account

Username
Password
Repeat password

*Notice: the password and repeat password have to match. If don't match, you will see alert window and can't continue with the registration!

## After register is done

After the register is done and all field are correctly field, you will see the alert message "Your data sended successfuly!".
If registration failed, you will see other message "Ups... is there problem :(" and the error.

### Backednd

All data will be saved in https://back4app.com

The data is unlocked for publick reading and writing.

### GET request to Back4app Rest API

You can use Postman. You have to add in header section this information:

URL:
https://parseapi.back4app.com/classes/exam

Headers:
X-Parse-Application-Id: RBiT9cvNhbI5fLQE4sWWaW08oAcApOwyYtqURvpt
X-Parse-REST-API-Key: ahodwu1ECji4HhED4JpWJSXCyVRMUqU63oyeCDER

After that, you can make GET request and get the data in this format:

{
    "results": [
        {
            "objectId": "Auto generated ID",
            "name": "niki",
            "age": "35",
            "gender": "Male",
            "username": "niks",
            "password": "123456",
            "email": "ewqeqw@dsad",
            "phone": "6754745754",
            "about": "dsadsadsadasd",
            "createdAt": "2022-09-30T08:29:06.734Z",
            "updatedAt": "2022-09-30T08:29:06.734Z"
        }
    ]
}

ENJOY THE APP :))
