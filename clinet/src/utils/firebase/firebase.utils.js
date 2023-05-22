import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzxTazPwjRmYqwe-RijR5_gG2Kd9woIbo",
  authDomain: "cricket-player-info.firebaseapp.com",
  projectId: "cricket-player-info",
  storageBucket: "cricket-player-info.appspot.com",
  messagingSenderId: "365914081015",
  appId: "1:365914081015:web:70db2fc7e18f2fc20675f2",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};



{
  "player": [

    {
      "id": "1413",
      "name": "Virat Kohli",
      "imageId": 244980,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm medium"
    },
    {
      "id": "576",
      "name": "Rohit Sharma",
      "imageId": 244982,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm offbreak"
    },
    {
      "id": "1446",
      "name": "Shikhar Dhawan",
      "imageId": 170660,
      "role":"BATSMEN",
      "battingStyle": "Left-hand bat",
      "bowlingStyle": "Right-arm offbreak"
    },
    {
      "id": "11808",
      "name": "Shubman Gill",
      "imageId": 171042,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm offbreak"
    },
    {
      "id": "9428",
      "name": "Shreyas Iyer",
      "imageId": 171024,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm legbreak"
    },
    {
      "id": "1836",
      "name": "Manish Pandey",
      "imageId": 171022,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm medium"
    },
    {
      "id": "2195",
      "name": "Mayank Agarwal",
      "imageId": 171091,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat"
    },
    {
      "id": "12094",
      "name": "Prithvi Shaw",
      "imageId": 171030,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm offbreak"
    },
    {
      "id": "1448",
      "name": "Cheteshwar Pujara",
      "imageId": 153263,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm legbreak"
    },
    {
      "id": "1447",
      "name": "Ajinkya Rahane",
      "imageId": 171082,
      "role":"BATSMEN",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm medium"
    },
    {
      "id": "9647",
      "name": "Hardik Pandya",
      "imageId": 244973,
      "role":"ALL ROUNDER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast-medium"
    },
    {
      "id": "8424",
      "name": "Hanuma Vihari",
      "imageId": 171080,
      "role":"ALL ROUNDER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm offbreak"
    },
    {
      "id": "587",
      "name": "Ravindra Jadeja",
      "imageId": 170670,
      "role":"ALL ROUNDER",
      "battingStyle": "Left-hand bat",
      "bowlingStyle": "Left-arm orthodox"
    },
    {
      "id": "1593",
      "name": "Ravichandran Ashwin",
      "imageId": 244976,
      "role":"ALL ROUNDER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm offbreak"
    },

    {
      "id": "8733",
      "name": "KL Rahul",
      "imageId": 244975,
      "role":"WICKET KEEPER",
      "battingStyle": "Right-hand bat"
    },
    {
      "id": "8271",
      "name": "Sanju Samson",
      "imageId": 226289,
      "role":"WICKET KEEPER",
      "battingStyle": "Right-hand bat"
    },
    {
      "id": "1465",
      "name": "Wriddhiman Saha",
      "imageId": 171058,
      "role":"WICKET KEEPER",
      "battingStyle": "Right-hand bat"
    },
    {
      "id": "10744",
      "name": "Rishabh Pant",
      "imageId": 244978,
      "role":"WICKET KEEPER",
      "battingStyle": "Left-hand bat"
    },
    {
      "id": "7909",
      "name": "Mohammed Shami",
      "imageId": 244977,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast-medium"
    },
    {
      "id": "9311",
      "name": "Jasprit Bumrah",
      "imageId": 170685,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast"
    },
    {
      "id": "8292",
      "name": "Kuldeep Yadav",
      "imageId": 170683,
      "role":"BOWLER",
      "battingStyle": "Left-hand bat",
      "bowlingStyle": "Left-arm chinaman"
    },
    {
      "id": "7910",
      "name": "Yuzvendra Chahal",
      "imageId": 244981,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm legbreak"
    },
    {
      "id": "9715",
      "name": "Navdeep Saini",
      "imageId": 226400,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast"
    },
    {
      "id": "8683",
      "name": "Shardul Thakur",
      "imageId": 226224,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast-medium"
    },
    {
      "id": "1858",
      "name": "Umesh Yadav",
      "imageId": 153874,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast"
    },
    {
      "id": "10808",
      "name": "Mohammed Siraj",
      "imageId": 171039,
      "role":"BOWLER",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm fast-medium"
    }
  ]
}