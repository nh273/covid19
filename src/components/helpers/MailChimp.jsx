import React from "react";

class MailChimp extends React.Component {
  render() {
    const chimpStyle = {
      fontSize: "calc(5px + 2.5vmin)",
      color: "white",
      backgroundColor: "#8abeb7",
      margin: "1.5vmin",
      padding: "5vmin",
      align: "center",
      borderRadius: "10px",
    };

    const buttonStyle = {
      fontSize: "5vmin",
      padding: "2vmin",
    };

    return (
      <div id="mc_embed_signup" style={chimpStyle}>
        Nếu bạn thấy trang này có ích, hãy đăng ký để nhận email (nhiều nhất 1
        tuần/lần, chắc là ít hơn) khi có những thông tin thay đổi mới quan
        trọng. <br />
        <form
          action="https://thongtincovid.us8.list-manage.com/subscribe/post?u=dc3e5d7498ae6b007aa3f8b95&amp;id=a0450be6ef"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="clear">
            <input
              style={buttonStyle}
              type="submit"
              value="Click vào đây để đăng ký"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MailChimp;
