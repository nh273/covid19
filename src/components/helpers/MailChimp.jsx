import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailChimp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      submitted: false,
      submitMessage: '',
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // FIXME: plugin had some issues leading to
    // ReferenceError: GATSBY_PLUGIN_MAILCHIMP_ADDRESS is not defined
    const mailchimpEndpoint =
      'https://thongtincovid.us8.list-manage.com/subscribe/post?u=dc3e5d7498ae6b007aa3f8b95&amp;id=a0450be6ef'
    addToMailchimp(this.state.value, {}, mailchimpEndpoint)
      .then((data) => {
        this.setState({ submitted: true, submitMessage: data.msg })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const chimpStyle = {
      fontSize: 'calc(5px + 3vmin)',
      color: 'white',
      backgroundColor: '#8abeb7',
      margin: '1.5vmin',
      padding: '5vmin',
      align: 'center',
      borderRadius: '10px',
    }

    const unsubmitted = (
      <div className="mailchimp-form" style={chimpStyle}>
        Nếu bạn thấy trang này có ích, hãy đăng ký để nhận email (nhiều nhất 1
        tuần/lần, chắc là ít hơn) khi có những thông tin thay đổi mới quan
        trọng. <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input type="submit" value="Nhận email" />
        </form>
      </div>
    )

    const submitted = (
      <div style={chimpStyle}>
        Cảm ơn các bạn đã đăng ký! <br /> {this.state.submitMessage}
      </div>
    )

    return this.state.submitted ? submitted : unsubmitted
  }
}

export default MailChimp
