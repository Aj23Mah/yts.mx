import React from "react";
import "../../../assets/scss/Warning.scss";

const Warning = () => {
  return (
    <div className="warning-box">
      
      <div className="warning-text">
        <div className="warning_header mb-3">Warning! Download only with VPN...</div>
        <div className="mb-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          obcaecati id ratione necessitatibus, modi deserunt eligendi iste sequi
        </div>
        <div className="mb-2">
          tempore provident numquam molestiae eum, accusamus facilis maiores
          impedit voluptas error fuga.
        </div>
        <div className="mb-3 color-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          obcaecati id ratione necessitatibus, modi deserunt eligendi iste sequi
          tempore provident numquam molestiae eum, accusamus facilis maiores
          impedit voluptas error fuga.
        </div>

        <div className="mb-3 text">
          "Do not risk it! Protecct yourself right now by downloading Hide VPN"
          -William
        </div>
        <div>
          <button className="flex align-center bg-2 p rounded">
            <span class="material-symbols-outlined mr-3">download</span>DOWNLOAD HIDE
            VPN
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Warning;
