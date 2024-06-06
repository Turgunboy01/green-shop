import React, { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { doSignInWithGoogle } from "../../firebase/auth";
import toast from "react-hot-toast";
import { auth, fireDB } from "../../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { ProductsContext } from "../../context/AllProductsProvider";

const HeaderModal = () => {
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [signState, setLogin] = useState("register");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setModal, modal } = useContext(ProductsContext);

  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          setModal(false);
          if (user.role === "user") {
            navigate("/");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
        setModal(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };

  const userSignupFunction = async () => {
    // validation
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.confirmPassword === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add User Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      setLogin("login");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await doSignInWithGoogle();
      setModal(false);
    } catch (error) {
      setError("An error occurred during Google authentication");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-full mx-auto flex py-[20px] justify-center flex-col items-center">
        <div className="flex gap-2 items-center">
          <button
            className={` text-[25px] font-medium  ${
              signState == "login" ? "text-[#46A358]" : "text-[#3D3D3D]"
            }`}
            onClick={() => setLogin("login")}
          >
            Login
          </button>
          <h2 className="text-[25px] text-[#3D3D3D]">|</h2>
          <button
            className={` text-[25px] font-medium ${
              signState == "register" ? "text-[#46A358]" : "text-[#3D3D3D]"
            }`}
            onClick={() => setLogin("register")}
          >
            Registerlogin
          </button>
        </div>

        <div className="mt-[20px] w-full flex flex-col">
          {signState == "login" ? (
            <div className="flex flex-col gap-[17px] ">
              <h3 className="text-[13px] font-normal">
                Enter your email and password to login.
              </h3>

              <input
                className="w-full py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                type="text"
                placeholder="Enter your email address"
                value={userLogin.email}
                onChange={(e) =>
                  setUserLogin({
                    ...userLogin,
                    email: e.target.value,
                  })
                }
              />
              <input
                className="w-full py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                type="password"
                placeholder="Password"
                value={userLogin.password}
                onChange={(e) => {
                  setUserLogin({
                    ...userLogin,
                    password: e.target.value,
                  });
                }}
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                onClick={() => userLoginFunction()}
                className="bg-[#46A358] rounded font-bold text-[16px] text-[#fff] w-full mt-5 py-[15px]"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[17px] ">
              <h3 className="text-[13px] ">
                Enter your email and password to register.
              </h3>
              <input
                type="text"
                className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                placeholder="Username"
                value={userSignup.name}
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    name: e.target.value,
                  });
                }}
              />
              <input
                className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                type="text"
                placeholder="Enter your email address"
                value={userSignup.email}
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    email: e.target.value,
                  });
                }}
              />
              <input
                className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                type="password"
                placeholder="Password"
                value={userSignup.password}
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    password: e.target.value,
                  });
                }}
              />
              <input
                className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                type="password"
                placeholder="Confirm password"
                value={userSignup.confirmPassword}
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    confirmPassword: e.target.value,
                  });
                }}
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                onClick={() => userSignupFunction()}
                className="bg-[#46A358] rounded font-bold text-[16px] text-[#fff] w-full  sm:mt-5 py-[5px] sm:py-[15px]"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          )}

          <h3 className="py-[10px] sm:py-[20px] text-[13px] text-center">
            Or register with
          </h3>
          <button
            className="flex border rounded border-[#EAEAEA] py-[5px] sm:py-[13px] px-3 justify-center items-center gap-3 w-full  text-[14px] sm:text-[16px]"
            onClick={(e) => handleGoogle(e)}
          >
            <FcGoogle size={20} />{" "}
            <span className=" hidden sm:block">Continue with Google</span>
          </button>
          <button className="flex border rounded border-[#EAEAEA] py-[5px] sm:py-[13px] mt-2 px-3 justify-center items-center gap-3 w-full  text-[14px] sm:text-[16px]">
            <FaFacebookF size={20} />
            <span className=" hidden sm:block"> Continue with Facebook</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderModal;
