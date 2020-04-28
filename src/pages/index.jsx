import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import SEO from "../components/SEO";
import CtaButton from "../components/CtaButton";
import config from "../../data/SiteConfig";
import Navigation from "../components/Layout/Navigation";

class Index extends React.Component {
  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges;

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width="150px" alt="" />
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>Trong 100 năm qua chưa có đại dịch nào như COVID-19</h2>
            <p>
              Có lẽ vì thế mà trên mạng có rất nhiều thông tin sai lệch về căn
              bệnh này. Những thông tin này gây lo sợ vô cớ, hoặc khiến người ta
              chủ quan vì tin tưởng vào những phương pháp phòng chữa bệnh chưa
              được kiểm chứng. Hơn nữa, lượng thông tin về dịch bệnh từ báo chí,
              truyền hình, mạng xã hội như một cơn lũ ào ạt đổ xuống đầu bạn
              hàng ngày, là một nguồn gây stress không nhỏ.
            </p>
            <p>
              Thông tin COVID mong cung cấp tới các bạn chỉ những thông tin quan
              trọng nhất về COVID-19, không thừa không thiếu. Dự án này được bắt
              đầu từ việc mình hàng ngày phân tích và bàn luận các tin tức về
              đại dịch cùng với gia đình, nên mục tiêu là lời lẽ dân dã và dễ
              hiểu.
            </p>
            <p>
              Vì đây là căn bệnh mới, thay đổi hàng ngày, qua quá trình chọn lọc
              và tiêu hoá thông tin không thể tránh khỏi có những chủ quan cá
              nhân. Thông tin COVID sẽ cố gắng trích nguồn khi có thể, chọn lọc
              các nguồn đáng tin cậy nhất: báo cáo khoa học từ các tổ chức uy
              tín, hoặc các trang tin tức lâu đời và nhiều người đọc. Nếu cảm
              thấy mục nào có thiếu sót lớn, hoặc nếu muốn đóng góp nội dung,
              bạn có thể gửi <a href="mailto:nh273@cornell.edu">email</a>, hoặc
              mở Pull Request trên{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nh273/covid19"
              >
                Github
              </a>
              .
            </p>
            <CtaButton to="/covid-19-nguy-hiểm-dến-dau">
              Bắt đầu đọc từ đây
            </CtaButton>

            <div className="contributors">
              <p>
                Thông tin COVID-19 created by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/nh273"
                >
                  Phillip Nguyen
                </a>
                . Based on a Gatsby Starter by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https:twitter.com/ericwindmill"
                >
                  {" "}
                  Eric Windmill
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Levino"
                >
                  Levin Keller
                </a>
                .
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: ${(props) => props.theme.brand};
  padding: ${(props) => props.theme.sitePadding};
  text-align: center;
`;

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`;

const BodyContainer = styled.div`
  padding: ${(props) => props.theme.sitePadding};
  max-width: ${(props) => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
