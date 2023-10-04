import React from "react";
import "../../../assets/scss/Warning.scss";

const Warning = () => {
  return (
    <div className="warning-box">
      {/* <div className="warning-box"> */}
      <div className="warning-text">
        <div className="warning_header">Warning! Download only with VPN...</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          obcaecati id ratione necessitatibus, modi deserunt eligendi iste sequi
        </div>
        <div>
          tempore provident numquam molestiae eum, accusamus facilis maiores
          impedit voluptas error fuga.
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          obcaecati id ratione necessitatibus, modi deserunt eligendi iste sequi
          tempore provident numquam molestiae eum, accusamus facilis maiores
          impedit voluptas error fuga.
        </div>

        <div>
          "Do not risk it! Protecct yourself right now by downloading Hide VPN"
          -William
        </div>
        <div>
          <button className="flex align-center">
            <span class="material-symbols-outlined">download</span>DOWNLOAD HIDE
            VPN
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Warning;
