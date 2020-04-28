import React, { Component } from "react";

class About extends Component {
  render() {
    const aboutStyle = {
      fontSize: "2.5vmin",
      padding: "4vmin",
    };
    return (
      <div className="about">
        <div className="about-text" style={aboutStyle}>
          Nếu muốn đóng góp nội dung, vui lòng gửi{" "}
          <a href="mailto:nh273@cornell.edu">email</a>, hoặc mở Pull Request
          trên <a href="https://github.com/nh273/covid19">Github</a>.
          <br />
          <br />
          Chi phí duy trì trang web này không đáng kể. Nếu thấy thông tin ở đây
          bổ ích, bạn có thể share cho bạn bè và người thân. <br />
          Mọi đóng góp qua{" "}
          <a href="https://opencollective.com/thong-tin-covid">
            Open Collective
          </a>{" "}
          sẽ được dành cho việc đưa trang web này tới nhiều người hơn.
          <br />
          <br />
          Để ủng hộ chính phủ Việt Nam chống dịch, bạn có thể nhắn tin với cú
          pháp <code>CV n</code> gửi 1407 (Trong đó, n là số lần ủng hộ 20.000
          đồng). Mỗi tin nhắn sẽ đóng góp 20.000 đồng nhân n lần (trong đó n
          giới hạn từ 1 đến 100).
        </div>

        <iframe
          title="feedback-google-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfo7asPFb-lLAWJy7ryjVtB9qylULQO7w9kkTq6wd9ujfOkwA/viewform?embedded=true"
          width="640"
          height="540"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

export default About;
