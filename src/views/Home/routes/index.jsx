import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      tagList: [
        {
          path: "/found",
          name: "推荐"
        },
        {
          path: "/toplist",
          name: "排行榜"
        },
        {
          path: "/playlist",
          name: "歌单"
        },
        {
          path: "/djradio",
          name: "主播电台"
        },
        {
          path: "/singer",
          name: "歌手"
        },
        {
          path: "/album",
          name: "新碟上架"
        }
      ],
      tagIndex: 0
    };
  }

  componentDidMount() {
    this._initIndex()
  }

  setTagIndex = index => {
    this.setState({
      tagIndex: index
    });
  };

  _initIndex = ()=>{
    var path = window.location.pathname
    var index = this.state.tagList.findIndex(item=>{
      return path.indexOf(item.path) > -1
    })
    this.setState({
      tagIndex:index
    })
  }

  render() {
    return (
      <div
        className={`wrapper-box ${
          this.props.path.indexOf("/discover") > -1 || this.props.path === "/"
            ? "content-nav-wrapper"
            : "no-wrapper"
        }`}
      >
        <div
          className="tag-wrapper"
          style={{
            display:
              this.props.path.indexOf("/discover") > -1 || this.props.path === "/"
                ? "block"
                : "none"
          }}
        >
          <ul>
            {this.state.tagList.map((row, index) => {
              return (
                <li key={index} onClick={()=>{
                  this.setTagIndex(index);
                  this.props.onRouterPath(`/discover${row.path}`)
                }}>
                  <Link to={`/discover${row.path}`}>
                    <em
                      className={
                        this.state.tagIndex === index ? "is-active" : ""
                      }
                    >
                      {row.name}
                    </em>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

/**
 * 映射state和dispatch
 */

const mapStateToProps = state => {
  return {
    path: state.path
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRouterPath: path => {
      dispatch({ type: "ROUTER_ACTION", path: path });
    }
  };
};

Routes = connect(mapStateToProps,mapDispatchToProps)(Routes);

export default Routes;
