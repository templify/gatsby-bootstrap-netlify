import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import "../global.css"
import "./SidebarLayout.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Layout = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`

const Sidebar = styled.div`
  width: 300px;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  z-index: 200;

  @media screen and (max-width: 992px) {
    position: absolute;
    height: 100%;
  }

  .nav-header {
    display: flex;
    height: 56px;
    align-items: center;
    background-color: rgb(248,249,250);
    border-bottom: 1px solid #eee;
    padding: 0px 20px;


    .branding {
      font-size: 22px;
      flex: 1;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .nav-close-btn {
      height: 20px;
      width: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .nav-main {
    padding: 20px;
    flex: 1;
    min-height: 1px;
    overflow-y: scroll;
    background-color: white;

    .nav-section {
      margin-bottom: 10px;
    }

    .nav-section-header {
      font-weight: bold;
      margin-bottom: 5px;
    }

    ul {
      margin: 0px;
      padding: 0px;
    }

    li {
      list-style-type: none;
      margin-bottom: 2px;

      a {
        padding: 8px 0px;
      }
    }
  }

  .nav-footer {
    height: 56px;
    background-color: rgb(248,249,250);
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
`

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const AppBar = styled.div`
  width: 100%;
  height: 56px;
  background-color: rgb(248,249,250);
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 20px;

  .app-bar-left {
    display: flex;
    align-items: center;

    .app-bar-title {
      font-size: 22px;
    }
  }

  .menu-btn {
    height: 25px;
    width: 25px;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`

const Content = styled.div`
  flex: 1;
  min-height: 1px;
  overflow-y: scroll;
`

const SidebarOverlay = styled.div`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
`

type Props = {
  children: any,
  navItems: any,
  footer?: any,
  pageTitle?: string
}

function SidebarLayout(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { children, navItems, footer, pageTitle } = props

  function onMenuBtnClicked() {
    setIsMenuOpen(true)
  }

  function onNavCloseBtnClicked() {
    setIsMenuOpen(false)
  }

  return (
    <Layout>
      <SidebarOverlay className={`d-lg-none ${isMenuOpen ? "" : "d-none"}`}/>
      <Sidebar className={isMenuOpen ? "" : "d-none d-lg-flex"}>
        <div className="nav-header">
          <div className="branding">
            <Link to="/">GBN Template</Link>
          </div>
          {isMenuOpen && (
            <FontAwesomeIcon className="nav-close-btn" icon={faTimes} onClick={onNavCloseBtnClicked}/>
          )}
        </div>
        <div className="nav-main">
          {navItems.map(section => (
            <div className="nav-section">
              {section.name && (
                <>
                  <div className="nav-section-header">
                    { section.name }
                  </div>
                  <ul>
                    {section.items.map(item => (
                      <li>
                        {item.to.startsWith("http") ? (
                          <a href={item.to} className="nav-link" target="_blank">
                            {item.display}
                          </a>
                        ) : (
                          <Link className="nav-link" to={item.to}>
                            {item.display}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        {footer && (
          <div className="nav-footer">
            { footer }
          </div>
        )}
      </Sidebar>
      <Main>
        <AppBar>
          <div className="app-bar-left">
            <FontAwesomeIcon onClick={onMenuBtnClicked} icon={faBars} className="menu-btn d-block d-lg-none d-xl-none" />
            <div className="app-bar-title">
              { pageTitle }
            </div>
          </div>
        </AppBar>
        <Content>
          { children }
        </Content>
      </Main>
    </Layout>
  )
}

export default SidebarLayout
