const firebaseAuth = require("../../firebase/firebase-config").auth;

const registration = async (req, res) => {
  const { firstname, lastname, phone, email, country, username, password } =
    req.body;

  try {
    const auth = firebaseAuth.getAuth();
    const userCredentials = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const user = userCredentials.user;
    console.log(userCredentials);

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const msg = `Firebase Error: ${errorCode} ${errorMessage}`
    console.log(msg)
  }
};

module.exports = registration;
