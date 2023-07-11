import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MdLibraryAdd } from "react-icons/md";
import { CiFaceFrown } from "react-icons/ci";
import { HiMiniFaceSmile } from "react-icons/hi2";
import "./bounce.css";
const DialogBox = ({ width = 350 }) => {
  const [bounce, setBounce] = useState("");
  const [icon, setIcon] = useState("");
  const [subscription, setSubscription] = useState({
    title: "Hello",
    description: "Would you like to subscribe?",
    state: null,
    justifyContent: "space-between",
  });
  const iconStyle = {
    fontSize: "40px",
    margin: "0 auto",
    color: subscription.state=="subscribed"? "lightgreen": subscription.state== "unsubscribed" ? "lightblue":""
  
  };
  const handleSubscription = () => {
    setSubscription({
      title: "Thank you",
      description: "for your subscription",
      state: "subscribed",
      justifyContent: "flex-end",
    });
  };
  const handleUnsubscription = () => {
    setSubscription({
      title: "Sorry",
      description: "to see you go.",
      state: "unsubscribed",
      justifyContent: "flex-end",
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 400);
    return () => {
      setBounce("bounce");
    };
  }, [subscription.state]);
  useEffect(()=>{
    if(subscription.state == null){
      setIcon( <MdLibraryAdd style={iconStyle} />)
    }else if(subscription.state == "subscribed"){
      setIcon( <HiMiniFaceSmile style={iconStyle} />)
      document.body.style.background="lightgreen"
    
    }else if(subscription.state == "unsubscribed"){
      setIcon( <CiFaceFrown style={iconStyle} />)
      document.body.style.background="lightblue"
    }
  },[subscription.state])
  return (
    <div
      className={` shadow-lg mx-auto mt-6 bg-slate-50 rounded-md ${bounce}`}
      style={{
        width: `${width}px`,
      }}
    >
      <div className="p-5 ">
        <div
          className="grid "
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "flex-end",
          }}
        >
          <section>
            <h3 className=" font-semibold text-2xl">{subscription.title}</h3>
            <p>{subscription.description}</p>
          </section>
          <section>
           {icon}
          </section>
        </div>
        <div
          className="flex gap-2 mb-2 mt-4 text-end px-1 w-full"
          style={{ justifyContent: `${subscription.justifyContent}` }}
        >
          {subscription.state == null && (
            <Button text={"cancel"} classes={"btn-outline shadow-md"} />
          )}
          {subscription.state == "subscribed" ? null : (
            <Button text={"Subscribe"} onClick={handleSubscription} />
          )}
          {subscription.state == "subscribed" ? (
            <Button
              text={"Unsubscribe"}
              classes={"btn-danger w-full"}
              onClick={handleUnsubscription}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
