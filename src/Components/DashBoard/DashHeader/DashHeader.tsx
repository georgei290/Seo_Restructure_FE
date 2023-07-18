import React, { useState } from "react";
import DashSideBar from "./DashSideBar";
import styled from "styled-components";
import log from "../../LandingPage/Images/logo.png";
import ava from "../../LandingPage/Images/avatar.png";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import SideBarMobile from "./SideBarMobile";
import { useSelector } from "react-redux";

const DashHeader = () => {
  const [show, setShow] = useState(false);
  const user = useSelector((state: any) => state.currentUser);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Container>
        <Head>
          <Logo src={log} />
          <SecondHold>
            <SearchHold>
              <span>
                <CiSearch />
              </span>
              <Input placeholder="Make a search" />
            </SearchHold>
            <UserName>{user?.userName}</UserName>
            {user?.avatar ? (
              <UserAvatar src={user?.avatar} />
            ) : (
              <UserAvatarChat>{user?.userName?.charAt(0)}</UserAvatarChat>
            )}
            <MenuIcon onClick={toggleShow}>
              <BiMenu
                style={{
                  marginTop: "20px",
                }}
              />
            </MenuIcon>
          </SecondHold>
        </Head>
      </Container>
      <Hold>
        {" "}
        <DashSideBar />
      </Hold>

      {show ? <SideBarMobile toggleShow={toggleShow} /> : null}
    </>
  );
};

export default DashHeader;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: center;
  font-size: 30px;
  margin-left: 40px;
  display: none;
  width: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Hold = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchHold = styled.div`
  background-color: #e2e2e2;
  width: 300px;
  height: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 20px;

  span {
    margin-top: 20px;
    color: gray;
  }

  @media screen and (max-width: 768px) {
    display: none;
    margin-right: 0;
  }
`;
const SecondHold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;
const UserName = styled.div`
  margin-right: 10px;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    max-width: 50px;
    font-size: 13px;
  }
`;
const UserAvatarChat = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: silver;
  object-fit: cover;
  border: 1px solid #c175d1;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: silver;
  object-fit: cover;
  border: 1px solid #c175d1;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex: 1;

  ::placeholder {
    color: gray;
    font-family: Montserrat;
  }
`;

const Logo = styled.img`
  width: 130px;

  height: 40px;
  margin-left: 70px;
  object-fit: contain;
  /* background-color: red; */

  @media screen and (max-width: 790px) {
    margin-left: 30px;
    width: 100px;
  }
`;

const Head = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: fixed;

  z-index: 10001;
  background-color: white;
`;
const Container = styled.div``;
