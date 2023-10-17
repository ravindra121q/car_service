import { Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import image1 from "../assets/images/svgg.jpg";
import footerImage from "../assets/images/footer.png";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("userLogin");
    if (storedUser) {
      setIsLoggedin(true);
    }
  }, [isLoggedin]);

  const loginHandler = () => {
    if (isLoggedin) {
      localStorage.removeItem("userLogin");
      setIsLoggedin(false);
    } else {
      return navigate("/login");
    }
  };

  return (
    <div>
      {" "}
      <nav>
        <div
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/e27e/34b1/6bc58305ab5cfa405102838a71cc256f?Expires=1698624000&Signature=VEvXQ~tOlp~RZkDAltb-znj6jP-U1WDzlHs8KtixVWJf8MXYv7~RVX2spsmcWKeOOg7Fppc-uPm5amqS3dFGmDb5g7ngII0iqhCM~o0pvQiAIvPSwmXPIFJg3KXIb7uT9GLgfqyIOPQayGvt-RsUHVtlhDxo4-k6JZsCSz5kjNNgHP48fDZVOT7QVslDVLVSOpz00zJw~IfoX9QYdl2L8w8hFf4zQHqLJuMICg4Yfy-mDk13gvs1I0ZoSUliZ9W3fMjYiOQMDZ4mu7AGnPvZYqwPsKDD9rczZ8MASek-jNFaP~nVtFohVEKl9FBLmh2PfziQsWBS9CSWbItj6LDM7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "fixed",
            height: "600px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <img
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  src="https://s3-alpha-sig.figma.com/img/a6b0/6f12/3cac62d0f253957fb113cf84d865ae99?Expires=1698624000&Signature=CzxAcn5G-4sOuHWNl0r~ckYG58qr9I0GnmpQq07qEc9du5VuF3erfHbgshVc1crvUypgWmORMwN-9wq5WA-GH34gqbvVcPpWHsbSTvEdiSZJpLPksmKhMOgLx7ZTipSVAHQpmry8~5QKnP~NwZLLJ0MKLXDvOPEZj6Zj7sHOLXQZHnhFBVEQtWAd3y-iiH3nI0UOqYu9Ai6sd~2ag8Jwwnk1n0nyAUIxqw6fmLorfl3pDRh4VTaiGbP77mTpkRceJShw6RjtrZc8uP5-tG4FxIGizWgVzzNfbKvqNSJQDVHkQbO8p4pMkktkUwQ3c79yz6g7bGlZSlJw4Z52b7nCiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="logo"
                />
                <Text fontSize="32px" color={"white"}>
                  CAR SERVICE{" "}
                </Text>
              </div>
              <div style={{ width: "10%", border: "none" }}>
                <Select
                  style={{ border: "none", borderColor: "transparent" }}
                  onChange={(e) => setTextValue(e.target.value)}
                  placeholder={textValue}
                >
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="option2">Chennai</option>
                  <option value="option3">Rajasthan</option>
                  <option value="option4">Punjab</option>
                </Select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
              }}
            >
              <Text>Spares</Text>
              <Text>Blog</Text>
              <Text>More</Text>
              <button
                style={{
                  width: "63px",
                  height: "29px",
                  backgroundColor: "#001B39",
                  fontSize: "15px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                onClick={loginHandler}
              >
                {isLoggedin ? "Logout" : "Login"}
              </button>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "95%",
                margin: "auto",
                marginTop: "48px",
                textAlign: "left ",
                padding: "0px 28px 0px 28px",
              }}
            >
              <Text style={{ fontSize: "30px" }}>
                Experience the Best Car Service in Hydrabad{" "}
                <span>
                  <Text fontSize={"20px"} color={"#fff"}>
                    We Provide Our Services in Over 100+ Major Cities also
                  </Text>
                </span>{" "}
              </Text>
              <div style={{ marginTop: "80px" }}>
                <Text style={{ fontSize: "18px", width: "80%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  nec egestas ligula. Nulla facilisi. Phasellus faucibus ligula
                  id mauris varius, eget faucibus lorem fringilla. Vivamus ut
                  felis porta, luctus libero eget, feugiat velit. Sed aliquet
                  leo et ex sodales,{" "}
                </Text>
              </div>
              <div
                style={{
                  marginTop: "95px",
                  display: "flex",
                  gap: "90px",
                  fontSize: "20px",
                }}
              >
                <div>
                  <StarIcon style={{ display: "flex" }} />
                  <div>
                    <Text>4.7</Text>
                    <Text>Based on 100000+ Reviews </Text>
                  </div>
                </div>
                <div>
                  <StarIcon style={{ display: "flex" }} />
                  <div>
                    <Text>2,50,000</Text>
                    <Text>happy Customers</Text>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Floating */}
            <div
              style={{
                width: "308px",
                height: "434px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "20px",
                marginRight: "60px",
                backgroundColor: "white",
                position: "fixed",
                top: "120px",
                right: "20px",
                zIndex: "1",
                padding: "20px",
                color: "black",
                cursor: "pointer",
              }}
            >
              <div>
                <Text style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Book your Car Service Now !
                </Text>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#282828",
                    marginTop: "20px",
                    width: "80%",
                  }}
                >
                  Get instant quotes for your car service
                </Text>
                <Text
                  style={{
                    color: "#FBBC04",
                    gap: "20px",
                    justifyItems: "center",
                    marginTop: "20px",
                  }}
                >
                  Rating <StarIcon /> 4.7/5
                </Text>
              </div>
              <div>
                <select
                  name="cars"
                  id="cars"
                  placeholder="Select Your Car"
                  style={{
                    border: "1px solid blue",
                    borderRadius: "10px",
                    marginTop: "20px",
                    width: "80%",
                    color: "grey",
                  }}
                >
                  <option value="car">Select Your Car</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Your Mobile Number"
                  style={{
                    width: "80%",
                    border: "1px solid blue",
                    borderRadius: "10px",
                    marginTop: "20px",
                    padding: "1px",
                  }}
                />
                <br />
                <button
                  style={{
                    width: "80%",
                    marginTop: "20px",
                    backgroundColor: "#001B39",
                    color: "white",
                    borderRadius: "10px",
                    fontSize: "16px",
                  }}
                >
                  Check Prices For Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Second Section */}
      <div
        style={{
          width: "55%",
        }}
      >
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "15px",
            margin: "20px",
            display: "flex",
            gap: "30px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            cursor: "pointer",
          }}
        >
          <Text>Our Services</Text>
          <Text>Currated Custom Services</Text>
          <Text>How Car Service Works?</Text>
          <Text>Rating & Reviews</Text>
          <Text>Price</Text>
        </div>
      </div>
      <h1
        style={{
          fontSize: "20px",
          marginLeft: "28px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        Car Services Available In Hyderabad
      </h1>
      <h5
        style={{
          marginLeft: "28px",
          marginTop: "20px",
          marginBottom: "30px",
          color: "gray",
          width: "45%",
        }}
      >
        Get hassle-free and professional car service, car repair, wheel care
        services, cashless insurance claim and much more in Hyderabad.
      </h5>
      <div
        style={{
          width: "45%",
          backgroundColor: "#eee",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          padding: "20px",
          gap: "50px",
          cursor: "pointer",

          borderRadius: "10px",
          marginLeft: "28px",
          alignItems: "center",
          color: "black",
          fontSize: "18px",
        }}
      >
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Parodic Service
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Batteries
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            AC Service & Repair
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Wind Shield & Lights
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Car Spa & Cleansing
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Detailing Service
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Denting & Panting
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Suspension & Fitments
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Clutch & Body Parts
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Car Inspection
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Parodic Service
          </Text>
        </div>
        <div>
          <img
            src={image1}
            style={{ mixBlendMode: "multiply", margin: "auto" }}
            alt="image"
          />
          <Text fontSize={"18px"} style={{ textAlign: "center" }}>
            Parodic Service
          </Text>
        </div>
      </div>
      {/* Third Section */}
      <div
        style={{
          display: "flex",
          marginLeft: "28px",
          marginTop: "50px",
          color: "white ",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(180deg, #FC7AA9 0%, rgba(117, 108, 225, 0.00) 100%)",
            width: "192px",
            height: "187px",
            border: "1px solid grey",
            padding: "10px",
            marginRight: "20px",
          }}
        >
          <div style={{ color: "black", fontSize: "20px" }}>
            <Text>Warranty</Text>
            <Text>Save 5000 INR</Text>
            <Text>Annually</Text>
          </div>
        </div>
        <div
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(180deg, #FC7AA9 0%, rgba(117, 108, 225, 0.00) 100%)",
            width: "192px",
            height: "187px",
            border: "1px solid grey",
            padding: "10px",
          }}
        >
          <div style={{ color: "black", fontSize: "20px" }}>
            <Text>Accessory</Text>
            <Text>Check Them Out</Text>{" "}
          </div>
        </div>
        <div
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(180deg, #FC7AA9 0%, rgba(117, 108, 225, 0.00) 100%)",
            width: "192px",
            height: "187px",
            border: "1px solid grey",
            padding: "10px",
            marginLeft: "20px",
          }}
        >
          <div style={{ color: "black", fontSize: "20px" }}>
            <Text>Miles</Text>
            <Text>Free Road Side</Text>
            <Text>Assistance</Text>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div>
        <h1
          style={{
            fontSize: "20px",
            marginLeft: "28px",
            marginTop: "40px",
            fontWeight: "bold",
          }}
        >
          Curated Custom Services
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "5px",
            margin: "20px",
            alignContent: "center",
            width: "75%",
            rowGap: "30px",
            marginLeft: "-38px",
            marginBottom: "30px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/6c1d/9fbb/58d7a447f2363d4e9d0a749587787d64?Expires=1698624000&Signature=hrIMgT4pOE9O2p4xKZJh1TMxBCG0Yg03f0~8~05GQB0vBizsXX8sKE4dskNJ6fm9NkR8fK5BJGRoPhkH7vXYqi~uYYW-HReIsheQKjpipAcGLmPkcbxz1Mlo5OEDukYfD8DQ~eX9UyxyAX~lITSMhlzb4S0ZKhUyAzlddfXVVEqGVnGDyA-9huSCi7Ny4rifSrLpRKZj2tvxCORqTgsJ95ZTNXXiYGOL5MGOyNl693VB5lpQRV4WoTOgrqbeT7gxlRi-9rVte98bjcW33Zy2WfNcc9jMyS8ql8RVlo046aoG99kLZMAdXi0eFtRRL0l7m4heJUTJozeLaEDgofv-oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Battery</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/91f9/6626/38a5de95ad5bb0a649512b5b43efb39d?Expires=1698624000&Signature=jA52ffdt1URHdFlvYCFHg9ajm~ZN~P-1fMHlk5s1YhKMb17iBAMIfR5KLXDdM22CUg2RBhuFy9qK4RB9qE9uLcnnH7d0FTZ1Dj7mkppxUtdOmio7la~CkI4b2QtXbB1P5sXhGz4sslrNye~MJ7DIBLFnq-QPhs15J54EjpRS8mt6n1eAX-ZturUD4fEzwn2GVgxtboKmNPF0qE4FlEDOfu06yGnRL-uBz0id-Zi7ln~MvRuIxY4RFNFBHJ9Vr1jDdRMQhYbgJblSlkZXvo0R7QG5kpnY8N1NiRgB27f3gETqLk4RW8GXymYKvuf1M8AhXMmoTRGe88cS1z57cgtLAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>AC Repair</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/5b27/4fed/cbb83efee85b1495ac251f0a0f9b3c59?Expires=1698624000&Signature=Gq0YMy6Kl0rjprwW1jhgmiImjVYQzASNarV-Sghj-aCIkNg3UXrj1VbapFdJXIiGcvEj~lWNxrLtvD29dyBZp5p5IyHjwcHBeLc7RjkFGsJW70-wlkHq7hyFWGdTqtJA-2hBCNLgWEXa2g1UK7~jCpPHNH5JBLz4Bh07J7m4narHKgzj~A7M-owxJMLblgCnRhOyVPubx9m49DJ8Hzg8oUazgaNmFyS4nCkF5CHke4GNjMtwhxp5GK2bVa--TwwQkQqyAK1bEtRyZIG4u~sI5t8aa3jDBCS8GTy9-IefeQa24uGZJ-rtaM9dpPTCH7VRkaPnYMQMVOhzfE657AaPNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Brakes</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/3e37/8a08/d011e201d7db79f9457c8b9ea118c50f?Expires=1698624000&Signature=H9zoTi9ntZPpqxiTVmCd-kD2EMhcRXn1ihCkp~goLydjdwLSNcMq80JND5Gi12H5jFu55ycvioG4sUIXzs3r6-FBpPIk64tATk5woQfIEfHXLWHrk-KxmxX15wlEO-FArcNuz1awGtwUCqQpQDsDGtarAQ-GpIe6wXaU2bHxiwSr35fY9AZuRsZYbU3oAG9FaeNORykPmLMPmn04AZYt9xdIv1ZA7TX8kr6~yc2-~HTkfQApWz1uJosEt~qn8n-3L1HKQKSm~w2uLpxvbCSvv5aSs2HUBMGehWuHCcHDBCE6W66X19d895fuJrQD1e~F347SI6H-tJoSFt7p5Ei60A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Clutch</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/bf9b/7bbf/e35e2fd4ed3e967007fde4fdd3cb83e6?Expires=1698624000&Signature=GsNZYmlERNOjRW1Q2Kfen4twhvxGfAfB-6mnFTZmSSUSSavS65bhweqD~Igy1OA3DHjnzVhUrFe-RuVaDdCkXGmSdKtzaczL~1WxW72ODopZuyk2Y8yomfB~dNShUmPHYDc9d4Lix0I5RaA6Gahwf7mhGC-f6rWSJob~03pJ~4P228mRfdPv5gB8fJkiYpfweXE5AUNOOnlTw5-Bxh~fWcYh78GhD6M31wDOvWYftxr8RF30fKS322aqlsW~n7QYh98blBik17QAmIdmoWmvYklkLfv0u0xxEiOHjAOBt6FGgBW~6CrkrSe9g8tYqRwRuzwW179S5nT8LIT17ioc3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Go Connect 2.0</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/a159/17ce/6aee813897a094e3ca2e161479d24fa3?Expires=1698624000&Signature=XLrbVKXJsVXGJz6kd~jdesvQGDba4kQNH0njt59w9U83pBwhML4R2w6zqQFqqrXojBpw4Y0R6g42cPChgHcHwG4s19qZw9YMvuh~f8wIqvWgRqso808YPWPMelWJDqNcMfL6-IvUhx2M6Nj62R~mbCi5~Cr-rdooN2UDXhGDCCuKN5LU~Shqia6Ar1qfPViAK1P9CR3oAAoGIv4vBGgWYi3K1uAgsLbOe~S8a5VCD593atKHbJnAA~ikYWMlcCnQ~CSCcuSdQ9HIBzJrjnMYod5OX3CelMsjayeBhaPQBTiTfDMsmHJdp2rLwOx0VOBR~6ZbgjXkz33fyYmksuFtGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Lights</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/18f1/b7f4/23e741458f6a10fb489bafa45e328f2c?Expires=1698624000&Signature=GCHRd8CVUiKKh-vGquiJRVKzun9aXVpvM7sHLLmfxZp9zfbzB1dwWEIJU3UlefP419EpgpEGAljSgOvkT2G-ft-P~HiSIUSN6iKlI0hlSW176VPnkqGisQogQU0egKGNExGrSqLviX5wonFwmVNgyklVStk0txJWjaZmnETL9LWQlBxUDRG2Z09oBllBMwio8HhvpYsQvOMXS4WtTWLY2yR8fdWmt-5WJhI5R8CR1hxclcL8TygbEvHpzFdo0AHuQXPjso6VQfZ~i7Tr6v1mWAgRyvqeq4xFZK0Ky2~DvG1oIWvqfs3GpvsPj4SrwvGy0n1aBG9JdKePcyQQfHyjxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Glasses</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/5fc0/282d/9bd95571a78d4f177cb3ede99eceb919?Expires=1698624000&Signature=Lnqbjim06oTTBU-JswClSWA~hRxcs2cfRzmuM0tKYjfPQ~U6~3fALfnMfaTxetxM~eJEcoCDFlGTaCwq1dLY8TQJuwLUSu87HcOq0sPxX0MvJ5n~5tgS3TOTbdGyys8sw5e5lqwYTyupyPiojp-Bp5NMLh8L5csAYhd-5RdAIUUuP-npFy4yp5EKaEc8O6gOFbA9G3dnU6XEnQRnqc2N5vDNFX6v~gy2uCMbFvMCoFAdU59VrZbKLWjtYEni-W0kkZF1UPrjx3W~y4zvx6xAqkZrcnOJzoetzGeX0Dp9wFa4Ct0DgBXF1xhoT~btv5YMQWQeg5cX7MVUszGKgmKuGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Car Denting</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/2e47/ff54/cc8d0c9d673bb896699b415c87a91a60?Expires=1698624000&Signature=Hwccjk8vd~1RX-MxK~8wbfLu-7PBpfbZI4hxqEA88D5gM59I~SQ1JkbqqzCTM6ov3gnUeXApTDOL09OL-MogkYFyBhrfUyfkUiTtSLkBByDtjL1bytrAZ79wLomI2oBQ5sbQXIYcElumETqHTcZe0t1UB0LRDNu8tQdqZ6akq1S9hT5EZ6yD9EnnKQAijJwOzlJ34h0iRq5KuaYytY51I4TvJOPQOGGpVggJpPoUzCAhsH-U1N1XU1f4pp3HI6tl3kJ~0eQCf8pkm0n78dqqQNFljYzf9DAHWyhRDeOxNbEUrOiAsffLvNXWByzK6K8QTwabpwfC9fpXE-X-G5ty7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Tyres</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/f7fc/e299/071ac1ea594552539cda36da68c768cd?Expires=1698624000&Signature=pMeHMFaI0IAycuyW0L0mVZEka9ZV2zoBXmfzdEE1aJCH88UcImrPukuewisg1x1jc20cJSfroYd5adL3saJLJWSwQ594754sKhBvghoZoH-I46p3dZtGdxirvBPZbxpH11aQA9pBfd5PizWoPt5zr1bshxzZqx~KrsSqrSJm-k04X~RLRnazPITZ~tZwLRwUij84gdWhpbsGxVu44trPxNMd9KrVJKeeiR-lwpD2EMErzaCymTFGivhGkCcboYObcCvXa9NEqsYM8eGb9JBaHLUQ~H8Io8mJn195sglJJwCcrvSGvJveUadsaBsKWTGzkX-Jxuj8opVhEhNAIXvn9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Car Spa</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/78e2/5a6f/ee8fd3b86309652d896acb8de9d10a8c?Expires=1698624000&Signature=qtLMsIOgeEGEVYleqm7Co73QVTpAkNfJGDxb0-mezeE29Qll4sknKtMQSfQXjDgppj530jt0L8K81sMIxXn035uja0W4Y6MZGcuGVWExssNQqUBlEukFdDFLUfVLUHXI2kFlqRYk3VpnYrYAkaLd~U9LUYPKaEm18j-oZOEVRjmhdSngP845gZTT2ERE2751aPq08~bCP4xYYpVMaXLio0NpZa75gt5j0~gBWKGxnBWf3tdUGgCSHRS5Gjvf2LLTEtrK3KVfWGc6oP-Sqycq4LETIWTfpA6tEuqlEDnM09lM69iuD5wbzqd1F0bTupXwtyzD-EHlwkLHQDlDie2izA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Steering</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/fc7a/3d01/5b220e521cf1ab38ef3a090808b793dd?Expires=1698624000&Signature=OpifXIaqtAD1jaPMkrG2TBJMTy8AY8HgwdLA~Vi12vOyrb9kCbo4xxoSxaSKQ~McaK-0fsL5MGs-e144BzNSg1FO5lnsooL3RdJf19XIMt5VYNfFVZvxiRlhFGsqLM95QknfqmhGzoBLgkQSOC22HfLrux9LeRuxnWA7LJdaMMnQmEBwsOIAQDjgVE6h0NezZCrD-i2c08sZKCQ1XtYsQ5FNR0xp01BDlYGPgo~zVOTIlP8K5TrUE3sAcqwXThqK42ayx~5Bal8eNTmydgdbQaS1B6rh9f6Jx1Eu12tMGqZ1WYPCK-nXrRK3KrM1v-Qvlk~51PVNNBERiY2ZDugw4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Suspension</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/3ae9/5f90/c81e482bf56d056e3029aa3ec48b2a81?Expires=1698624000&Signature=fRJ2FLE9DzdZSGNzEi4thGJPciKMhmI9u9Sn8GxmEWH9xqn9mEUC1l6qHCkqgtQjhqi2ZE11dch4-6MhFJwO~SrIWhG3AeyP1QWNj0rdje7xNBZhNOMYPWbtq-SU7oSoWN52uu3tOeN0rxGm9bkTIlssXZjIYu-2wjgE9~cDddrVRKltDR-tRDn9Q7CjYlQ-f8caH7uKH3y5Pk7zb4oNyq9fXY8vL3rL3O1NUNsfDZD5H6ufqlCqZKa1AhxCWpworDNI5t~SNfjb-~uqSzAt~XA3mFcGEBwGdvJzT3JwIGt0T3XWxGj9B8sdLYaFxEz9G9TVllXAvUfJQ5-w1cZXCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Body Parts</Text>
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/c5be/ad5a/3cbb57f907ad601045cc1a1ec54f9923?Expires=1698624000&Signature=mT9ATjsMfRyQGRmvE7axLupRtD2E3x8XK0QZQZYzFLB2-J6qrToNjMd2jja7hB19wLbcEXXTPBHQ9yUrqj296xU82VZvmPj8Z0CRFwO~YMwHDvyyBHHoSiahmtH5VPjLGOVLr9AxxgVsQjqq3mA9urBRaEbQhc0XqduOhf32IT-uILKNU3phNzxyLwkscNfhX7kN8cZS6nGHvLYq~NWo9V38jXfffTrNH6KhXmBUzFmRr5LrGMxcpY95MQTzCOVBWvU9Wx85v3EZr7bVfULY-Vd2w5iMv2--U4WTj7SMaRASlmnioi~4xxQjSy-F~Gn7sFZ~Hx8qpKecGiUSknFmlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 "
              alt="image"
              style={{ width: "50% ", height: "100px", margin: "auto" }}
            />
            <Text>Side Mirror</Text>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div>
        {" "}
        <h1
          style={{
            fontSize: "20px",
            marginLeft: "28px",
            marginTop: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Choose the Workshop near you
        </h1>
        <div
          style={{
            display: "flex",
            marginLeft: "28px",
            marginTop: "50px",
            color: "white ",
            fontSize: "18px",
            width: "829px",
            height: "258px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              width: "265px",
              height: "258px",
              border: "1px solid grey",

              marginRight: "20px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              src="https://s3-alpha-sig.figma.com/img/9615/c845/fa61cd33b8d681ea72293a122d8fed06?Expires=1698624000&Signature=UmuI0pkLYSvTsup2obwi4T3y1ZSn3FTp--SkOosWKTwWVcLrguOPnT0ddRXClOgLDdRZ122MJkYeT8IWsvz3PXFsFOTLbBecwlXO04em4-iY62QoEH8BkDiAnSkk4CVS3xcNCtUfS0PWWbcVJXyk9wmEJ7jrU-WvqIolgb628BLuU5stCRCmfz1CDYU~j1gTqUE5dDqQ~M4PKlkK7WYu0aiQ5a-~aO4EmMbWaoFHQuGqGm0cIi-fILN2bAEc-lWIvYPovnmkWW16gsstL43DFrx7BlYyva~hiZNXvhpaxzwg9Pnm4FYrBrsjHxxy6qcAnhbj0TfjKZ3eTwjioXys5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
            />
          </div>
          <div
            style={{
              borderRadius: "20px",
              width: "265px",
              height: "258px",
              border: "1px solid grey",

              marginRight: "20px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              src="https://s3-alpha-sig.figma.com/img/7616/9b38/b902ce841ecb52dcc7c3fa1260b77226?Expires=1698624000&Signature=FEZ4iApjiUwJ19-myq1lCBlcrIYF1aKSckRvTMEAg7beh9xqimAzwLmWWR2EGiEoRKOrl9jh6uCW3J5wAUfXGkVrEdEiAkgLvicCVx6CrRTvQkoYMPnt8F6d~Q4YluXnLKO7e-cPh2dE8VJNQ7rR4~hhbjCCk6iUCo85qc8hlJOczZcJa8YOxN8ZA3UH8pNrmkXM-a-RQtI3TcyEhDKXvNwQ0wX-9G1RWe9nJQDk~PwjnHW8hcs61gWHAmgdY9YaLbsAAGjaePwzGD4QgJrY9z993CykcZSne5BSiu7~~P1-Z1wqiE3pWacIXxHgXBgzZRAEyb-rPJ3EwMwFrb9gkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
            />
          </div>
          <div
            style={{
              borderRadius: "20px",
              width: "265px",
              height: "258px",
              border: "1px solid grey",

              marginRight: "20px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              src="https://s3-alpha-sig.figma.com/img/d35b/4884/1875359dfd3f6e19a1cd171c8fd01033?Expires=1698624000&Signature=eQirX0MuVf47~YGVsUDLNFsSWs~uRM3ImdnbBPR~ZloLHp6zVwuB2cmfZwCtWbuA5I3p8I1n2CygBUkEHHNI9z0irgJxNqpxyDzJc9-TjMaZPXgAK7KASFWkf8RD7wsObwK7129WaqkXdaAiAXYZWRBkAxWGGUNl2pqlX6LgLaoXTvTKvn5sZ8BSbFMtM1HcESZewZHPpDd0WWhWwqKfv4cy2-61o6~N~3u1pZNTRdCEDLg4a7cNqizNHvTp7Dv48j3xqCskMBS4kTJBCS0FaCnizRXcvfMa0zybnl4Oo~czleGBjG4Xt2PsEabCJVEKZ-3~iaakfTXpN1uEvIWfMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Section 7 */}
      <div>
        {" "}
        <h1
          style={{
            fontSize: "20px",
            marginLeft: "28px",
            marginTop: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          How Car Service Works ?
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "10px",
            marginLeft: "28px",
            columnGap: "20px",
            width: "50%",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "264px",
              height: "264px",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/c06f/bab5/d397ba9caab279a85ff984cbee58726a?Expires=1698624000&Signature=f-Apl1uThz3vP~hc5N62kpeeXHhkNLh2tuYGrNXhYV4SehHDmch0ejcEm-fbLGC0jM4ghpro5s7~apBbGiIm-7A6UZxpnJGqZ4oETpF3~g-jdX3NO~Zh~dIoumPOItPeCoKiFfhetqKhJrBRQI9K9lESjzoTA3PQqwAXDw3hOJpihnU2u8DOnxrO3oMjfttjrTcQ~IOa0ogNy3P-EM9o5MpKsMh2N~h1ax5ulLnmJkOKAhDRQXDJT0tzPckHfiPVzrOorVioWhgZVByxk2kQjRA0NGD0GsXM6TAllcLM4z37mgE2zY~7P0bCP0E6-XuHTxy8z0WU6yfIrQpiwG4dGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "100%", height: "90%" }}
            />
            <Text>Free Pickup and Drop</Text>
          </div>
          <div
            style={{
              width: "264px",
              height: "264px",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/268f/e935/2932c5da94ec743841484e229ae9f26d?Expires=1698624000&Signature=hxAiTRqLZev~OBco7kTeNdgKvHExsrP0QtLqhulNNZ5MKzMyNdVNU7tAd6j2IO8aEflLWnAZJYkQEw1clksDF9fkOT6C4IfWhv07lXZqyQAyZcg0jDwaVthXS0Of0Zo0xYtLGz8JvSk7-ZooBAFVP-8ZlISoB0Ai2yO-liaA63Nzs5d63w0JbtdVxLLaPcOEMK2FNtVTG1cY8WqNFtT1IJYFLBF3EA-uKRKsZpcfReOTE2cDJy5eBQgWgYc1hfgqywDNk59acVJsWxBJOh9Y0EJbyLPfWZVh8yl-xa87XtNDMzFRTS9KuySm2SuYG8Z7s3JoSf4E0upfaXpoPSE0VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "100%", height: "90%" }}
            />
            <Text>Genuine Parts</Text>
          </div>
          <div
            style={{
              width: "264px",
              height: "264px",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/f17d/9642/3ab436d8609e5423af03ce8c12d00828?Expires=1698624000&Signature=WhWSc-iJiI2FOqPa~1lHQaXqqtG~YezXiKD-wqJ7UrM4iX~pFUFm~t8evdNJJmgVeD78oirW86rVTUfjJh0~C0dy5TI8s5sL-p9af6II3GiBJ2YbaccpY4wNxXoiWw3HnbFCAJBPVm2jHCwpD0qe865h-YZbkX2qdTb~spdms8x4qAvQQFln3chvh9Sm-jwRg5K3TegH-RoPxFRUcecQFOUDEVViWu3noDIcv3tv5dpZ~NeyfLCI-IxaHOFLu~nYCGP2~3t2qgOL6yCcpYgfrhXv3ixdtzvWROPfTsvl9ZcgKxa~i2PPzsYM1eZ8nPnEr2TY6wYi3smbNA2oJ0wMzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "100%", height: "90%" }}
            />
            <Text>30 Days Warranty</Text>
          </div>
          <div
            style={{
              width: "264px",
              height: "264px",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/8a78/72b8/95a6c6c9899fe8fecc7645a2e711d975?Expires=1698624000&Signature=Hl6rk0I3ZSIwTVUk~Uo3UnPB5dMQL6FMDiOc~1ty477zN8laXJhdT4QFJByeWnmI8kN3ctbsuG6kHaOehK9lQHGUO4SAFa~RH5li5jf44C5rbmw13hzKL29oBKBAvCIRsm1o9nrUNyMdYPXUmCQQZ7xmqjBMguJMMfGJh64w2gaQZbZoSP9jotZk~YR7LNMWtf9Hzu0KYtFLuE4Zt3fHfBqO0pDAbNpcY75wsPZF3m~P1LBPY~bFPloXVEB2InekwvGeji36EWSiq4R8wfWrZuF07UrNmQweS6YKap-PLs59cuVHZHz46yz3rDz5cgj3KPvcLCKPTAGDBKfOTSC81w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              style={{ width: "100%", height: "90%" }}
            />
            <Text>Affordable Price</Text>
          </div>
        </div>
      </div>
      {/* Section 8 */}
      <div>
        {" "}
        <h1
          style={{
            fontSize: "20px",
            marginLeft: "28px",
            marginTop: "90px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          What Car Owners in Hyderabad Say
        </h1>
        <div
          style={{
            width: "960px",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
            marginLeft: "28px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "376px",
              height: "300px",
              borderRadius: "20px",
              backgroundColor: "#EEE",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/d3a7/946c/9c38e261bb9e3994925eb369413b7065?Expires=1698624000&Signature=nSWGWXvDSdGfFOsNwD8P0AN-0RmrHpaSdBoSd7Pkn4Izeanfz5qV~FdLM8ILiKQmxQ2VtW0GwZfCJs9P~15PoW6TNcwy2wuDtdLRSSyI3FREFTmKILJv0AUYp6DiEit8jJ6ugo8l2OAJvdbm3b6DqrkL6AuxlelkJWHsDJ4GmEa~D8jDeAl5uE5YaX2iGn~lSTDg438OHaBSi-XMMTEw4JabeU3XYT2Ycdp99mqxvypua7TkSasPZBHrLsvM2TMVFDxdAckHM0PWDeNxoF~ZMOdjdZ7vk~mvx7Ho0Xib-3Cgla0SjGRnJMmvPcAAEGeX9FzzTMfILpJfB2~L9W7KSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="image"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              />
              <div>
                <Text>Mohith Reddy</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#FBBC04",
                    gap: "10px",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "900",
                      lineHeight: "normal",
                      letterSpacing: "0.225px",
                    }}
                  >
                    1 Week Ago
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "##282828",
                lineHeight: "1.5em",
              }}
            >
              <Text>
                Absolutely recommended garage for everyone..!! Recently I had a
                issue of oil filters and engine m ounts replacement for my car
                BMW and i don't want my car to showroom because it will usually
                takes 1-2 weeks , so then my friend suggested this garage. And
                even gave the manager number. The manager there Sai is very
                professional and friendly person. With in two days they resolved
                my issue and even they gave an astonishing general service
              </Text>
            </div>
          </div>
          <div
            style={{
              width: "376px",
              height: "300px",
              borderRadius: "20px",
              backgroundColor: "#EEE",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/931c/a858/0e7929681e66539c74eb3ce8c36ebd1d?Expires=1698624000&Signature=h7lcph8~KPiUh28gmYFk384YlFXbeO7mZjx5PtcLTVvfavwmQWGaQ9Iml4HZJ9WRVZ1eg8G1wcvg121y3hUNzp6ycnsBvsebiGcvh-08ZpO5EwtXBpbd4zgr4OwMyPK4ThEELMrto4xP~sDwwHrjzasYxmOKIDOiEjWVD0iVADOe~zuGlbQPK2MpPUoxRj2kJjlb-H-SGo8-0UIAcfVHG243AZAUFjr7xGMMKBGK7y64tGAwmyJ0Fqoyl5LyF7bX0WLAqZGqMxxTShKls3T981dnQMMskrSEWHRB9ZMipXo0EY--t3H7dvUSPJg0q3cD83AwovFRgWrmDtkXVKo7QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="image"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              />
              <div>
                <Text>Shiva Kumar</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#FBBC04",
                    gap: "10px",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "900",
                      lineHeight: "normal",
                      letterSpacing: "0.225px",
                    }}
                  >
                    1 Week Ago
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "##282828",
                lineHeight: "1.5em",
              }}
            >
              <Text>
                This is a very trusted most popular and very amazing service
                provider mechanic luxury car service centre they have very best
                experience in this field for providing very best service (I car
                service) very good experience with maneger Sai
              </Text>
            </div>
          </div>
          <div
            style={{
              width: "376px",
              height: "300px",
              borderRadius: "20px",
              backgroundColor: "#EEE",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/1feb/b26b/533f382a698cc8c73516ac5fb757362b?Expires=1698624000&Signature=XrVtJKsSvEPuEqLvG2q4-P1Ocrgoc8mEJ7RdPg1Pg7goi6GLZq9oTmVgrftfZQhx7O3TnIg7erU1vZ0xW0s~9b9FBkwTek5RE0b45VpP7bsWbDU2BXsINON7XYI9V4DFnMCSL6s7uvbZJlfHEEe9gGQBAqUnzkaihni2e0Bkg6xxMAXCpQBOX8gNqjUhjsZCYmY5QVl2LGUCaaWImZPcYuj7Xdd1J6CLTcMc1NxaDR3mE1l1Mxbh5J~BVKzidsmyAbGEnHlQ0a9dRWOBMeCuswoOaYQ6GELNQNmNKYcaxPGB0cM~anzVBY-DuLo~r81fy5D3VfxKOvG9GCL4612n5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="image"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              />
              <div>
                <Text>Meghana Chapala</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#FBBC04",
                    gap: "10px",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "900",
                      lineHeight: "normal",
                      letterSpacing: "0.225px",
                    }}
                  >
                    1 Week Ago
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "##282828",
                lineHeight: "1.5em",
              }}
            >
              <Text>
                Highly recommended this service stationThey have done a very
                good job in fixing all my issues in one go. i had done my car
                bumper painting and general service with other issues.all issues
                fixed perfectly.... Good job...👏 Service: Auto body & trim
                repair
              </Text>
            </div>
          </div>
          <div
            style={{
              width: "376px",
              height: "300px",
              borderRadius: "20px",
              backgroundColor: "#EEE",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/1feb/b26b/533f382a698cc8c73516ac5fb757362b?Expires=1698624000&Signature=XrVtJKsSvEPuEqLvG2q4-P1Ocrgoc8mEJ7RdPg1Pg7goi6GLZq9oTmVgrftfZQhx7O3TnIg7erU1vZ0xW0s~9b9FBkwTek5RE0b45VpP7bsWbDU2BXsINON7XYI9V4DFnMCSL6s7uvbZJlfHEEe9gGQBAqUnzkaihni2e0Bkg6xxMAXCpQBOX8gNqjUhjsZCYmY5QVl2LGUCaaWImZPcYuj7Xdd1J6CLTcMc1NxaDR3mE1l1Mxbh5J~BVKzidsmyAbGEnHlQ0a9dRWOBMeCuswoOaYQ6GELNQNmNKYcaxPGB0cM~anzVBY-DuLo~r81fy5D3VfxKOvG9GCL4612n5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="image"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              />
              <div>
                <Text>Meghana Chapala</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#FBBC04",
                    gap: "10px",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "900",
                      lineHeight: "normal",
                      letterSpacing: "0.225px",
                    }}
                  >
                    1 Week Ago
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "#282828",
                lineHeight: "1.5em",
              }}
            >
              <Text>
                Highly recommended this service stationThey have done a very
                good job in fixing all my issues in one go. i had done my car
                bumper painting and general service with other issues.all issues
                fixed perfectly.... Good job...👏 Service: Auto body & trim
                repair
              </Text>
            </div>
          </div>
          <div
            style={{
              width: "376px",
              height: "300px",
              borderRadius: "20px",
              backgroundColor: "#EEE",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/1feb/b26b/533f382a698cc8c73516ac5fb757362b?Expires=1698624000&Signature=XrVtJKsSvEPuEqLvG2q4-P1Ocrgoc8mEJ7RdPg1Pg7goi6GLZq9oTmVgrftfZQhx7O3TnIg7erU1vZ0xW0s~9b9FBkwTek5RE0b45VpP7bsWbDU2BXsINON7XYI9V4DFnMCSL6s7uvbZJlfHEEe9gGQBAqUnzkaihni2e0Bkg6xxMAXCpQBOX8gNqjUhjsZCYmY5QVl2LGUCaaWImZPcYuj7Xdd1J6CLTcMc1NxaDR3mE1l1Mxbh5J~BVKzidsmyAbGEnHlQ0a9dRWOBMeCuswoOaYQ6GELNQNmNKYcaxPGB0cM~anzVBY-DuLo~r81fy5D3VfxKOvG9GCL4612n5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="image"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              />
              <div>
                <Text>Meghana Chapala</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#FBBC04",
                    gap: "10px",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "900",
                      lineHeight: "normal",
                      letterSpacing: "0.225px",
                    }}
                  >
                    1 Week Ago
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "##282828",
                lineHeight: "1.5em",
              }}
            >
              <Text>
                Highly recommended this service stationThey have done a very
                good job in fixing all my issues in one go. i had done my car
                bumper painting and general service with other issues.all issues
                fixed perfectly.... Good job...👏 Service: Auto body & trim
                repair
              </Text>
            </div>
          </div>
          <div
            style={{
              width: "376px",
              height: "300px",
              borderRadius: "20px",
              backgroundColor: "#EEE",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/8ac6/5777/055b31aa167b6098ff3c869438942620?Expires=1698624000&Signature=eMcQO606UWigm4vF5ZhH~VW-5iQOL1vFQieqbvf9amcTE~j~6lqL4SipZaPszZ0eB1VAF~0Z~7ENu5aKQ0BR7sokQtwtjYxVxjeB1jVMulqeMYGUbm8w2nOb-9uAcQOVZUzeWs1-7Gh0l2PlawlIfuBCIPU5fsDRYh2rFa8dBMjBMWgnDdWDT2zKw6aWtHmWkFDYztkKH1MYH~5~-R9MM40QgarLZhi5e5eU8FiCnbDcFom4mtz1rPzkS69vqFK4VgLqiuK-j7Vv2lZyNJgq5VAb53wHj-mZOL9XXXn-F5DXtyrYMW48B60azT-AJi7ng~kmJmKKzmCfFrYYO64FbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="image"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid blue",
                }}
              />
              <div>
                <Text>Atharva Kulkarni</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#FBBC04",
                    gap: "10px",
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "900",
                      lineHeight: "normal",
                      letterSpacing: "0.225px",
                    }}
                  >
                    1 Month Ago
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "##282828",
                lineHeight: "1.5em",
              }}
            >
              <Text>
                Excellent service. Sai helped me when I was stranded on highway
                (100km from city) at night due to battery malfunction. The
                towing of my car was arranged by Sai, then he repaired the car
                in quick time. He made sure that I understand what part was to
                be repaired and why. With the seamless service, I have become
                his all time customer :)
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#001B39",
          height: "507px",
          display: "grid",
          placeItems: "center",
          padding: "47px",
          paddingTop: "-10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#001B39",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridGap: "20px",
            color: "white",
            lineHeight: "2.0em",
            width: "90%",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <div>
            <Text style={{ fontSize: "20px", paddingBottom: "20px" }}>
              ABOUT US
            </Text>
            <Text style={{ fontSize: "18px" }}>FAQ</Text>
            <Text style={{ fontSize: "18px" }}>Carrers</Text>
            <Text style={{ fontSize: "18px" }}>Terms & Conditions</Text>
            <Text style={{ fontSize: "18px" }}>Privacy Policy</Text>
            <Text style={{ fontSize: "18px" }}>Car Service Partners</Text>
            <Text style={{ fontSize: "18px" }}>Workshop Locator</Text>
            <Text style={{ fontSize: "18px" }}>Offers</Text>
            <Text style={{ fontSize: "18px" }}> Reviews</Text>
            <Text style={{ fontSize: "18px" }}> Directory</Text>
          </div>
          <div>
            <Text style={{ fontSize: "20px", paddingBottom: "20px" }}>
              OUR SERVICES
            </Text>
            <Text style={{ fontSize: "18px" }}>Schedule Services</Text>
            <Text style={{ fontSize: "18px" }}>Car Service</Text>
            <Text style={{ fontSize: "18px" }}>Car Repair</Text>
            <Text style={{ fontSize: "18px" }}>Car Painting</Text>
            <Text style={{ fontSize: "18px" }}>Car Detailing</Text>
            <Text style={{ fontSize: "18px" }}>Car Cleaning</Text>
            <Text style={{ fontSize: "18px" }}>Car Wash</Text>
            <Text style={{ fontSize: "18px" }}>Car Inspection</Text>
            <Text style={{ fontSize: "18px" }}>Car Accessories</Text>
          </div>
          <div>
            <Text style={{ fontSize: "20px", paddingBottom: "20px" }}>
              LUXURY BRANDS
            </Text>
            <Text style={{ fontSize: "18px" }}>Mercedes</Text>
            <Text style={{ fontSize: "18px" }}>BMW</Text>
            <Text style={{ fontSize: "18px" }}>Audi</Text>
            <Text style={{ fontSize: "18px" }}>Ferarri</Text>
            <Text style={{ fontSize: "18px" }}>Toyota</Text>
            <Text style={{ fontSize: "18px" }}>Tata</Text>
            <Text style={{ fontSize: "18px" }}>Ford</Text>
            <Text style={{ fontSize: "18px" }}>Renault</Text>
            <Text style={{ fontSize: "18px" }}>Skoda</Text>
          </div>
          <div>
            <Text style={{ fontSize: "20px", paddingBottom: "20px" }}>
              POPULAR BRANDS
            </Text>
            <Text style={{ fontSize: "18px" }}>Maruti Suzuki</Text>
            <Text style={{ fontSize: "18px" }}>Hyundai</Text>
            <Text style={{ fontSize: "18px" }}>Honda</Text>
            <Text style={{ fontSize: "18px" }}>Toyota</Text>
            <Text style={{ fontSize: "18px" }}>Tata</Text>
            <Text style={{ fontSize: "18px" }}>Mahindra</Text>
            <Text style={{ fontSize: "18px" }}>Ford</Text>
            <Text style={{ fontSize: "18px" }}>Renault</Text>
            <Text style={{ fontSize: "18px" }}>Skoda</Text>
            <Text style={{ fontSize: "18px" }}>Volkswagen</Text>
            <Text style={{ fontSize: "18px" }}>Audi</Text>
            <Text style={{ fontSize: "18px" }}>BMW</Text>
          </div>
        </div>
      </div>
      {/* Footer End */}
      <div
        style={{
          height: "297px",
          backgroundColor: "##282828",
        }}
      >
        <img
          src={footerImage}
          alt="footerImage"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
