import { Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
export const HomePage = () => {
  const [textValue, setTextValue] = useState("");
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
              <Text>Login</Text>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "95%",
                margin: "auto",
                marginTop: "48px",
                textAlign: "left ",
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
          </div>
        </div>
      </nav>
    </div>
  );
};
