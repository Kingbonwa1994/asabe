"use client"
import React, { useEffect } from 'react';

function PayPalButton() {
  useEffect(() => {
    // Load the PayPal SDK script
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AUsOz5Vw_c_pTPVrDsOxD0_tHTWPh55a_VjGsc5DGF3K9hX1lodNtcUTtiwEBKrOvkVuz-Wc8YIMnKFI&vault=true&intent=subscription";
    script.setAttribute("data-sdk-integration-source", "button-factory");
    document.body.appendChild(script);

    // Define the PayPal button rendering and functionality
    script.onload = () => {
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "blue",
            layout: "horizontal",
            label: "subscribe",
          },
          createSubscription: function (data, actions) {
            return actions.subscription.create({
              /* Creates the subscription */
              plan_id: "P-9GB54765BN876160UMUGNRUI",
            });
          },
          onApprove: function (data, actions) {
            alert(data.subscriptionID); // You can add an optional success message for the subscriber here
          },
        })
        .render("#paypal-button-container-P-9GB54765BN876160UMUGNRUI"); // Renders the PayPal button
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 justify-center items-center min-h-screen bg-gray-200">
      <h1 className='mb-40'>Get Jobs Now</h1>
      <div id="paypal-button-container-P-9GB54765BN876160UMUGNRUI">
        
        <div
          className="flex flex-1"
          id="paypal-button-container-P-9GB54765BN876160UMUGNRUI"
        ></div>
      </div>
    </div>
  );
}

export default PayPalButton;
