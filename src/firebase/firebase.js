import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAaqmXA0FUgEcuoM2K9H1ICrLSZAVTD3i0",
    authDomain: "expensify-9fb52.firebaseapp.com",
    databaseURL: "https://expensify-9fb52.firebaseio.com",
    projectId: "expensify-9fb52",
    storageBucket: "expensify-9fb52.appspot.com",
    messagingSenderId: "549575857913"
  };

  firebase.initializeApp(config);

  const db =   firebase.database();

  export {firebase, db as default};

  /*
  firebase.database().ref().set({
      name: 'Lito Pe'
  })
*/
  
/*
  firebase.database().ref().set({
      name: 'Andrew Meade',
      age: 26,
      stressLevel: 6,
      job: {
        title: "Software Developer",
        company: "Google"
      },
      isSingle: false,
      location: {
          city: 'Philidelphia',
          country: 'United States' 
      }
  });
*/

  /*
    firebase.database().ref("attributes/").set({
      height: 5.7,
      weight: 160
  });

*/


  /*
  firebase.database().ref("name/").set("Joselito Pe"
    ).then(()=>(alert("database updated")))
    .catch((e)=>{alert(e)});

  */

  /*
  const ref = db.ref('isSingle');

  ref.remove().then ( ()=>{
        alert('node remove') 
    }).catch((e)=>{
        alert(e);
        }
    )
`
  */

  /*
  db.ref().update({

      "location/city": 'Seattle'}
  ).then (()=>{alert('database edit ok')}).catch((e)=>{alert(e)});
  */

/*
  db.ref().once("value").then((snapshot)=>{
      const val = snapshot.val();
      console.log(val)
      alert(val)}).catch((e)=>{alert(e)});
*/

/*
    db.ref().on('value', 
        (snapshot) =>{
            const val = snapshot.val();
            console.log(val);
            alert(val);
        });
*/
/*
        db.ref().on(
            'value',
            (snapchat) => {
                const val = snapchat.val();


                alert (`${val.name} is a ${val.job.title} at ${val.location.city}`)
            },
            (e) => {
                console.log(e);
            }
        );
*/


/*
    db.ref("expenses").push(
    
    {
        description: "internet bill",
        notes: "July bill",
        amount: 2342,
        createAt: 32342
    }


    );

    db.ref("expenses").push(
        
        {
            description: "phone bill",
            notes: "marh bill",
            amount: 5999,
            createAt: 192343
        }
    );   

    db.ref("expenses").push(
        
        {
            description: "food stuff",
            notes: "for april",
            amount: 5999,
            createAt: 192343
        }
    );      

*/


/*
db.ref('expenses').on(
    "value",
    (snapshot)=>{
        var expenses = [];
        snapshot.forEach(
            (eachSnapshot)=>{
                expenses.push(
                    {
                        id: eachSnapshot.key,
                        ...eachSnapshot.val()
                    }
                )
            }
        )
        console.log(expenses);
    }
)
*/
/*
db.ref('expenses').on(
    "child_changed",
    (snapshot)=>{
        console.log(snapshot.key, snapshot.val());
    }
)

const array = ['hello', 'there', 'you'];

/*
const newArray = array.map(
    (element)=>{
        return element + "!!";
    }
);
*/

/*
const newArray = array.filter(
    (element)=>{
        if (element == 'there')
            return false;
        else 
            return true;
    }
);

console.log('filter stuff');
console.log (array);
console.log (newArray);
alert('array stuff');
*/