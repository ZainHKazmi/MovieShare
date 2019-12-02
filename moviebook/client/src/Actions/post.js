// export const getStudents = () => {
//     // the URL for the request
//     const url = "/students";

//     // Since this is a GET request, simply call fetch on the URL
//     fetch(url)
//         .then(res => {
//             if (res.status === 200) {
//                 // return a promise that resolves with the JSON body
//                 return res.json();
//             } else {
//                 alert("Could not get students");
//             }
//         })
//         .then(json => {
//             // the resolved promise with the JSON body
//             setState("studentList", json.students);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };

// export const updateStudentForm = field => {
//     const { name, value } = field;
//     setState(`studentForm.${name}`, value);
// };

export const addPost = async (movie, rating) => {
    // the URL for the request
    const url = "/posts";

    // The data we are going to send in our request
    const newPost = {
        movieTitle: movie,
        rating: rating
    }

    console.log(JSON.stringify(newPost))

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    await fetch(request)
        .then(function(res) {
            if (res.status === 200) {
                console.log(res.data)
                return res.data
            } else {
                throw("Could not add post")
            }
        })
        .catch(error => {
            console.log(error);
        });
};