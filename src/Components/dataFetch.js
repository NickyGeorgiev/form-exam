export const dataFetch = (data) => {

    fetch("https://parseapi.back4app.com/classes/exam", {
        method: 'POST',
        headers: {
            //generated authorization headers by back4app
            "X-Parse-Application-Id": "RBiT9cvNhbI5fLQE4sWWaW08oAcApOwyYtqURvpt",
            "X-Parse-REST-API-Key": "ahodwu1ECji4HhED4JpWJSXCyVRMUqU63oyeCDER",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": data.name,
            "age": data.age,
            "gender": data.gender,
            "username": data.username,
            "password": data.password,
            "email": data.email,
            "phone": data.phone,
            "about": data.about,
        })
    })
        .then(response => {
            if (response.ok) {
                alert('Your data sended successfuly!')
            } else {
                throw new Error()
            }
        })
        .catch(error => alert('Ups... is there problem :(', error));
}